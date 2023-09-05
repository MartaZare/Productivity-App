import { useEffect, useState } from "react";

function Timer() {
  const INITIAL_TIME = 25;
  const [timeLeft, setTimeLeft] = useState<number>(INITIAL_TIME * 60);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = Math.floor(timeLeft % 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  return (
    <div>
      {timeLeft >= 0 ? (
        <>
          Timer: {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
        </>
      ) : (
        "Time is out!"
      )}
    </div>
  );
}

export default Timer;
