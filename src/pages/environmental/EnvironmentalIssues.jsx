import React from "react";
import "./EnvironmentalIssues.css";
import Navbar from "../../components/nav-bar/NavBar";

const EnvironmentalIssues = () => {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="environmental-issues">
        <h1>Environmental Issues</h1>
        <section>
          <h2>Water Scarcity</h2>
          <p>
            This section focuses on the challenges related to water scarcity,
            explaining its causes and effects.
          </p>
        </section>
        <section>
          <h2>Water Contamination</h2>
          <p>
            This section highlights issues surrounding water contamination and
            its impact on ecosystems and human health.
          </p>
        </section>
      </div>
    </>
  );
};

export default EnvironmentalIssues;
