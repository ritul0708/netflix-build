import React from 'react'
import Banner from './Banner'
import './Home.css'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='home'>
      {/* Nav */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Row */}
      
    </div>
  )
}

export default Home