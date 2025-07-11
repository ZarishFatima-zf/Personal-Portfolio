import React from "react";
import { useNavigate } from "react-router-dom"; 
import Button from "../Components/Button.jsx";
import "../Styles/About.css";

const About = () => {
  const navigate = useNavigate(); 

  return (
    <div className="about-page">
      <h1 className="about-heading">ABOUT ME</h1>
      <div className="hero-section">
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="paragraph-style">
            I am currently pursuing a degree in Software Engineering. My main goal is to continuously learn and grow in my field. 
            I believe that real growth comes from taking on projects that not only challenge me but also help expand my knowledge and technical skills.
            I’m eager to explore different areas of software development, whether it’s building applications or learning about new programming languages and frameworks.
            I want to keep up with the latest trends and advancements. This means being open to new ideas and always being willing to learn.
            I aim to use my skills to create solutions that not only solve problems but also have a positive impact on people’s lives.
          </p>

          <div className="about-button">            
            <Button 
              text="Connect" 
              width="10rem" 
              height="4rem" 
              onClick={() => navigate("/contact")} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

