import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [blackNavbar, handleBlackNavbar] = useState(false);
  const navigate = useNavigate();


  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleBlackNavbar(true);
    } else {
      handleBlackNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    // Cleanup Function 
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, [])

  return (
    <div className={`nav ${blackNavbar && "nav-black"}`}>
      <div className='nav-content'>
        <img 
          onClick={() => navigate("/")}
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" 
          alt="netflix-logo"
          className='nav-logo' 
        />
        <img 
          onClick={() => navigate("/profile")}
          src="https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png" 
          alt="avatar" 
          className='nav-avatar'
        />
      </div>

    </div>
  )
}

export default Navbar