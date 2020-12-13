import React from 'react';
import '../styles/Landing.css';
import Galaxy from './Galaxy';

const Landing = (props) => {

    return ( 
        <div className="landing">
            {props.score !== null ? 
            <>
            <p>score: <span id="score">{props.score}/10</span></p>
            </>
             :               
            <Galaxy />
            }
        </div>
     );
}
 
export default Landing;