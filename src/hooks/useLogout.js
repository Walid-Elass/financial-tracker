const logout = () => {
    resetSession()
    dispatch({type: "LOGOUT"})
  }