import React, { useEffect } from 'react';

export  const Timer = ({ seconds, setSeconds, isTimerRunning, setIsTimerRunning }) => {
  useEffect(() => {
    let intervalId;
    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isTimerRunning]);

  const startTimer = () => setIsTimerRunning(true);
  const stopTimer = () => {
    setIsTimerRunning(false);
    setSeconds(0);
  };

  return (
    <div className={`section`}>
      <h2>Timer</h2>
      <p>Seconds: {seconds}</p>
      <button onClick={startTimer} disabled={isTimerRunning}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

