import { useDispatch } from "react-redux";
import { setUserObject } from "../reducers/userSlice";
import axios from "axios";

function useLogout() {
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(
      setUserObject({
        email: "",
        password: "",
        role: "",
        token: "",
        persist: false,
      })
    );

    try {
      await axios("/logout", { withCredentials: true });
    } catch (err) {
      console.log(err);
    }
  };
  return logout;
}

export default useLogout;
