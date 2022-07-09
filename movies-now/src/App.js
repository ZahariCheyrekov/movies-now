import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import CreateMovie from './components/CreateMovie';
import Footer from './components/Footer';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/create' element={<CreateMovie />} />
          <Route path='movies/details/:movieCardId' element={<CardDetails />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;