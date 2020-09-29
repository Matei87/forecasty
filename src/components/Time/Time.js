import React, { useState, useEffect } from 'react';

const Time = () => {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() =>
            updateClock(), 1000
        );
        return function cleanup() {
            clearInterval(intervalID);
        }
    });

    const updateClock = () => {
        setClock(new Date());
    }

    return (
        <>
            <h3 className="clock" > {clock.toLocaleString('en-GB').replace(', ', ' - ')}</h3>
        </>
    )
}

export default Time;