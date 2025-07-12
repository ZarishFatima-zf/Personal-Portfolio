import React, { useEffect, useState } from "react";
import "../Styles/Project.css";
import Button from "../Components/Button.jsx";
import PhotoPortfolio from "../Images/PhotoPortfolio.png";
import Weather from "../Images/Weather.png";
import StudyBoard from "../Images/StudyBoard.png";
import Todolist from "../Images/Todolist.jpg";
import Calculator from "../Images/Calculator.png"
import GroceryList from "../Images/GroceryList.png"


const projects = [

{
  name: "Grocery List",
  image: GroceryList,
  link: "https://grocerylist-zf.netlify.app/",
  description: "A grocery list website made with HTML, CSS, and JavaScript.",
},
  {
  name: "Calculator",
  image: Calculator,
  link: "https://calculator-zf.netlify.app/",
  description: "A simple calculator built using HTML, CSS, and JavaScript by Zarish Fatima.",
},
  {
    name: "Photo Portfolio",
    image: PhotoPortfolio,
    link: "https://photo-portfolio-zf.netlify.app/",
    description: "A photography portfolio showcasing personal images.",
  },
  {
    name: "Weather Forecast",
    image: Weather,
    link: "https://weatherforecast-zf.netlify.app/",
    description: "Weather app showing live forecasts via API.",
  },
  {
    name: "Study Board",
    image: StudyBoard ,
    link: "https://studyboard-zf.netlify.app/",
    description: "Study material manager using React & Tailwind CSS.",
  },
  {
    name: "To-Do List App",
    image: Todolist,
    link: "https://github.com/ZarishFatima-zf/ToDoListApp",
    description: "A React Native app to manage tasks on mobile.",
  },

];

const Project = () => {
  const [cardsPerPage, setCardsPerPage] = useState(window.innerWidth < 768 ? 1 : 3);
  const [currentSet, setCurrentSet] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(window.innerWidth < 768 ? 1 : 3);
      setCurrentSet(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / cardsPerPage);
  const startIndex = currentSet * cardsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + cardsPerPage);
  const goToNext = () => setCurrentSet((prev) => (prev + 1) % totalPages);
  const goToPrev = () => setCurrentSet((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <div className="project-page">
      <h1 className="project-heading">PROJECTS</h1>
      <div className="hero-section">
        <div className="project-wrapper-horizontal">
          <button className="nav-arrow left-arrow" onClick={goToPrev}>←</button>

          <div className="card-grid">
            {visibleProjects.map((project, idx) => (
              <div className="project-card" key={idx}>
                <img src={project.image} alt={project.name} className="project-image" />
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-buttons">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer"> Visit Site</a>
                </div>
              </div>
            ))}
          </div>
          <button className="nav-arrow right-arrow" onClick={goToNext}>→</button>
        </div>

        <div className="project-button">
          <Button 
            text="View All Projects"
            width="18rem"
            height="4rem"
            onClick={() => window.open("https://github.com/ZarishFatima-zf", "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
