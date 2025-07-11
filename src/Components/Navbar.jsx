import React, { useState } from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close menu on mobile after click
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="navbar-logo">
        <h1>ᴢԲ𝙖𝒕𝖎𝔪𝚊 
</h1>
      </div>

      <ul className={` text1 navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <button onClick={() => handleScroll("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleScroll("about-me")}>About</button>
        </li>
        <li>
          <button onClick={() => handleScroll("skills")}>Skills</button>
        </li>
        <li>
          <button onClick={() => handleScroll("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleScroll("contact")}>Contact</button>
        </li>
      </ul>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;



