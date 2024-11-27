import axios from "../axios";
import { useState,useEffect } from "react";
import "./raw.css"

function Raw({title,fetchUrl,isLargeRow=false}){
    const [movies,setMovies]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function  fetchData(){
            const req=await axios.get(fetchUrl)
            setMovies(req.data.results)
            return req
        }
        fetchData()
    },[fetchUrl])
    console.log(movies)
    return(
        <>
        <div className="row">
            <h2 >{title}</h2>
            <div className="row_posters">

            {movies?.map((movie,i)=>((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                    <img 
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={i}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt={movie.name} />
                )
            )}
            </div>
</div>
        </>
    )
}
export default Raw