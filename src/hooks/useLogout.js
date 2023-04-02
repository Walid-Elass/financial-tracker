import { useAuthContext } from "./useAuthContext";


export const useLogout = () => {

  const { dispatch } = useAuthContext()

  const logout = () => {
    resetSession()
    dispatch({type: "LOGOUT"})
  }

}