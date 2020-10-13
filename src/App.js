import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Eat That Question
          <br></br>
          <span id="puncuation"></span>
        </h1>
        <div id="play" onClick={() => window.alert("Let's do it!")}>YES</div>
      </header>

      <img 
        src="https://cdn.jsdelivr.net/gh/MakeWeirdMusic/art@master/frank-zappa/frank-zappa.png"
        id="zappaSVG" 
        alt="zappa" />
    </div>
  );
}

export default App;
