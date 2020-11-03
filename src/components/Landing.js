import React from 'react';
import '../styles/Landing.css';

const Landing = (props) => {
    return ( 
        <div className="landing">
            {props.score ? 
            <>
            <p>score: <span id="score">{props.score}</span></p>
            <button onClick={() => props.playing()}>Play Again!</button>
            </>
             :             
            <img 
            src="https://cdn.jsdelivr.net/gh/MakeWeirdMusic/art@master/frank-zappa/frank-zappa.png"
            id="zappaIMG" 
            alt="zappa" />}
        </div>
     );
}
 
export default Landing;