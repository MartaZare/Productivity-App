// import { useRef, useState, useEffect, ChangeEvent, FormEvent } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setPersist, setUserObject } from "../../reducers/userSlice";
// import axios from "../../api/axios";
// import jwt_decode from "jwt-decode";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { setIsLoggedIn } from "../../reducers/loginSlice";
// import { RootState } from "../../store";

// type JWTPayload = {
//   "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
// };

// export default function Login() {
//   const LOGIN_URL = "/api/Authorization/LoginUser";
//   const userRef = useRef<HTMLInputElement>(null);
//   const errRef = useRef<HTMLInputElement>(null);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";
//   const persist = useSelector((state: RootState) => state.user.persist);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errMsg, setErrMsg] = useState("");

//   useEffect(() => {
//     userRef.current?.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg("");
//   }, [email, password]);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         LOGIN_URL,
//         JSON.stringify({ email, password }),
//         {
//           headers: {
//             "Content-Type": "application/json",
//             withCredentials: true,
//           },
//         }
//       );

//       const token = response?.data;
//       const payload = jwt_decode<JWTPayload>(token);
//       const role =
//         payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

//       dispatch(
//         setUserObject({
//           email,
//           password,
//           role,
//           token,
//           persist,
//         })
//       );
//       dispatch(setIsLoggedIn(true));

//       setEmail("");
//       setPassword("");
//       navigate(from, { replace: true });
//       console.log(from);
//     } catch (err: any) {
//       if (!err?.response) {
//         setErrMsg("No Server Response");
//       } else if (err.response?.status === 400 || err.response?.status === 401) {
//         setErrMsg("Incorrect Email or Password");
//       } else {
//         setErrMsg("Log in failed. Try again later.");
//       }
//       errRef.current?.focus();
//     }
//   };

//   const togglePersist = () => {
//     dispatch(setPersist());
//   };

//   useEffect(() => {
//     localStorage.setItem("perist", JSON.stringify(persist));
//   }, [persist]);

//   return (
//     <>
//       <section>
//         <p
//           ref={errRef}
//           className={errMsg ? "errmsg" : "offscreen"}
//           aria-live="assertive"
//         >
//           {errMsg}
//         </p>
//         <h1>Sign In</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Email:</label>
//           <input
//             type="text"
//             id="username"
//             ref={userRef}
//             autoComplete="off"
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//               setEmail(e.target.value)
//             }
//             value={email}
//             required
//           />
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//               setPassword(e.target.value)
//             }
//             value={password}
//             required
//           />
//           <button>Sign In</button>
//           <div className="persistCheck">
//             <input
//               type="checkbox"
//               id="persist"
//               onChange={togglePersist}
//               checked={persist}
//             />
//             <label htmlFor="persist">Trust This Device</label>
//           </div>
//         </form>
//         <p>
//           Need an Account?
//           <br />
//           <span className="line">
//             <Link to="/register">Sign Up</Link>
//           </span>
//         </p>
//       </section>
//     </>
//   );
// }

import React from "react";

function Login() {
  return <div>Login</div>;
}

export default Login;
