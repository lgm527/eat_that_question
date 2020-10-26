import React from 'react';
import '../styles/App.css';
import Landing from './Landing';
import Question from './Question';
import { connect } from 'react-redux';

class App extends React.Component {

  playing = () => {
    this.props.startGame()
  }

  submitAnswer = (answer) => {
    if (this.props.trivia[this.props.index+1]) {
      if (answer === this.props.trivia[this.props.index].answer) {
        this.props.nextQRightA()
      } else {
        this.props.nextQ()
      }
    } else {
      this.props.rightA()
      this.props.gameOver()
    }
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
            <Question submitAnswer={this.submitAnswer} trivia={this.props.trivia[this.props.index]} />
            :
            <Landing score={this.props.score} />
        }

  
        <footer> <p>Made with&nbsp;<span role="img" aria-label="explode emoji">🤯</span>&nbsp;&&nbsp;<span role="img" aria-label="crystal ball emoji">🔮</span>&nbsp;&nbsp;by <a href="https://github.com/lgm527/" target="_blank" rel="noopener noreferrer">@lgm527</a></p></footer>
      </div>
       );
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch({type: 'START_GAME'}),
  nextQRightA: () => dispatch({type: 'NEXT_Q_RIGHT_A'}),
  nextQ: () => dispatch({type: 'NEXT_Q'}),
  rightA: () => dispatch({type: 'RIGHT_A'}),
  gameOver: () => dispatch({type: 'GAME_OVER'})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
