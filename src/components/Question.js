import React from 'react';
import '../styles/Question.css';
import Timer from './Timer';

const START_STATE = {
    currentAnswer: null,
    seconds: 10
}

class Question extends React.Component {

    state = START_STATE

    select = (event) => {
        this.setState({
            currentAnswer: event.target.value
        })
    }

    submit = (event, answer) => {
        event.preventDefault()
        this.props.submitAnswer(answer)
        clearInterval(this._timer)
    }

    countdown = () => {
        this.setState({ seconds: this.state.seconds - 1 })
        if (this.state.seconds === 0) {
            this.props.submitAnswer(this.state.currentAnswer)
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
            <div className="trivia">
            <Timer seconds={this.state.seconds} />
            <form onSubmit={(event) => this.submit(event, this.state.currentAnswer)}>
                <h3 id="question">{this.props.trivia.question}</h3>
                
                <div className="answers">
                    <label htmlFor="answer0"> 
                        <input
                        type="radio"
                        aria-label="answer"
                        name="answer"
                        id="answer0"
                        value={this.props.trivia.choices[0]} 
                        checked={this.state.currentAnswer === this.props.trivia.choices[0]}
                        aria-checked={this.state.currentAnswer === this.props.trivia.choices[0]}
                        onChange={this.select}/> 
                        {this.props.trivia.choices[0]}
                    </label>
    
                    <label htmlFor="answer1">
                        <input
                        type="radio"
                        aria-label="answer"
                        name="answer"
                        id="answer1"
                        value={this.props.trivia.choices[1]} 
                        checked={this.state.currentAnswer === this.props.trivia.choices[1]}
                        aria-checked={this.state.currentAnswer === this.props.trivia.choices[1]}
                        onChange={this.select}/>
                        {this.props.trivia.choices[1]}
                    </label>
    
                    <label htmlFor="answer2">
                        <input
                        type="radio"
                        aria-label="answer"
                        name="answer"
                        id="answer2"
                        value={this.props.trivia.choices[2]}
                        checked={this.state.currentAnswer === this.props.trivia.choices[2]}
                        aria-checked={this.state.currentAnswer === this.props.trivia.choices[2]}
                        onChange={this.select}/>
                        {this.props.trivia.choices[2]}
                    </label>                       
                </div>

                <input type="submit" value="submit" id="submit" className="buttons"/>
            </form>
            </div>
         );
    }
}
 
export default Question;
