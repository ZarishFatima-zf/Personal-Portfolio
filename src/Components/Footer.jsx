import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
  return (
        <footer className="footer">
                  <h1 className="footer-heading">Zarish Fatima</h1>

       

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
