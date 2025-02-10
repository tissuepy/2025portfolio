import { Link } from "react-router-dom";
import "./cs-projects.css";

const CSProjects = () => {
  return (
    <div className="ux-projects-container">
      <nav className="nav-bar2">
        <span className="nav-item">
          <Link to="/" className="footer-link link">HOME</Link>
        </span>
        <span className="divider">//</span>
        <span className="nav-item">CS PROJECTS</span>
        <div className="nav-line"></div>
      </nav>

      <div className="project-list">
        <Link to="https://github.com/tissuepy/StudyHive" className="project-item">
          <span className="project-number">01 //</span>
          <span className="project-name">StudyHive</span>
          <span className="project-line"></span>
          <span className="project-year">2024</span>
        </Link>
        
        <Link to="https://github.com/tissuepy/biometricanalysis" className="project-item">
          <span className="project-number">02 //</span>
          <span className="project-name">FingerScan</span>
          <span className="project-line"></span>
          <span className="project-year">2025</span>
        </Link>

        <Link to="https://easy-iron-95a.notion.site/Wardrobe-19534c722e4280ba91c5f5db71c5f47e" className="project-item">
          <span className="project-number">03 //</span>
          <span className="project-name">PySurvey</span>
          <span className="project-line"></span>
          
          <span className="project-year">2025</span>
        </Link>

      </div>
    </div>
  );
};

export default CSProjects;
