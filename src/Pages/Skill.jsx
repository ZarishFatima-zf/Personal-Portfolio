import React from "react";
import "../Styles/Skill.css";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "https://img.icons8.com/color/48/html-5.png" },
    { name: "CSS", icon: "https://img.icons8.com/color/48/css3.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript.png" },
    { name: "React.js", icon: "https://img.icons8.com/color/48/react-native.png" },
    { name: "React Native", icon: "https://img.icons8.com/ultraviolet/48/react--v1.png" },
    { name: "Bootstrap", icon: "https://img.icons8.com/color/48/bootstrap.png" },
    { name: "Firebase", icon: "https://img.icons8.com/color/48/firebase.png" },
    { name: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
    { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
    { name: "Python", icon: "https://img.icons8.com/color/48/python.png" },
     { name: "Figma", icon: "https://img.icons8.com/color/48/figma--v1.png" },
    { name: "Git", icon: "https://img.icons8.com/color/48/git.png" }
  ];

  return (
    <div className="skill-page">
      <h1 className="main-heading-skills">MY SKILLS</h1>

      <div className="hero-section">
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
