import "./DescriptionScreen.css"
import {useEffect, useState} from "react"
import Cookies from "js-cookie";
import {fetchMovieDetailsServices} from "../../services/FetchMovieDetailsServices"
export default function DescriptionScreen(){
    const [response, setResponse] = useState({});
    const [errorMessage, setErrorMessage]=useState("");
    useEffect(function(){
        onFocusFunction()
    },[])
    async function onFocusFunction(){
        setResponse({});
        const searchData = Cookies.get("searchData")
        setErrorMessage("please wait while we load your content")
        const response = await fetchMovieDetailsServices(searchData);
        if(searchData===""){setErrorMessage("please enter something for search")}
        if(searchData===null){setErrorMessage("please enter something for search")}
        if(searchData===undefined){setErrorMessage("please enter something for search")}
        else{if(response === "error"){setResponse({});
        setErrorMessage("error message: some client side error occured")}
        else{ if(response.status === 200){
                if(response.data.Response === "False"){setResponse({});
                setErrorMessage("error message: "+response.data.Error)}
                else{setErrorMessage("");
                setResponse(response.data)}
            }else{setErrorMessage("error message: some server side error occured")
            setResponse({});}}}
    }
    return(
    <>{errorMessage===""?<div className="DescriptionScreenWrapper">
        {response.Poster==="N/A"?null:<div className="DescriptionScreenImage">
            <img src={response.Poster} alt={response.Poster} title="MovieComponent"/>
        </div>}
        <div className="DescriptionNoteWrapper">
            <h1>{response.Title==="N/A"?"none":response.Title}</h1>
            <p>{response.Plot==="N/A"?"none":response.Plot}<br/>
            <span>Release year: {response.Year==="N/A"?"none":response.Year}</span></p>
        </div>
    </div>:
    <div className="DescriptionScreenWrapper">
        <p className="HomeErrorMessages">{errorMessage}</p>
    </div>}</>)
}