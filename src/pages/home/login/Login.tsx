import { useRef, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setUserObject } from "./userSlice";
import axios from "../../../api/axios";
import jwt_decode from "jwt-decode";

const LOGIN_URL = "/api/Authorization/LoginUser";

type JWTPayload = {
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
};

export default function Login() {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: user, password: pwd }),
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        }
      );

      const accessToken = response?.data;
      const payload = jwt_decode<JWTPayload>(accessToken);
      const role =
        payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

      const roles = response?.data?.roles;
      console.log(role);

      dispatch(
        setUserObject({
          username: user,
          password: pwd,
          role: roles,
          token: accessToken,
        })
      );

      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Mising Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current?.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUser(e.target.value)
              }
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPwd(e.target.value)
              }
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
}
