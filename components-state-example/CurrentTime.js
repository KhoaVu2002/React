import React, { useEffect, useState } from "react";
import './CurrentTime.css';

const CurrentTime = () =>{
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() =>{
        const intervalId = setInterval(() =>{
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return(
        <div className="clock">
            <p>Current Time: {currentTime.toLocaleTimeString()}</p>
        </div>
    )
};

export default CurrentTime;