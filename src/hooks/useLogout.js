import { resetSession } from "../utils/session";
import { useAuthContext } from "./";


const useLogout = () => {

  const { dispatch } = useAuthContext()

  const logout = () => {
    resetSession()
    dispatch({type: "LOGOUT"})
  }

  return {logout}

}

export default useLogout;