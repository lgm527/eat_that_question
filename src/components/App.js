import React from 'react';
import '../styles/App.css';
import Landing from './Landing';
import Question from './Question';

class App extends React.Component {
  state = { 
    playing: false
   }

  playing = () => {
    window.alert("Let's do it!")
    this.setState({playing: true})
  }

  submitAnswer = (event, answer) => {
    event.preventDefault()
    this.setState({playing: false})
  }

  render() { 
      return ( 
        <div className="App">
        <header className="App-header">
          <h1>Eat That Question
            <br/>
            <span onClick={() => this.playing()} id="puncuation"></span>
          </h1>
        </header>
  
        {
          this.state.playing ?
            <Question submitAnswer={this.submitAnswer} />
            :
            <Landing />
        }

  
        <footer> <p>Made with&nbsp;<span role="img" aria-label="explode emoji">🤯</span>&nbsp;&&nbsp;<span role="img" aria-label="crystal ball emoji">🔮</span>&nbsp;&nbsp;by <a href="https://github.com/lgm527/" target="_blank" rel="noopener noreferrer">@lgm527</a></p></footer>
      </div>
       );
  }
}

export default App;
