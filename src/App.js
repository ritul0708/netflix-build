import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { auth } from './firebase';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { login, logout, selectUser } from './reducers/userSlice';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        // logged out
        dispatch(logout())
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        {!user && <LoginPage />}
        {user && (
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<ProfilePage/>} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
