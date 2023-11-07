import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ChampionSelect from "../champion-select/ChampionSelect";
import { Link } from "react-router-dom";
import getRandomMonster from "./getRandomMonster";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";

function Play() {
  const champion = useSelector((state: RootState) => state.character.champion);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <main className="play">
      {loading ? (
        <Loading />
      ) : (
        <>
          {champion ? (
            <>
              <section className="animation">
                <img
                  id={`${champion}`}
                  src={`assets/champions/${champion}.png`}
                  alt={`${champion}`}
                />
                <p>VS</p>
                <img
                  id="monster"
                  src={`assets/other/${getRandomMonster()}.png`}
                  alt="monster"
                />
              </section>
              <Link to="/timer">Play</Link>
            </>
          ) : (
            <ChampionSelect />
          )}
        </>
      )}
    </main>
  );
}

export default Play;
