import React, { useEffect, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => 
            setSeconds((s) => s + 1), 1000);
        return () => clearInterval(interval); 
    }, []);

    return (
        <React.Fragment>
            <h1>Time: {seconds}s</h1>
            {/* <button onClick={() => setSeconds(clearInterval())}>clearInterval</button> */}
        </React.Fragment>
    );
}

export default Timer;