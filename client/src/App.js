import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import GetAQuote from './components/GetAQuote';
import Splash from './components/Home-Page/Splash';
import Intro from './components/Home-Page/Intro';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Splash />
      <Intro />
      <GetAQuote />
      <footer>&#10508; This is the footer &#10509;</footer>
    </div>
  );
}

export default App;
