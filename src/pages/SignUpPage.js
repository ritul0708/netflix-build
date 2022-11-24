import React from 'react'
import './SignUpPage.css'

const SignUpPage = () => {
  return (
    <div className='signupPage'>
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button type='submit'>Sign In</button>

        <h4>
          <span className="signupPage-gray">New to Netflix?</span>
          <span className="signupPage-link">Sign Up Now</span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpPage