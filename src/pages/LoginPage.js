import React, { useState } from 'react'
import './LoginPage.css'
import SignUpPage from './SignUpPage'

const LoginPage = () => {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className='loginPage'>
      <div className="loginPage-background">
        <img 
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" 
          alt="Netflix logo" 
          className='loginPage-logo'
        />
        <button 
          className='loginPage-signin'
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        <div className="loginPage-gradient"></div>
      </div>
      <div className="loginPage-body">
        {signIn && <SignUpPage />}
        {!signIn && (
          <>
            <h1>Unlimited Movies, Web Series and more</h1>
            <h2>Watch anywhere, Cancel at any time</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
            <div className="loginPage-input">
              <form>
                <input type="email" placeholder='Email Address' />
                <button 
                  className="loginPage-getStarted"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginPage