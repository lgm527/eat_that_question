import React from 'react';
import '../styles/App.css';
import Landing from './Landing';

const playing = () => {
  window.alert("Let's do it!");
  window.location.reload();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Eat That Question
          <br/>
          <span id="play" onClick={() => playing()} id="puncuation"></span>
        </h1>
      </header>

      <Landing />

      <footer> <p>Made with&nbsp;🤯&nbsp;&nbsp;&&nbsp;🔮&nbsp;&nbsp;by <a href="https://github.com/lgm527/" target="_blank" rel="noopener noreferrer">@lgm527</a></p></footer>
    </div>
  );
}

export default App;
