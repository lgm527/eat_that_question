import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Eat That Question
          <br/>
          <span id="puncuation"></span>
        </h1>
        <div id="play" onClick={() => window.alert("Let's do it!")}>YES</div>
      </header>

      <img 
        src="https://cdn.jsdelivr.net/gh/MakeWeirdMusic/art@master/frank-zappa/frank-zappa.png"
        id="zappaSVG" 
        alt="zappa" />

        <footer> <p>Made with&nbsp;🤯&nbsp;&nbsp;&&nbsp;🔮&nbsp;&nbsp;by <a href="https://github.com/lgm527/" target="_blank" rel="noopener noreferrer">@lgm527</a></p></footer>
    </div>
  );
}

export default App;
