import React from 'react'
import { useState,useEffect} from "react";
import instance from "./instance";
import './Row.css'
function Row({title,fetchurl,isLargeRow}) {
    const base_url="https://image.tmdb.org/t/p/original/"  
    const[movies,setMovies]=useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchurl)
              console.log(request)
            setMovies(request.data.results)
        }
        fetchData()
    }, [])

    
    console.log("movie data is",movies)
  return (
    <div className='row'>
        <h2>{title}</h2>
    
    <div className='row__posters'>
           {movies.map((movie)=>(
           <img key={movie.id} className='row__poster'
           src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
           alt={movie.name}/>))}
        </div></div>
  )
}

export default Row