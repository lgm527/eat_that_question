import React from 'react';
import '../styles/Timer.css';

function Timer(props) {

    return (
        <p id="seconds">
            {props.seconds}
        </p>
    )
}

export default Timer;