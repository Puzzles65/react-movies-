import React, { useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';


import NavBar from '../../components/Navbar';
import ActorListPage from '../ActorListPage';
import LoginPage from '../LoginPage';
import MovieDetailPage from '../MovieDetailPage';
import MoviesListPage from '../MoviesListPage';



function App() {
  const [user, setUser] = useState([]);

  return (
  <main className="App">
    <NavBar />  
    { 
      user ?
      <Routes>
        <Route path="/" element={<MoviesListPage/>} />
        <Route path="/movies/:movieName" element={<MovieDetailPage/>} />
        <Route path="/actors" element={<ActorListPage/>} />
      </Routes>
      :
      <LoginPage />
    }
  </main>
  );
}

export default App;
