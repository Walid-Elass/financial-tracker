import {axiosInstance} from '../services/axios'

export const setSession = (accessToken, refreshToken = null) => {
    if (accessToken){
        localStorage.setItem("accessToken",accessToken)
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
    }else {
        localStorage.removeItem("accessToken")
        delete axiosInstance.defaults.headers.common["Authorization"]
    }
    if (refreshToken){
        localStorage.setItem("refreshToken",refreshToken)

    }
};

export const resetSession = (accessToken,refreshToken)=>{
    localStorage.removeItem("accessToken",accessToken)
    localStorage.removeItem("refreshToken",refreshToken)
    delete axiosInstance.defaults.headers.common["Authorization"]
}