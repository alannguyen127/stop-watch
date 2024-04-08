import Lap from "./components/Lap";
import { formatTime } from "./formatTime";
import useTimer from "./useTimer";
import React from "react";

function App() {
  const { time, lap, startTimer, stopTimer, resetTimer, handleLap, active } =
    useTimer(0);

  return (
    <div className="App container">
      <div className="timer__wrapper">
        <h1>Stopwatch</h1>
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={handleLap}>
            Lap
          </button>
        </div>
        <Lap lap={lap} />
      </div>
    </div>
  );
}

export default App;
