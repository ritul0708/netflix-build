import axios from '../axios';
import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../Request';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ])
      return request;
    }
    fetchData();
  }, [])
  console.log(movie);


  const truncateDescription = (string, n) => {
    return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }

  return (
    <header 
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1S5MUbYotAh-1DNtpCrpizWu-mYVPQQiDFvwPn4OdSil7h7Z9i_zrafkxWpgMO7DJ97s&usqp=CAU")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">Movie Name</h1>
        <div className="banner-buttons">
          <button className='banner-button'>Play</button>
          <button className='banner-button'>My List</button>
        </div>
        <h1 className="banner-description">
          {truncateDescription(`This is a test description for netflix movies which is popular that shows on banner
          This is a test description for netflix movies which is popular that shows on banner
          This is a test description for netflix movies which is popular that shows on banner
          This is a test description for netflix movies which is popular that shows on banner`,
          150)}
        </h1>
      </div>
      <div className="banner-fadeButton"/>
    </header>
  )
}

export default Banner