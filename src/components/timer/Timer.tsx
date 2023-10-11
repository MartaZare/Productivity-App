import { useEffect, useState } from "react";
import WinnerMessage from "../message/WinnerMessage";
import { Link } from "react-router-dom";

function MainTimer() {
  const INITIAL_WORK_TIME = 0.1;
  const INITIAL_REST_TIME = 0.05;
  const INITIAL_ROUNDS = 1;

  const [rounds, setRounds] = useState(INITIAL_ROUNDS);
  const [roundsCompleted, setRoundsCompleted] = useState(1);
  const [timeLeft, setTimeLeft] = useState<number>(INITIAL_WORK_TIME * 60);
  const [pause, setPause] = useState(false);
  const [workMode, setWorkMode] = useState(true);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = Math.floor(timeLeft % 60);

  useEffect(() => {
    if (rounds >= 0 && !pause && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    } else if (timeLeft === 0 && rounds >= 0) {
      if (workMode) {
        setWorkMode(false);
        setTimeLeft(INITIAL_REST_TIME * 60);
        setRounds((prev) => prev + 1);
      } else {
        setWorkMode(true);
        setPause(true);
        setTimeLeft(INITIAL_WORK_TIME * 60);
      }
    }
  }, [timeLeft, pause, rounds, workMode]);

  function handlePause() {
    setPause((prev) => !prev);
  }

  useEffect(() => {
    if (workMode) {
      if (timeLeft < INITIAL_WORK_TIME) {
        setRoundsCompleted((prev) => prev + 1);
        console.log(roundsCompleted);
      }
    }
  }, [workMode, timeLeft]);

  return (
    <>
      {rounds <= 4 && (
        <>
          {timeLeft > 0 && (
            <>
              <div className="work-status">
                {workMode ? (
                  <>
                    <p> Round {rounds}</p>
                    <img
                      id="fight"
                      src="/assets/other/swords.png"
                      alt="fight-icon"
                    />
                  </>
                ) : (
                  <>
                    <p>Rest</p>
                    <img
                      id="rest"
                      src="/assets/other/lotus.png"
                      alt="lotus-icon"
                    />
                  </>
                )}

                <p>
                  {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
                </p>
              </div>
              <div className="play-btns">
                {workMode && <Link to="/">Surrender</Link>}
                {timeLeft !== 0 && (
                  <button onClick={handlePause}>
                    {pause ? "Continue" : "Pause"}
                  </button>
                )}
              </div>
            </>
          )}
        </>
      )}

      {rounds > 4 && <WinnerMessage />}
    </>
  );
}

export default MainTimer;
