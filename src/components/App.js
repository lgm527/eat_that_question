import React from 'react';
import '../styles/App.css';
import Landing from './Landing';
import Question from './Question';
import { connect } from 'react-redux';

class App extends React.Component {

  playing = (event) => {
    if (event.type === "click") {
      this.props.startGame()
    } else if (event.key === " " || event.key === "Enter") {
      this.props.startGame()
    }
  }

  reset = (event) => {
    if (event.type === "click") {
      this.props.resetGame()
    } else if (event.key === " " || event.key === "Enter") {
      this.props.resetGame()
    }
  }

  submitAnswer = (answer) => {
    // nextQ exists and correct A
    if (this.props.trivia[this.props.index+1] && answer === this.props.trivia[this.props.index].answer) {
      this.props.nextQRightA()
    // nextQ exists and incorrect A
    } else if (this.props.trivia[this.props.index+1] && answer !== this.props.trivia[this.props.index].answer) {
      this.props.nextQ()
    // nextQ does not exists and correct A, game is over
    } else if (!this.props.trivia[this.props.index+1] && answer === this.props.trivia[this.props.index].answer) {
      this.props.rightA()
      this.props.gameOver()
    // nextQ does not exists and incorrect A, game is over
    } else {
      this.props.gameOver()
    }
  }

  render() {
    let questions = this.props.trivia.map((q, i) => <Question submitAnswer={this.submitAnswer} trivia={q} key={i} />)

      return ( 
        <div className="App">
        <header className="App-header">
          <h1>Eat That Question
          {
              this.props.playing ?
              <>
              <br/>
              <span 
              onClick={(event) => this.reset(event)} 
              id="reset" 
              role="button"
              tabIndex="0"
              onKeyDown={(event) => this.reset(event)} 
              >RESET</span>
              </>
              :
              <>
              <br/>
              <span 
              onClick={(event) => this.playing(event)} 
              id="play" 
              role="button"
              tabIndex="0"
              onKeyDown={(event) => this.playing(event)} 
              >PLAY</span>
              </>
          }
          </h1>
        </header>
  
        {
          this.props.playing ?
              questions[this.props.index]
            :
            <Landing score={this.props.score} playing={this.playing} />
        }
  

        <footer> <p>Made with&nbsp;<span role="img" aria-label="billy the mountain emoji">🏔</span>&nbsp;&&nbsp;<span role="img" aria-label="crystal ball emoji">🔮</span>&nbsp;&nbsp;by <a href="https://github.com/lgm527/" target="_blank" rel="noopener noreferrer" alt="Laurell McCaffrey's Github Profile">@lgm527</a></p></footer>

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
  gameOver: () => dispatch({type: 'GAME_OVER'}),
  resetGame: () => dispatch({type: 'RESET_GAME'})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
