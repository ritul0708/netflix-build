import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage';

const App = () => {
  const user = null;

  return (
    <div className="app">
      <BrowserRouter>
        {!user && <LoginPage />}
        {user && (
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
