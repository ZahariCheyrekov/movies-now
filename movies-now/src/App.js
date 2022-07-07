import './App.css';

import Header from './components/Header';
import CreateMovie from './components/CreateMovie';
import Movies from './components/Movies';

function App() {
  return (
    <div className="site-content">
      <Header />
      <CreateMovie />
      <Movies />
    </div>
  );
}

export default App;