import { useState } from "react";
import MainTimer from "./timer/Timer";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function Play() {
  const [playMode, setPlayMode] = useState(false);
  const select = useSelector((state: RootState) => state.champion);

  return (
    <div className="play">
      {playMode ? (
        <MainTimer />
      ) : (
        <>
          <div className="animation">
            <img
              id={`${select}`}
              src={`assets/champions/${select}.png`}
              alt={`${select}`}
              style={{ width: "400px", height: "400px" }}
            />
            <p>VS</p>
            <img
              id="monster"
              src={`assets/other/hydra.png`}
              alt="monster"
              style={{ width: "400px", height: "400px" }}
            />
          </div>
          <button onClick={() => setPlayMode(true)}>Play</button>
        </>
      )}
    </div>
  );
}

export default Play;
