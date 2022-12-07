import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import GetAQuote from './components/GetAQuote';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <h1>Hello world!</h1>
      </header>
      <GetAQuote></GetAQuote>
      <footer>This is the footer</footer>
    </div>
  );
}

export default App;
