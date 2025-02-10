import "./App.css";


const PortfolioText = () => {
  return (
    <div className="portfolio-container">
      <div className="header-container">
  <h1 className="heading">Hey, I'm Nitish</h1>
  <nav className="nav-bar">
    <span className="nav-item font-bold"><a href="cs-projects" className="footer-link link">CS PROJECTS</a></span>
    <span className="nav-item text-gray-400"><a href="ux-projects" className="footer-link link">UX PROJECTS</a></span>
  </nav>
</div>
      
<p className="text-block">
        I am a product designer and data scientist passionate about creating intuitive, data-driven solutions that enhance user experiences. 
        Previously, I worked at <a href="https://www.stamfordhealth.org/care-treatment/research/" className="underline">Stamford Health</a> where I analyzed cancer patient data using machine learning classification models for chemotherapy drug treatments.
        Currently, I am a UX Researcher & Designer at <a href="https://www.sandboxnu.com/" className="underline">Sandbox</a> where I'm exploring how specific product design decisions impact user behavior and response.
      </p>
      
      <p className="text-block">
        Outside of work, you’ll find me diving into Minecraft mods to 
        explore creative worlds or experimenting in the kitchen, with a special focus on perfecting 
        Korean dishes. Enjoy snooping around my portfolio!
      </p>
      
      <footer className="footer">
        <a href="https://www.linkedin.com/in/nitishgannu/" className="footer-link link">LINKEDIN</a> / 
        <a href="https://github.com/tissuepy" className="footer-link link"> GITHUB</a> / 
        <a href="https://easy-iron-95a.notion.site/UX-Design-Projects-19534c722e428091bdd8cec96de8dd65" className="footer-link link"> NOTION</a> / 
        <a href="https://drive.google.com/drive/folders/1I_xEZgdQmrSTr0WnPdEhSLVqXDFmufz9?usp=drive_link" className="footer-link link"> RESUME</a> /
        <a href="https://vsco.co/nitissue/gallery" className="footer-link link"> PHOTOS</a>
      </footer>
    </div>
  );
};

export default PortfolioText;
