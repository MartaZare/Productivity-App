import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ChampionSelect from "../champion-select/ChampionSelect";
import { useNavigate } from "react-router-dom";
import getRandomMonster from "./getRandomMonster";

function Play() {
  const champion = useSelector((state: RootState) => state.character.champion);
  const navigate = useNavigate();

  return (
    <main className="play">
      {champion ? (
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
              src={`assets/other/${getRandomMonster()}.png`}
              alt="monster"
              style={{ width: "400px", height: "400px" }}
            />
          </section>
          <button onClick={() => navigate("/timer")}>Play</button>
        </>
      ) : (
        <ChampionSelect />
      )}
    </main>
  );
}

export default Play;
