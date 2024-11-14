import "./LoginScreen.css"
import { useState } from "react"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";//importing useNavigate for navigation purpose
import { useAuthContext } from "../../hooks/UseAuthContext";//importing useAuthContext for maintaining user session
import { useUsersContext } from "../../hooks/UseUsersContext";//importing useAuthContext for creating new user
export default function LoginScreen(){
    const navigate = useNavigate();//initializing navigate for navigation purpose
    const [emailAddress,setEmailAddress]=useState("");
    const [errorMessage, setErrorMessage]=useState("");
    const { users } = useUsersContext();//initializing users list for validating user
    const { dispatch } = useAuthContext();//initializing dispatch for changing user session
    const { dispatch2 } = useUsersContext();//initializing dispatch for creating new user
    function loginFunction(){
      setErrorMessage("please wait while we login your account, and please donot close the website")
      function userExists(emailAddress) {
        return users.some(function(data) {
        return data.emailAddress === emailAddress;
        });//here we will check whether email already exists
      }
      if(emailAddress===""){//here we are checking whether email address is empty
        setErrorMessage("error: please enter your email address before clicking the login button")
      } else if(userExists(emailAddress)){//here we will check whether email already exists
      setErrorMessage("please wait while we login your account, and please donot close the website")
        Cookies.set("authToken", emailAddress);
        dispatch({ type: "LOGIN", payload: emailAddress });
        navigate("/home");
      } else {//here we will check whether wrong email address is entered
        setErrorMessage("error: entered wrong email address, else go inside registration page for creating new account")
      }}
    return(
    <div className="LoginScreenWrapper">
        <div className="LoginComponent">
            <h1>Login Screen</h1>
            <input placeholder="Email address" value={emailAddress} onChange={function(event){setEmailAddress(event.target.value)}}/>
            <button onClick={function(){loginFunction()}}>Login</button>
            <p>New to here? <span onClick={function(){navigate("/registration")}}>create new account</span> </p>
            <p className="LoginErrorMessages">{errorMessage}</p>
        </div>
    </div>)
}