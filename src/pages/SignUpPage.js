import React, { useRef } from 'react'
import { auth } from '../firebase';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './SignUpPage.css'

const SignUpPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser)
    })
    .catch(error => {
      alert(error.message);
    });
  }

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      auth, 
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser)
    })
    .catch(error => {
      alert(error.message);
    });

  }

  return (
    <div className='signupPage'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>
          <span className="signupPage-gray">New to Netflix?</span>
          <span className="signupPage-link" onClick={register}>Sign Up Now</span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpPage