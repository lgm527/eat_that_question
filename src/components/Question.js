import React from 'react';

const Question = () => {
    return ( 
        <div>
            <h3>Watch out where the huskies go...</h3>
            <div className="answers">
                <input type="radio" value="And don't you eat that yellow snow" /> And don't you eat that yellow snow
                <input type="radio" value="But shouldn't you already know" /> But shouldn't you already know
                <input type="radio" value="Could you really believe that" /> Could you really believe that
            </div>
        </div>
     );
}
 
export default Question;