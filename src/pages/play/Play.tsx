import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ChampionSelect from "../champion-select/ChampionSelect";
import { useNavigate } from "react-router-dom";

function Play() {
  const champion = useSelector((state: RootState) => state.character.champion);
  const [championSelected, setChampionSelected] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="play">
      {championSelected ? (
        <>
          <section className="animation">
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
          </section>
          <button onClick={() => navigate("/timer")}>Play</button>
        </>
      ) : (
        <ChampionSelect setChampionSelected={setChampionSelected} />
      )}
    </main>
  );
}

export default Play;
