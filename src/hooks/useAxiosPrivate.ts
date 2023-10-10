import { useSelector } from "react-redux";
import useRefreshToken from "./useRefreshToken";
import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import { RootState } from "../store";

function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const selector = useSelector((state: RootState) => state);

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${selector?.user.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();

          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [selector, refresh]);

  return axiosPrivate;
}

export default useAxiosPrivate;
