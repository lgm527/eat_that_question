import React from 'react';
import '../styles/Landing.css';

const Landing = (props) => {
    return ( 
        <div>
            {props.score ? <p>score: <span id="score">{props.score}</span></p> : null}
            <img 
            src="https://cdn.jsdelivr.net/gh/MakeWeirdMusic/art@master/frank-zappa/frank-zappa.png"
            id="zappaSVG" 
            alt="zappa" />
        </div>
     );
}
 
export default Landing;