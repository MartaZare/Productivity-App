import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUsername } from "./userSlice";

interface UserLogInProps {
  setIsLoggedIn: (arg: boolean) => void;
}

function UserLogIn({ setIsLoggedIn }: UserLogInProps) {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsername(user));
    setIsLoggedIn(false);
  }, [user]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIsLoggedIn(true);
        }}
        className="logInForm"
      >
        <h1>LOG IN</h1>
        <div className="log-in-label-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setUser(event.target.value)
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UserLogIn;
