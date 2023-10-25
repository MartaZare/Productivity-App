import { useNavigate } from "react-router-dom";
import { CharacterType } from "../../data/Types";
import useLogout from "../../hooks/useLogout";
import { useEffect, useState } from "react";
import ProgressBar from "../../components/progress/ProgressBar";
import axios from "axios";
import { BASE_URL } from "../../api/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ChampionSelect from "../champion-select/ChampionSelect";
import Loading from "../../components/loading/Loading";

export default function Home() {
  const navigate = useNavigate();
  const logout = useLogout();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<CharacterType | undefined>();
  const currentUserId = useSelector((state: RootState) => state.user.id);

  useEffect(() => {
    const getCharater = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/characters?userId=${currentUserId}`
        );
        setCharacter(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getCharater();
  }, []);

  const signOut = async () => {
    await logout();
    navigate("/linkpage");
  };

  return (
    <main className="home">
      {loading ? (
        <Loading />
      ) : (
        <>
          {character?.champion ? (
            <>
              <section className="user">
                <img
                  src={`assets/champions/${character.champion}.png`}
                  alt={`${character.champion}`}
                  onClick={() => navigate("/champion-select")}
                />
                <h2>{character.nickname}</h2>
              </section>

              <section className="stats">
                <h2>{character.level}</h2>
                <p>LVL</p>

                {character.progress ? (
                  <ProgressBar progress={character.progress} />
                ) : (
                  <ProgressBar progress={0} />
                )}
                <div className="stats-elem-wrapper">
                  <p>Time</p>
                  <h3>{character.time}</h3>
                </div>
                <div className="stats-elem-wrapper">
                  <p>Sessions</p>
                  <h3>{character.time / 25}</h3>
                </div>
              </section>
            </>
          ) : (
            <ChampionSelect />
          )}
        </>
      )}
    </main>
  );
}
