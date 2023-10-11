import { useNavigate } from "react-router-dom";
import ChampionSelect from "../champion-select/ChampionSelect";
import useLogout from "../../hooks/useLogout";

export default function Home() {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/linkpage");
  };

  return (
    <section className="home">
      <button onClick={signOut}>Sign Out</button>
    </section>
  );
}
