import { Link } from "react-router-dom";
import "./projects.css";

const UXProjects = () => {
  return (
    <div className="ux-projects-container">
      <nav className="nav-bar2">
        <span className="nav-item">
          <Link to="/" className="nav-item">HOME</Link>
        </span>
        <span className="divider">//</span>
        <span className="nav-item">PROJECTS</span>
        <div className="nav-line"></div>
      </nav>

      <div className="project-list">

      <h1 className="heading"> ux <a href="#" className="staricon">✶</a> projects</h1>

        <Link to="https://www.notion.so/Safehub-19534c722e4280a69ff3e3b0650b9136?pvs=4" className="project-item">
          <span className="project-number">01 //</span>
          <span className="project-name">Safehub</span>
          <span className="project-line"></span>
          <span className="project-year">2024</span>
        </Link>
        
        <Link to="https://www.notion.so/SearchNEU-19534c722e42805aa1ead97764bfb549?pvs=4" className="project-item">
          <span className="project-number">02 //</span>
          <span className="project-name">SearchNEU</span>
          <span className="project-line"></span>
          <span className="project-year">2025</span>
        </Link>

        <Link to="https://easy-iron-95a.notion.site/Wardrobe-19534c722e4280ba91c5f5db71c5f47e" className="project-item">
          <span className="project-number">03 //</span>
          <span className="project-name">Wardrobe</span>
          <span className="project-line"></span>
          <span className="project-year">2024</span>
        </Link>

        <Link to="https://easy-iron-95a.notion.site/Calori-e-19534c722e4280dca26ce6cee867da06" className="project-item">
          <span className="project-number">04 //</span>
          <span className="project-name">Calori.e</span>
          <span className="project-line"></span>
          <span className="project-year">2023</span>
        </Link>

        <h1 className="heading">cs <a href="#" className="staricon">✶</a> projects</h1>

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

export default UXProjects;
