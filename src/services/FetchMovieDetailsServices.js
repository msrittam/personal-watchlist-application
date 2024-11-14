import axios from "axios";
export async function fetchMovieDetailsServices(searchData) {
    const endPoint = "https://www.omdbapi.com/?apikey=1db50280&i="+searchData+"&page=1";
    try { const response = await axios.get(endPoint);
        return response; }
    catch (error) { return "error"; //return an empty array in case of an error
    }}