import { useRef, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setUserObject } from "./userSlice";
import axios from "../../../api/axios";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { setIsLoggedIn } from "./loginSlice";

type JWTPayload = {
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
};

export default function Login() {
  const LOGIN_URL = "/api/Authorization/LoginUser";
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        }
      );

      const token = response?.data;
      const payload = jwt_decode<JWTPayload>(token);
      const role =
        payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

      dispatch(
        setUserObject({
          email,
          password,
          role,
          token,
        })
      );
      dispatch(setIsLoggedIn(true));

      setEmail("");
      setPassword("");
      setSuccess(true);
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400 || err.response?.status === 401) {
        setErrMsg("Incorrect Email or Password");
      } else {
        setErrMsg("Log in failed. Try again later.");
      }
      errRef.current?.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
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
                setEmail(e.target.value)
              }
              value={email}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              value={password}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
}
