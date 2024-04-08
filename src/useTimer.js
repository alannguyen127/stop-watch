import { useState, useRef } from "react";
import { formatTime } from "./formatTime";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const [lap, setLap] = useState([]);
  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
    active.current.disabled = false;
    setLap([]);
  };

  function handleLap() {
    const lapTime = formatTime(time);
    setLap((prevLap) => [...prevLap, lapTime]);
  }

  return { time, lap, startTimer, stopTimer, resetTimer, handleLap, active };
};
export default useTimer;
