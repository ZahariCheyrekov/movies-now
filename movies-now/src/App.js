import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import CreateMovie from './components/CreateMovie';
import CardDetails from './components/CardDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/create' element={<CreateMovie />} />
          <Route path='/movies/details/:movieCardId' element={<CardDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;