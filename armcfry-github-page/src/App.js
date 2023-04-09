import './App.css';

function App() {
  return (

<div className="App">
  <header class="w3-container w3-center w3-padding-32" style={{ color: "white" }}>
    <p>
      <img src={require('./announce_sp.jpg')} width="300" height="300" alt='' />
    </p>
    <p>Welcome to my website! (This site is currently under construction.)</p>
    <div>
      In the meantime, please reach out at my other contact links:
    </div>
    <div>
      <a href="mailto:armcfry@gmail.com" target="_blank" rel="noopener noreferrer">
        <button className="button-link">Email Me</button>
      </a>

      <a href="https://www.linkedin.com/in/armcfry64" target="_blank" rel="noopener noreferrer">
        <button className="button-link">LinkedIn</button>
      </a>

      <a href="https://github.com/armcfry" target="_blank" rel="noopener noreferrer">
        <button className="button-link">GitHub</button>
      </a>
    </div>
  </header>
</div>
  );
}

export default App;
