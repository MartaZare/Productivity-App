import { useNavigate } from "react-router-dom";
import { CharacterType } from "../../data/Types";
import useLogout from "../../hooks/useLogout";
import { useEffect, useState } from "react";
import ProgressBar from "../../components/progress/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import ChampionSelect from "../champion-select/ChampionSelect";
import Loading from "../../components/loading/Loading";
import { getData } from "../../api/api";
import { setUserObject } from "../../reducers/userSlice";

export default function Home() {
  const navigate = useNavigate();
  const logout = useLogout();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<CharacterType | undefined>();
  const currentUser = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const getCharater = async () => {
    const user = await getData("users/", "1");
    dispatch(setUserObject(user));

    const characters = await getData("characters?userId=", currentUser.id);

    console.log(characters[0]);
    setCharacter(characters[0]);
    setLoading(false);
  };

  useEffect(() => {
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
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
