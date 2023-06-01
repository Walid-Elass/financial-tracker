import userAxiosInstance from '../services/userAxios'

export const setSession = (accessToken, refreshToken = null) => {
    if (accessToken){
        sessionStorage.setItem("accessToken",accessToken)
        userAxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
    }else {
        sessionStorage.removeItem("accessToken")
        delete userAxiosInstance.defaults.headers.common["Authorization"]
    }
    if (refreshToken){
        sessionStorage.setItem("refreshToken",refreshToken)

    }
};

export const resetSession = (accessToken,refreshToken)=>{
    sessionStorage.removeItem("accessToken",accessToken)
    sessionStorage.removeItem("refreshToken",refreshToken)
    delete userAxiosInstance.defaults.headers.common["Authorization"]
}