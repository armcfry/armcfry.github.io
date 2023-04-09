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
      <div class="link-box">
        <a href="mailto:armcfry@gmail.com">Email Me</a>
      </div>
      <div class="link-box">
        <a href="https://www.linkedin.com/in/armcfry64">LinkedIn</a>
      </div>
      <div class="link-box">
        <a href="https://github.com/armcfry">GitHub</a>
    </div>
  </header>
</div>
  );
}

export default App;
