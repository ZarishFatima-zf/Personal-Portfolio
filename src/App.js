
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Page Route */}
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;


