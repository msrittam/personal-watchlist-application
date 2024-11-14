import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
export const UsersContext = createContext();
export const usersReducer = (state, action) => {
  switch (action.type) {
    case "CREATEUSER": return { users: action.payload };
    default: return state;
    }};

var users = Cookies.get("users");
var value = JSON.stringify([])
if (users === "") { value = JSON.stringify([])}
else if (users === null) { value = JSON.stringify([])}
else if (users === undefined) { value = JSON.stringify([])}
else { value = users;}
export const UsersContextProvider = ({ children }) => {
  const [state, dispatch2] = useReducer(usersReducer, { users: JSON.parse(value) });
  return (<UsersContext.Provider value={{ ...state, dispatch2 }}>{children}</UsersContext.Provider>);
  };