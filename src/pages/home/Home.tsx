import { useSelector } from "react-redux";
import ChampionSelect from "./champion-select/ChampionSelect";
import Login from "./login/Login";
import { RootState } from "../../store";

export default function Home() {
  const isLoggedIn = useSelector((state: RootState) => state.login);

  return (
    <div className="home">
      {isLoggedIn ? (
        <>
          <ChampionSelect />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}
