import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
export const AuthContext = createContext();
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": return { user: action.payload };
    case "LOGOUT": return { user: null };
    default: return state;
  }};

var token = Cookies.get("authToken");
var value = null;
if (token === "") { value = null;}
else { value = token;}
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: value });
  return (<AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>);
  };