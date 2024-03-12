import { useState } from "react";

function MyClockTime() {

    const [timer, setTimer] = useState(new Date().toLocaleTimeString());
    const currentTimer = () => {
        const date = new Date();
        setTimer(`${date.toLocaleTimeString()}`);
    };
    const startTimer = () => setInterval(currentTimer, 1000);

    startTimer()
    
    // let currentTime = new Date();

    return (
        <div style={{height: "20vh", backgroundColor: "#151515", padding: "10px"}}>
            <h1 style={{color: "white"}}>
                {/* 현재 시각: {currentTime.toLocaleTimeString()} */}
                현재 시각: {timer}
            </h1>
        </div>
    );
}

export default MyClockTime;