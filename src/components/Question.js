import React from 'react';
import '../styles/Question.css';

const Question = () => {
    return ( 
        <div>
            <h3 id="question">Watch out where the huskies go...</h3>
            <div className="answers">
                <div id="A">
                    <input type="radio" value="And don't you eat that yellow snow" /> And don't you eat that yellow snow
                </div>
                <div id="B">
                    <input type="radio" value="But shouldn't you already know" /> But shouldn't you already know
                </div>
                <div id="C">
                    <input type="radio" value="Could you really believe that" /> Could you really believe that
                </div>   
            </div>
        </div>
     );
}
 
export default Question;