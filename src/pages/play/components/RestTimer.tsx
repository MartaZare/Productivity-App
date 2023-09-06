import { useEffect, useState } from "react";

function RestTimer() {
  const INITIAL_TIME = 0.1;
  const [timeLeft, setTimeLeft] = useState<number>(INITIAL_TIME * 60);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = Math.floor(timeLeft % 60);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (!pause) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [timeLeft, pause]);

  function handlePause() {
    if (pause) {
      setPause(false);
    } else {
      setPause(true);
    }
  }

  return (
    <div>
      {timeLeft >= 0 && (
        <>
          Rest: {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
          <button onClick={handlePause}>{pause ? "Paused" : "Pause"}</button>
        </>
      )}
    </div>
  );
}

export default RestTimer;
