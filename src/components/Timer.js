import React, { useState } from 'react';

function Timer() {

    const [seconds, setSeconds] = useState(10)

    React.useEffect(() => {
        seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
      }, [seconds]);

    return (
        <div>
            {seconds}
        </div>
    )
}

export default Timer;