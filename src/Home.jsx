import React from "react";
import About from "./About";
import Baner from "./Baner";
import Tools from "./Tools";
import Header from "./Header";
function Home() {
  return (
    <div>
      <Header about="about" />
      <Baner />
      <Tools />
      <About />
    </div>
  );
}

export default Home;
