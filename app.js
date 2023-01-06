import {fetchMovieAvailability,fetchMovieList} from "./api.js"
let movie=[];
async function getMovie(){
    const response= await fetchMovieList();
    movie=await response.json();
    console.log(movie);
    showMovie();
}
getMovie();