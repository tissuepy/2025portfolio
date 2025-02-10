import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortfolioText from "./home";
import UXProjects from "./ux-projects";
import "./App.css";
import CSProjects from "./cs-projects";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioText />} />
        <Route path="/ux-projects" element={<UXProjects />} />
        <Route path="/cs-projects" element={<CSProjects />} />
      </Routes>
    </Router>
  );
};

export default App;
