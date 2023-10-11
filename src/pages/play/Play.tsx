import { useEffect, useState } from "react";
import MainTimer from "../../components/timer/Timer";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ChampionSelect from "../champion-select/ChampionSelect";

function Play() {
  const [playMode, setPlayMode] = useState(false);
  const champion = useSelector((state: RootState) => state.character.champion);
  const [championSelected, setChampionSelected] = useState(false);

  return (
    <div className="play">
      {championSelected ? (
        playMode ? (
          <MainTimer />
        ) : (
          <>
            <div className="animation">
              <img
                id={`${champion}`}
                src={`assets/champions/${champion}.png`}
                alt={`${champion}`}
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
        )
      ) : (
        <ChampionSelect setChampionSelected={setChampionSelected} />
      )}
    </div>
  );
}

export default Play;
