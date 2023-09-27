import ChampionSelect from "./champion-select/ChampionSelect";
import Register from "./register/Register";
import UserLogIn from "./user-log-in/UserLogIn";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="home">
      {isLoggedIn ? (
        <>
        <Register />
        <ChampionSelect />
        </>
      ) : (
       // <UserLogIn setIsLoggedIn={setIsLoggedIn} />
       <Register />
      )}
    </div>
  );
}
