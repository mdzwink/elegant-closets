import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import GetAQuote from './components/GetAQuote';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <GetAQuote />
      <footer>&#10508; This is the footer &#10509;</footer>
    </div>
  );
}

export default App;
