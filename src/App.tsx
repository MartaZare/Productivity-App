import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/home/Home";
import Login from "./pages/home/login/Login";
import Register from "./pages/home/register/Register";
import RequireAuth from "./pages/RequireAuth";
import Admin from "./pages/Admin";
import Play from "./pages/play/Play";
import Missing from "./pages/Missing";
import Stats from "./pages/stats/Stats";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="log-in" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route element={<RequireAuth allowedRole={["user"]} />}>
            <Route path="play" element={<Play />} />
          </Route>

          <Route element={<RequireAuth allowedRole={["user"]} />}>
            <Route path="stats" element={<Stats />} />
          </Route>

          <Route element={<RequireAuth allowedRole={["user", "admin"]} />}>
            <Route path="home" element={<Home />} />
          </Route>

          <Route element={<RequireAuth allowedRole={["admin"]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
