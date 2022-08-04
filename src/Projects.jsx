import React from "react";
import Header from "./Header";
import projectImg from "./imges/mobile-app.png";

let myProjects = [
  {
    name: "xyz",
    img: projectImg,
    url: "",
  },
  {
    name: "",
    img: "",
    url: "",
  },
];

function Projects() {
  return (
    <div>
      <Header />
      <div className="container">
        {myProjects.map((item, i) => (
          <span>
            <h1>{item.name}</h1>
            <div className="image">
              <img src={item.img} alt="" />
            </div>
            <a rel="noreferrer" target="_blank" href={item.url}>
              Go to website
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Projects;
