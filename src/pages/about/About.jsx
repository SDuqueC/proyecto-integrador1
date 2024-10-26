import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>Meet the Team</h1>
      <p>Welcome to our project! Here’s a quick introduction to our team:</p>
      <ul>
        <li>
          <strong>Juan Esteban Guerrero Camacho:</strong> Specialized in water
          scarcity issues.
        </li>
        <li>
          <strong>Santiago Duque:</strong> Focused on water contamination
          issues.
        </li>
      </ul>
    </div>
  );
};

export default About;
