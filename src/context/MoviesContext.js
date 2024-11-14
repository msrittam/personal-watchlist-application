import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
export const MoviesContext = createContext();
export const moviesReducer = (state, action) => {
  switch (action.type) {
    case "CREATEMOVIES": return { movies: action.payload };
    default: return state;
    }};

var movies = Cookies.get("movies");
var value = JSON.stringify([])
if (movies === "") { value = JSON.stringify([])}
else if (movies === null) { value = JSON.stringify([])}
else if (movies === undefined) { value = JSON.stringify([])}
else { value = movies;}
export const MoviesContextProvider = ({ children }) => {
  const [state, dispatch3] = useReducer(moviesReducer, { movies: JSON.parse(value) });
  return (<MoviesContext.Provider value={{ ...state, dispatch3 }}>{children}</MoviesContext.Provider>);
  };