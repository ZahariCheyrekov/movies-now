import './App.css';
import Header from './components/Header';

import { Routes, Route } from 'react-router-dom';

import CreateMovie from './components/CreateMovie';
import Movies from './components/Movies';

function App() {
  return (
    <div className="site-content">
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/create' element={<CreateMovie />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;