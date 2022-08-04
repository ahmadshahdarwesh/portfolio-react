import React from "react";
import { HashLink } from "react-router-hash-link";
function About() {
  return (
    <div id="about">
      About
      <div className="up">
        <HashLink to="#baner">up</HashLink>
      </div>
    </div>
  );
}

export default About;
