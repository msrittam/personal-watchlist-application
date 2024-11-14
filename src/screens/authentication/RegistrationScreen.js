import "./RegistrationScreen.css"
import { useState } from "react"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";//importing useNavigate for navigation purpose
import { useUsersContext } from "../../hooks/UseUsersContext";//importing useAuthContext for creating new user
export default function RegistrationScreen(){
    const navigate = useNavigate();//initializing navigate for navigation purpose
    const [emailAddress,setEmailAddress]=useState("");
    const [errorMessage, setErrorMessage]=useState("");
    const { users } = useUsersContext();//initializing users list for validating user
    const { dispatch2 } = useUsersContext();//initializing dispatch for creating new user
    function registerFunction(){
      setErrorMessage("please wait while we create your new account, and please donot close the website")
      function userExists(emailAddress) {
        return users.some(function(data) {
        return data.emailAddress === emailAddress;
        });//here we will check whether email already exists
      }
      if(emailAddress===""){//here we are checking whether email address is empty
        setErrorMessage("error: please enter your email address before clicking the register button")
      } else if(userExists(emailAddress)){//here we will check whether email already exists
        setErrorMessage("error: email already registered, so please use different email address")
      } else {//here we will make new user and send that into redux store
        const newUserData = { emailAddress: emailAddress }
        const changedUsers = [...users, newUserData]
        Cookies.set("users", JSON.stringify(changedUsers));
        dispatch2({ type: "CREATEUSER", payload: changedUsers });
        setErrorMessage("successfully created your account, now please go inside login page for getting into application")
      }}
    return(
    <div className="LoginScreenWrapper">
        <div className="LoginComponent">
            <h1>Registration Screen</h1>
            <input placeholder="Email address" value={emailAddress} onChange={function(event){setEmailAddress(event.target.value)}}/>
            <button onClick={function(){registerFunction()}}>Register</button>
            <p>Already have account? <span onClick={function(){navigate("/login")}}>go to login</span> </p>
            <p className="LoginErrorMessages">{errorMessage}</p>
        </div>
    </div>)
}
