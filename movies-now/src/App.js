import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import CreateMovie from './components/CreateMovie';
import Footer from './components/Footer';

import NotificationContext from './contexts/notificationContext';
import Notification from './components/Notification';

function App() {
  return (
    <>
      <NotificationContext.Provider value={'a'}>
        <Header />

        <main>
          <Notification />
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/create' element={<CreateMovie />} />
          </Routes>
        </main>

      </NotificationContext.Provider >
      <Footer />
    </>
  );
}

export default App;