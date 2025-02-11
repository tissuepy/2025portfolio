import "./App.css";

const PortfolioText = () => {
  return (
    <div className="portfolio-container">

<div className="image-container">
        <img src="icon.png" alt="Your Image Here" className="profile-image" />
      </div>
    
      <nav className="nav-bar">
          <span className="nav-item font-bold"><a href="cs-projects" className="nav-link">ABOUT</a></span>
          <span className="nav-item text-gray-400"><a href="ux-projects" className="nav-link">PROJECTS</a></span>
        </nav>

      <div className="header-container">
        <h1 className="heading">nitish gannu <a href="#" className="staricon">✶</a> product designer</h1>
      </div>
      
      
      <p className="text-block">
        data science <a href="https://www.stamfordhealth.org/care-treatment/research/" className="underline">@northeastern</a> // ux research <a href="https://www.sandboxnu.com/" className="underline">@sandbox</a> & biostats <a href="https://www.stamfordhealth.org/care-treatment/research/" className="underline">@stamford health</a>
      </p>
      
      <footer className="footer">
        <a href="https://www.linkedin.com/in/nitishgannu/" className="footer-link link">LINKEDIN</a> / 
        <a href="https://github.com/tissuepy" className="footer-link link"> GITHUB</a> / 
        <a href="https://drive.google.com/drive/folders/1I_xEZgdQmrSTr0WnPdEhSLVqXDFmufz9?usp=drive_link" className="footer-link link"> RESUME</a> /
        <a href="https://vsco.co/nitissue/gallery" className="footer-link link"> PHOTOS</a>
      </footer>
    </div>
  );
};

export default PortfolioText;
