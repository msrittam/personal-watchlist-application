
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Container from "./screens/home/Container";
import LoginScreen from "./screens/authentication/LoginScreen";
import RegistrationScreen from "./screens/authentication/RegistrationScreen";
import { useAuthContext } from "./hooks/UseAuthContext";
export default function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!user ? <LoginScreen /> : <Navigate to="/home/" />} />
        <Route path="/login" element={!user ? <LoginScreen /> : <Navigate to="/home/" />} />
        <Route path="/registration" element={!user ? <RegistrationScreen /> : <Navigate to="/home/" />} />
        <Route path="/home/*" element={user ? <Container /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}