import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deploy a React App on Section
        </p>
        <a
          className="App-link"
          href="https://www.section.io/docs/tutorials/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </a>
      </header>
    </div>
  );
}

export default App;
