import React from 'react';
import '../styles/App.css';
import Landing from './Landing';
import Question from './Question';
import { connect } from 'react-redux';

class App extends React.Component {

  playing = () => {
    window.alert("Let's do it!")
    this.props.startGame();
  }

  submitAnswer = (event, answer) => {
    event.preventDefault()
    // convert to action dispatch
    // this.setState({playing: false})
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
          this.props.playing ?
            <Question submitAnswer={this.submitAnswer} />
            :
            <Landing />
        }

  
        <footer> <p>Made with&nbsp;<span role="img" aria-label="explode emoji">🤯</span>&nbsp;&&nbsp;<span role="img" aria-label="crystal ball emoji">🔮</span>&nbsp;&nbsp;by <a href="https://github.com/lgm527/" target="_blank" rel="noopener noreferrer">@lgm527</a></p></footer>
      </div>
       );
  }
}

const mapStateToProps = state => {
  return {
    playing: state.playing
  }
}

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch({type: 'START_GAME'})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
