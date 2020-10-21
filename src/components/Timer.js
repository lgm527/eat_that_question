import React, { useState } from 'react';
import '../styles/Timer.css';

function Timer() {

    const [seconds, setSeconds] = useState(10)

    React.useEffect(() => {
        seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
      }, [seconds]);

    return (
        <p id="seconds">
            {seconds}
        </p>
    )
}

export default Timer;