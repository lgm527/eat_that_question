import React from 'react';
import '../styles/Landing.css';
import Galaxy from './Galaxy';

const Landing = (props) => {

    return ( 
        <div className="landing">
            {props.score ? 
            <>
            <p>score: <span id="score">{props.score}</span></p>
            <button onClick={() => props.playing()}>Play Again!</button>
            </>
             :  
             
            <Galaxy />

            }
        </div>
     );
}
 
export default Landing;