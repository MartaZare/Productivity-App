import { useDispatch } from "react-redux";
import axios from "../api/axios";
import { setAccessToken, setRole } from "../pages/home/login/userSlice";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });

    dispatch(setAccessToken(response.data.token));
    dispatch(setRole(response.data.role));

    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
