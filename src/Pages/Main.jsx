import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Home from "../Pages/Home";
import AboutMe from "../Pages/About";
import Skills from "../Pages/Skill";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import Footer from "../Components/Footer.jsx"; 

const Main = () => {
  return (
    <div>
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Project />        
        </section>
        <section id="contact">
          <Contact />
        </section>

        <Footer /> 
      </main>
    </div>
  );
};

export default Main;
