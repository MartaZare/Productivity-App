import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Play from "./pages/play/Play";
import Stats from "./pages/stats/Stats";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
