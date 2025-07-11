import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
  return (
        <footer className="footer">
                  <h1 className="footer-heading">Zarish Fatima</h1>

        <div className="icon-row-horizontal">
        <a href="mailto:zarishfatima6087@gmail.com" className="footer-icon" title="Email">
          <img
            src="https://img.icons8.com/?size=100&id=12623&format=png&color=ffffff"
            alt="Email"
            className="icon"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/zarish-fatima-zf10112002/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
          title="LinkedIn"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
            alt="LinkedIn"
            className="icon"
          />
        </a>

        <a
          href="https://github.com/ZarishFatima-zf"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
          title="GitHub"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
            alt="GitHub"
            className="icon"
          />
        </a>
      </div>
   
      

<hr className="footer-divider" />  {/* Divider line */}
<p>©2025 Zarish Fatima. All Rights Reserved</p>
      <p>
        Designed and Developed by Zarish Fatima |  
        <Link to="/contact" className="footer-link"> ContactMe</Link>
      </p>
       </footer>
  );
};

export default Footer;
