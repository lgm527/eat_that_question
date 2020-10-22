import React from 'react';
import '../styles/Question.css';
import Timer from './Timer';

class Question extends React.Component {

    state = {
        currentAnswer: null
    }

    selectAnswer = (event) => {
        this.setState({
            currentAnswer: event.target.value
        })
    }
    
    render() {
        return ( 
            <><Timer />
            <form onSubmit={(event) => this.props.submitAnswer(event, this.state.currentAnswer)}>
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
