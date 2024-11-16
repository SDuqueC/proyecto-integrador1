import React from "react";
import ScarcityModel from "../../components/ScarcityModel";
import ContaminationModel from "../../components/ContaminationModel";
import RiverModel from "../../components/River";
import RiverNoWater from "../../components/RiverNoWater";
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
        <div className="issues-container">
          <div className="issue">
            <ScarcityModel />
            <div className="issue-description">
              <h2>Water Scarcity</h2>
              <p>
                This section focuses on the challenges related to water
                scarcity, explaining its causes and effects.
              </p>
            </div>
          </div>
          <div className="issue">
            <ContaminationModel />
            <div className="issue-description">
              <h2>Water Contamination</h2>
              <p>
                This section highlights issues surrounding water contamination
                and its impact on ecosystems and human health.
              </p>
            </div>
            <div className="River">
              <RiverModel />
            </div>
            <div className="RiverNoWater">
              <RiverNoWater />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnvironmentalIssues;
