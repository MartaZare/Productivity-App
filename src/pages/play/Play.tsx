import { useState } from "react";
import MainTimer from "./components/MainTimer";

function Play() {
  const [playMode, setPlayMode] = useState(false);

  return (
    <>
      {playMode ? (
        <MainTimer />
      ) : (
        <>
          <img
            src="../../../assets/characters/warrior.png"
            alt="warrior-image"
          />
          <button onClick={() => setPlayMode(true)}>Play</button>
        </>
      )}
    </>
  );
}

export default Play;
