import { MoviesContext } from "../context/MoviesContext";
import { useContext } from "react";
export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  if (!context) { throw Error("useMoviesContext must be used inside an MoviesContextProvider"); }
  return context;
  };