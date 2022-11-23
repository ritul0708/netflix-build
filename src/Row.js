import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow=false  }) => {
  const [movies, setMovies] = useState([]);

  const base_url = 'http://image.tmdb.org/t/p/original/'

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData();
  }, [fetchUrl])

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row-images">
        {movies.map(movie => (
          ((isLargeRow && movie.poster_path) || 
          (!isLargeRow && movie.backdrop_path)) && (
            <img 
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name} 
              className={`row-image ${isLargeRow && "row-imageLarge"}`}
              key={movie.id}
            />
          )
        ))}
      </div>
    </div>
  )
}

export default Row;