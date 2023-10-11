import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { levelUp } from "../../reducers/characterSlice";
import ProgressBar from "../../components/progress-bar/ProgressBar";

export default function Home() {
  const navigate = useNavigate();
  const logout = useLogout();
  const character = useSelector((state: RootState) => state.character);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = character.sesssions % 4;
    setProgress(currentProgress);
  }, [character.sesssions]);

  const signOut = async () => {
    await logout();
    navigate("/linkpage");
  };

  useEffect(() => {
    if (character.sesssions % 4 === 0) {
      dispatch(levelUp);
      setProgress(0);
    }
  }, [character.sesssions]);

  return (
    <section className="home">
      <div className="user">
        {character.champion ? (
          <img
            src={`assets/champions/${character.champion}.png`}
            alt={`${character.champion}`}
          />
        ) : (
          <img src={`assets/champions/warrior.png`} alt={`warrior`} />
        )}
        <h2>{character.nickname}</h2>
      </div>

      <div className="stats">
        <p>LVL {character.level}</p>
        <ProgressBar progress={character.level * 25} />
        <>
          <p>Sessions</p>
          {character.sesssions}
        </>
        <>
          <p>Hours</p>
          {character.sesssions * 4}
        </>
      </div>
    </section>
  );
}
