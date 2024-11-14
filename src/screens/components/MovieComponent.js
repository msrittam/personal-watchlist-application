import "./MovieComponent.css"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";//importing useNavigate for navigation purpose
import { useMoviesContext } from "../../hooks/UseMoviesContext";
export default function MovieComponent(props){
    const navigate = useNavigate();//initializing navigate for navigation purpose
    const { dispatch3 } = useMoviesContext();
    const { movies } = useMoviesContext();
    function clickedImageFunction(){
        Cookies.set("searchData",props.responses.imdbID)
        navigate("/home/description");}
    function buttonClickFunction(){
        if(props.buttonType==="Add"){
        const emailAddress = Cookies.get("authToken")
        const newMovieData = {
            Title: props.responses.Title,
            Year: props.responses.Year,
            imdbID: props.responses.imdbID,
            Type: props.responses.Type,
            Poster: props.responses.Poster,
            emailAddress: emailAddress,
            watchlistMovieId: movies.length+1,
            watchlistId:1}
        const changedMovies = [...movies, newMovieData]
        Cookies.set("movies", JSON.stringify(changedMovies));
        dispatch3({ type: "CREATEMOVIES", payload: changedMovies });
        navigate("/home/wishlist");}
        else if(props.buttonType==="Remove"){
            const watchlistMovieId = props.responses.watchlistMovieId
            const changedMovies = movies.filter(function (responseData) {
            return responseData.watchlistMovieId !== Number(watchlistMovieId);})
            Cookies.set("movies", JSON.stringify(changedMovies));
            dispatch3({ type: "CREATEMOVIES", payload: changedMovies });
        }
    }
    return(
    <div className="MovieComponentWrapper">
        <div className="SavePosterWrapper">
            <button onClick={function(){buttonClickFunction()}}>{props.buttonType}</button>
            <img src={props.responses.Poster} alt={props.responses.Poster} onClick={function(){clickedImageFunction()}}/>
        </div>
        <div className="MovieNameWrapper"><p>{props.responses.Title==="N/A"?"null":props.responses.Title}<br/>
        <span>({props.responses.Year==="N/A"?"null":props.responses.Year})</span></p></div>
    </div>)
}