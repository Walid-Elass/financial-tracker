import { useState } from "react";
import { loginFields } from "../../data/formFields";
import Input from "./Input";
import FormAction from "./FormAction";
import { useLogin } from "../../hooks/useLogin"

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const {login} = useLogin()

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  } 

  const authenticateUser = async () =>{
    console.log(loginState)
    try {
      await login(loginState.email,loginState.password)
      
    } catch (error) {
      console.log(error.response.data.detail)
    }
    
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormAction handleSubmit={handleSubmit} text="Login"/>

    </form>
  );
}
