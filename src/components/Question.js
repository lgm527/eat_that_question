import React from 'react';
import '../styles/Question.css';
import Timer from './Timer';

const START_STATE = {
    currentAnswer: null,
    seconds: 10
}

class Question extends React.Component {

    state = START_STATE

    selectAnswer = (event) => {
        this.setState({
            currentAnswer: event.target.value
        })
    }

    submitAnswer = (event, answer) => {
        event.preventDefault()
        this.props.submitAnswer(answer)
        this.setState(START_STATE)
    }

    countdown = () => {
        this.setState({ seconds: this.state.seconds - 1 })
        if (this.state.seconds <= 0) {
            this.props.submitAnswer(this.state.currentAnswer)
            this.setState(START_STATE)
            clearInterval(this._timer)
        }
    }

    componentDidMount() {
        this.setState(START_STATE)
        // start timer
        this._timer = setInterval(this.countdown, 1000)    
    }
    
    componentWillUnmount() {
        // stop timer
        clearInterval(this._timer)
    }
    
    render() {
        return ( 
            <><Timer seconds={this.state.seconds} />
            <form onSubmit={(event) => this.submitAnswer(event, this.state.currentAnswer)}>
                <h3 id="question">{this.props.trivia.question}</h3>
                <ul className="answers">
    
                    <li><label>
                        <input 
                        type="radio"
                        name="answer"
                        value={this.props.trivia.choices[0]} 
                        checked={this.state.currentAnswer === this.props.trivia.choices[0]}
                        onChange={this.selectAnswer}/> 
                        <span>{this.props.trivia.choices[0]}</span>
                    </label></li>
    
                    <li><label>
                        <input 
                        type="radio"
                        name="answer"
                        value={this.props.trivia.choices[1]} 
                        checked={this.state.currentAnswer === this.props.trivia.choices[1]}
                        onChange={this.selectAnswer}/>
                        <span>{this.props.trivia.choices[1]}</span>
                    </label></li>
    
                    <li><label>
                        <input 
                        type="radio"
                        name="answer"
                        value={this.props.trivia.choices[2]}
                        checked={this.state.currentAnswer === this.props.trivia.choices[2]}
                        onChange={this.selectAnswer}/>
                        <span>{this.props.trivia.choices[2]}</span>
                    </label></li>                       
                </ul>
                <input type="submit" value="submit"/>
            </form>
            </>
         );
    }
}
 
export default Question;
