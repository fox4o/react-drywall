import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Calc from "./pages/Calc";

function App() {
  return (
    <HashRouter >
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="calc/:system" element={<Calc />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
