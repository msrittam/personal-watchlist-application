import "./WishlistScreen.css"
import Cookies from "js-cookie";
import MovieComponent from "../components/MovieComponent"
import { useMoviesContext } from "../../hooks/UseMoviesContext";
export default function WishlistScreen(){
    const emailAddress = Cookies.get("authToken")
    const { movies } = useMoviesContext();
    return(
    <div className="HomeScreenWrapper">
    <div className="HomeNoteWrapper">
        <h1>About the Watchlist</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.</p>
    </div>
    {/*use below code for the loading screen*/}
    {/*<p className="HomeLoadingText">Search for Movies</p>*/}
    <div className="MoviesContainer">
    {movies.filter(function (responseData) {
                 return responseData.emailAddress === emailAddress;
             }).filter(function (responseData) {
                 return responseData.Poster !== "N/A";
             }).map(function(responses, index){
    return <div key={index}><MovieComponent responses={responses} buttonType="Remove" /></div>})}
    </div>
    </div>)
}