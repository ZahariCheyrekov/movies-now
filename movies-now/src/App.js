import './App.css';
import Header from './components/Header';

import { Routes, Route } from 'react-router-dom';

import Movies from './components/Movies';
import CreateMovie from './components/CreateMovie';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/create' element={<CreateMovie />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;