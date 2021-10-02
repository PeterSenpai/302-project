import logo from './logo.svg';
import './App.css';

function App() {
  console.log(`========= Frontend: I am running! =========`);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am running! (with Netlify connected)</p>
      </header>
    </div>
  );
}

export default App;
