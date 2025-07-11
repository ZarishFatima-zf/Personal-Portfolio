import React from "react";
import "../Styles/Home.css";
import Button from "../Components/Button.jsx";
const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Document/Zarish_Fatima_Resume.pdf";
    link.download = "ZARISH_FATIMA_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-page">
      <h1 className="home-heading">Hey, I'm Zarish Fatima</h1>
      <p className="paragraph-style"> Full Stack Developer | Web & Mobile Apps </p>
    <Button
            onClick={handleDownload}
            text="Download Resume"
            width="18rem"
            height="4rem"
            className="home-button"
          />
    </div>
  );
};
export default Home;