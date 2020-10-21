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
                <h3 id="question">Watch out where the huskies go...</h3>
                <ul className="answers">
    
                    <li><label>
                        <input 
                        type="radio"
                        name="answer"
                        value="And don't you eat that yellow snow" 
                        checked={this.state.currentAnswer === "And don't you eat that yellow snow"}
                        onChange={this.selectAnswer}/> 
                        <span>And don't you eat that yellow snow</span>
                    </label></li>
    
                    <li><label>
                        <input 
                        type="radio"
                        name="answer"
                        value="But shouldn't you already know" 
                        checked={this.state.currentAnswer === "But shouldn't you already know"}
                        onChange={this.selectAnswer}/>
                        <span>But shouldn't you already know</span>
                    </label></li>
    
                    <li><label>
                        <input 
                        type="radio"
                        name="answer"
                        value="Could you really believe that" 
                        checked={this.state.currentAnswer === "Could you really believe that"}
                        onChange={this.selectAnswer}/>
                        <span>Could you really believe that</span>
                    </label></li>                       
                </ul>
                <input type="submit" value="submit"/>
            </form>
            </>
         );
    }
}
 
export default Question;
