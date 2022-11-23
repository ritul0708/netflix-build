import React from 'react'
import Banner from './Banner'
import './Home.css'
import Navbar from './Navbar'
import Row from './Row'
import request from './Request'

const Home = () => {
  return (
    <div className='home'>
      {/* Nav */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={request.fetchTopRated}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={request.fetchTrending} />
      <Row title='Top Rated' fetchUrl={request.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={request.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies} />
      <Row title='Romantic Movies' fetchUrl={request.fetchRomanceMovies} />
      <Row title='Horrow Shows' fetchUrl={request.fetchHorrorMovies} />
      <Row title='Documentaries' fetchUrl={request.fetchDocumentariesMovies} />
      
    </div>
  )
}

export default Home