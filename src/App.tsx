import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortfolioText from "./home";
import UXProjects from "./ux-projects";
import "./App.css";
import About from "./about";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioText />} />
        <Route path="/ux-projects" element={<UXProjects />} />
        <Route path="/cs-projects" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
