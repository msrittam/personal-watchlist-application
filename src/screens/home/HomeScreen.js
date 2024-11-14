import "./HomeScreen.css"
import {useState, useEffect} from "react"
import MovieComponent from "../components/MovieComponent"
import {fetchMoviesServices} from "../../services/FetchMoviesServices"
export default function HomeScreen(){
    const [searchbar, setSearchbar] = useState("");
    const [response, setResponse] = useState([]);
    const [errorMessage, setErrorMessage]=useState("");
    useEffect(function(){
        onFocusFunction();
    },[])
    async function onFocusFunction(){
        setResponse([]);
        setErrorMessage("please wait while we load your content")
        const response = await fetchMoviesServices(searchbar);
        if(searchbar===""){setErrorMessage("please enter something for search")}
        else{if(response === "error"){setResponse([]);
        setErrorMessage("error message: some client side error occured")}
        else{ if(response.status === 200){
                if(response.data.Response === "False"){setResponse([]);
                setErrorMessage("error message: "+response.data.Error)}
                else{setErrorMessage("");
                setResponse(response.data.Search)}
            }else{setErrorMessage("error message: some server side error occured")
            setResponse([]);}}}
    }
    async function searchbarFunction(searchbarEvent){
        setResponse([]);
        setErrorMessage("please wait while we load your content")
        setSearchbar(searchbarEvent)
        const response = await fetchMoviesServices(searchbarEvent);
        if(searchbarEvent===""){setErrorMessage("please enter something for search")}
        else{if(response === "error"){setResponse([]);
        setErrorMessage("error message: some client side error occured")}
        else{ if(response.status === 200){
                if(response.data.Response === "False"){setResponse([]);
                setErrorMessage("error message: "+response.data.Error)}
                else{setErrorMessage("");
                setResponse(response.data.Search)}
            }else{setErrorMessage("error message: some server side error occured")
            setResponse([]);}}}
    }
    return(
    <div className="HomeScreenWrapper">
    <div className="HomeNoteWrapper">
        <h1>Welcome to Watchlists</h1>
        <p>Browse movies, add them to watchlists and share them with friends.
        Just click the add button to add a movie and click the poster to see more details</p>
    </div>
    <input placeholder="Search for movies" value={searchbar} onChange={function(event){searchbarFunction(event.target.value)}}/>
    <p className="HomeErrorMessages">{errorMessage}</p>
    {/*use below code for the loading screen*/}
    {/*<p className="HomeLoadingText">Search for Movies</p>*/}
    <div className="MoviesContainer">
    {response.filter(function (responseData) {
                 return responseData.Poster !== "N/A";
             }).map(function(responses, index){
    return <div key={index}><MovieComponent responses={responses} buttonType="Add"/></div>})}
    </div>
    </div>)
}