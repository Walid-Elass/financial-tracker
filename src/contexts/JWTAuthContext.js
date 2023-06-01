import React, { createContext, useEffect, useReducer, useRef } from "react";
import userAxiosInstance from "../services/userAxios";
import { validateToken } from "../utils/jwt";
import { setSession } from "../utils/session";

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

export const AuthContext = createContext();

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
      
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      
    };
  },
};

const reducer = (state, action) =>  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthProvider = (props) => {
  const {children} = props
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {

        const accessToken = sessionStorage.getItem("accessToken");
        if (accessToken && validateToken(accessToken)) {
          setSession(accessToken);

          const response = await userAxiosInstance.get("/users/me");
          const { data: user } = response;
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user,
              
            },
          });
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
    };
    initialize();
  }, []);

  console.log('AuthContext state: ',state)

  return(
    <AuthContext.Provider value={{
      state,dispatch
    }}>
      
      {children}
    </AuthContext.Provider>
  )


};