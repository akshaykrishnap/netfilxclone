import React, { useEffect, useState } from 'react'
import './Row.css'
import instance from '../Instance';


function Row({title,fetchUrl,isPoster}) {
   /*  console.log(title,fetchUrl); */
console.log(isPoster);
   const [movies,setMovies]= useState([])
   const base_url ="https://image.tmdb.org/t/p/original"


   const fetchData = async()=>{
    const response = await instance.get(fetchUrl)
/*     console.log(response.data.results); */
   setMovies(response.data.results)
   }
console.log(movies);

useEffect(()=>{
    fetchData()
},[])

  return (
    <div className='row'>
        <h3>{title}</h3>
        <div className="movie-row">
       { movies.map(item=>(    <img src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt="poster" className={`movie ${isPoster?'movie-poster':'movie'}`} />))}
        </div>
    </div>
  )
}

export default Row