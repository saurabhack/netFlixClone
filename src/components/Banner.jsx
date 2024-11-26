import { useEffect, useState } from "react"
import "./Banner.css"
import axios from "../axios"
import request from "../Request"
function Banner(){
    const [movie,setMovie]=useState([])
    useEffect(()=>{
        async function fetchData() {
            const req=await axios.get(request.fetchNetflixOriginals)
            console.log(req.data)
            setMovie(req.data.results[
                Math.floor(Math.random()*req.data.results.length-1)
            ])
            return req
        }
        fetchData()
    },[])

    console.log(movie)
    function truncate(string,number){
        return string?.length > number ? string.substring(0,number-1)+'....' : string

    }
    return(
        <>
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie.title || movie.name || movie.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My Lists</button>
                </div>
                <h1 className="bannerDescription">
                    {
                        truncate(movie?.overview,150 )
                    }
                    
                </h1>
            </div>
            <div className="bannerFadeButton"/>
        </header>
        </>
    )
}
export default Banner