import { Route, Routes } from "react-router-dom";
import "./assets/App.css";
import Home from "./pages/home/Home";
import RequireAuth from "./pages/RequireAuth";
import Admin from "./pages/admin/Admin";
import Play from "./pages/play/Play";
import Missing from "./pages/Missing";
import Stats from "./pages/stats/Stats";
import PersistLogin from "./pages/login/PersistLogin";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="log-in" element={<Login />} />
          <Route path="register" element={<Register />} /> */}

          {/* <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRole={["user"]} />}>
              <Route path="play" element={<Play />} />
            </Route>

            <Route element={<RequireAuth allowedRole={["user"]} />}>
              <Route path="stats" element={<Stats />} />
            </Route>

            <Route element={<RequireAuth allowedRole={["user", "admin"]} />}>
              <Route path="/" element={<Home />} />
            </Route>

            <Route element={<RequireAuth allowedRole={["admin"]} />}>
              <Route path="admin" element={<Admin />} />
            </Route>
          </Route> */}
        </Route>
        <Route path="play" element={<Play />} />
        <Route path="stats" element={<Stats />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </>
  );
}

export default App;
