import React from 'react'
import { Register, Header } from '../components/login/'

const RegisterPage = () => {
  return (
    <div className=" flex w-screen h-screen items-center justify-center">
      <div className="  bg-main-bg px-8 py-8 shadow-lg rounded-lg">
        <Header
          heading="Register a new account"
          paragraph="Already have an account ? "
          linkName="Login"
          linkUrl="/login"
        />
        <Register />
      </div>
    </div>
  )
}

export default RegisterPage