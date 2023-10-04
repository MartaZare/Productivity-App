import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/home/Home";
import Play from "./pages/play/Play";
import Stats from "./pages/stats/Stats";
import Layout from "./Layout";
import Login from "./pages/home/login/Login";
import Register from "./pages/home/register/Register";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
