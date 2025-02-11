import "./App.css";

const About = () => {
  return (
    <div className="about-container">
      <nav className="nav-bar3">
        <span className="nav-item">
        <a href="/" className="nav-item">HOME</a>
        </span>
        <span className="divider">//</span>
        <span className="nav-item">ABOUT ME</span>
        <div className="nav-line"></div>
      </nav>

      <div className="about-content">
        <img src="pfp.JPG" alt="Your Image" className="about-image" />
        <div className="about-text">
          <h1 className="heading">about me</h1>
          <p className="text-block">
          I am a product designer and data scientist passionate about creating intuitive, data-driven solutions that enhance user experiences. 
          Previously, I worked at <a href="https://www.stamfordhealth.org/care-treatment/research/" className="underline">Stamford Health</a> where I analyzed cancer patient data using machine learning classification models for chemotherapy drug treatments. 
          Currently, I am a UX Researcher & Designer at <a href="https://www.sandboxnu.com/" className="underline">Sandbox</a>  where I'm exploring how specific product design decisions impact user behavior and response.
          </p>
          <p className="text-block">
            Have fun snooping around my portfolio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
