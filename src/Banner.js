import React from 'react'
import instance from './instance'
import { useState,useEffect } from 'react'
import requests from './request'
import './Banner.css'
function Banner() {
    const [movie,setMovies]=useState([])
    useEffect(()=>{ async function fetchData()
    {
        const request= await instance.get(requests.fetchNetflixOriginals)
        setMovies (request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
    }fetchData()
},[])
   function truncate(str,n)
   {
    return str?.length>n?str.substr(0,n-1)+ "...": str
   }
  return (
    <div>
        <header
         className='banner'
          style={{backgroundSize:"cover",
         backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,backgroundPosition:'center center'
         }}>
          <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie?.title||movie?.name||movie?.orignal_name}
            </h1>
            <h1 className='banner_description'>{truncate(movie.overview,150)}</h1>
          </div>
         </header>

    </div>
  )
}

export default Banner