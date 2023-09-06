import { useEffect, useState } from "react";
import RestTimer from "./RestTimer";

function MainTimer() {
  const INITIAL_WORK_TIME = 0.1;
  const INITIAL_REST_TIME = 0.1;
  const INITIAL_ROUNDS = 4;

  const [rounds, setRounds] = useState(INITIAL_ROUNDS);
  const [timeLeft, setTimeLeft] = useState<number>(INITIAL_WORK_TIME * 60);
  const [pause, setPause] = useState(false);
  const [workMode, setWorkMode] = useState(true);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = Math.floor(timeLeft % 60);

  useEffect(() => {
    if (rounds > 0 && !pause && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    } else if (timeLeft === 0 && rounds > 0) {
      if (workMode) {
        setWorkMode(false);
        setTimeLeft(INITIAL_REST_TIME * 60);
        setRounds((prev) => prev - 1);
      } else {
        setWorkMode(true);
        setTimeLeft(INITIAL_WORK_TIME * 60);
      }
    }
  }, [timeLeft, pause, rounds, workMode]);

  function handlePause() {
    setPause((prev) => !prev);
  }

  return (
    <>
      {rounds > 0 ? (
        <>
          {timeLeft >= 0 ? (
            <>
              {workMode ? "Work" : "Rest"}: {minutes} :{" "}
              {seconds < 10 ? `0${seconds}` : seconds}
              <button onClick={handlePause}>
                {pause ? "Paused" : "Pause"}
              </button>
              {rounds}
            </>
          ) : null}
        </>
      ) : (
        <>
          <RestTimer />
        </>
      )}
    </>
  );
}

export default MainTimer;
