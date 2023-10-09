import { useDispatch } from "react-redux";
import { setUserObject } from "../pages/home/login/userSlice";
import axios from "axios";

function useLogout() {
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(setUserObject({ email: "", password: "", role: "", token: "" }));

    try {
      await axios("/logout", { withCredentials: true });
    } catch (err) {
      console.log(err);
    }
  };
  return logout;
}

export default useLogout;
