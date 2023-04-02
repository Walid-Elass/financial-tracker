import jwt_decode from 'jwt-decode';

export const validateToken = (token) => {
    const now = Math.round(new Date().getTime()/1000)
    const decodedToken = jwt_decode(token);
    console.log("Validate token was trigerred")
    console.log("This is the token ",token)
    console.log("this is the decoded token ",decodedToken)
    const isValid = decodedToken && now < decodedToken.exp 

    return isValid
}