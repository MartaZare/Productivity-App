import { useNavigate } from "react-router-dom";
import { CharacterType } from "../../data/Types";
import useLogout from "../../hooks/useLogout";
import { useEffect, useState } from "react";
import ProgressBar from "../../components/progress-bar/ProgressBar";
import axios from "axios";
import { BASE_URL } from "../../api/axios";

export default function Home() {
  const SESSION_MINUTES = 25;
  const navigate = useNavigate();
  const logout = useLogout();
  const [character, setCharacter] = useState<CharacterType | undefined>();
  const [progress, setProgress] = useState<number | undefined>();
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const getCharater = async () => {
      const response = await axios.get(`${BASE_URL}/characters/1`);
      setCharacter(await response.data);
      setLevel(await response.data.level);
    };
    getCharater();
  }, [level]);

  useEffect(() => {
    if (character) {
      setProgress((character.time / SESSION_MINUTES) % 4);

      if (progress === 0) {
        const updateLvl = async () => {
          await axios.patch(`${BASE_URL}/characters/${character.id}`, {
            level: level + 1,
          });
        };

        updateLvl();
      }
    }
  }, [character]);

  console.log("progress" + progress);

  const signOut = async () => {
    await logout();
    navigate("/linkpage");
  };

  return (
    <main className="home">
      {character && (
        <>
          <section className="user">
            <img
              src={`assets/champions/${character.champion}.png`}
              alt={`${character.champion}`}
            />
            <h2>{character.nickname}</h2>
          </section>

          <section className="stats">
            <h2>{level}</h2>
            <p>LVL</p>

            {progress ? (
              <ProgressBar progress={progress} />
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
      )}
    </main>
  );
}
