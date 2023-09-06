import { Link } from "react-router-dom";
import ChampionSelect from "./components/ChampionSelect";

function Home() {
  return (
    <div className="home">
      <ChampionSelect />
      <Link to="/play">PLAY</Link>
    </div>
  );
}

export default Home;
