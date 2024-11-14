import React from "react";
import SideLinks from "./components/SideLinks";
import Intro from "./components/Intro";

const Home: React.FC = () => {
  return (
    <div className="home">
      <SideLinks />

      <div className="home__content">
        <div className="flex justify-center items-center text-3xl border border-white">Side Menu</div>
        <div className="developer__details">
          <Intro />
        </div>
      </div>
    </div>
  );
};

export default Home;
