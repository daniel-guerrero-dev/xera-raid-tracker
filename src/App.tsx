import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router";
import { Strats } from "./Pages/Strat";
import { Composition } from "./Pages/Comp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Strats" element={<Strats />} />
      <Route path="/Composition" element={<Composition />} />
    </Routes>
  );
}

export default App;
