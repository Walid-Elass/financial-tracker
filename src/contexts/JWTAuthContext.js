import React, { useEffect, useReducer, useRef } from "react";
import axiosInstance from "../services/axios";
import { validateToken } from "../utils/jwt";
import { setSession } from "../utils/session";

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

export const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

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
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGOUT: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      isInitialized: false,
      user: null,
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current)return;
    const initialize = async () => {
      try {
        const accessToken = localStorage.getItem("accesToken");
        if (accessToken && validateToken(accessToken)) {
          setSession(accessToken);

          const response = await axiosInstance.get("/users/me");
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
      } catch (error) {
        console.error(error);
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
    isMounted.current = true;
  }, []);

  const login = async (email, password) => {
    try {
      
    } catch (error) {
      
    }
  }
};
