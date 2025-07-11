import React from "react";
import ContactForm from "../Components/Contactform.jsx";
import "../Styles/Contact.css";


const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">CONTACT</h1>
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Side (Form) */}
          <div className="form-container">
            <ContactForm />
          </div>

          {/* Right Side (Contact Details) */}
          <div className="contact-details">

            <div className="contact-item">
              <img
                src="https://img.icons8.com/?size=100&id=12623&format=png&color=ffffff"
                alt="Email"
                className="icon"
              />
              <a href="mailto:zarishfatima6087@gmail.com"> zarishfatima6087@gmail.com</a>
            </div>

            <div className="contact-item">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                alt="LinkedIn"
                className="icon"
              />
              <a href="https://www.linkedin.com/in/zarish-fatima-zf10112002/"> zarish-fatima-zf10112002</a>
            </div>

            <div className="contact-item">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                alt="Github"
                className="icon"
              />
              <a href="https://github.com/ZarishFatima-zf">zarishfatima-zf</a>
            </div>

            <div className="contact-item">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt="Location"
                className="icon"
              />
              <p>Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
    
  );
};

export default Contact;
