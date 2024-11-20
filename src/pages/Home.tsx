import React from "react";
import SideLinks from "./components/SideLinks";
import Intro from "./components/Intro";
import SideMenu from "./components/SideMenu";

const Home: React.FC = () => {
  return (
    <div className="home">
      <SideLinks />

      <div className="home__content">
        <SideMenu />
        <div className="developer__details">
          <Intro />
        </div>
      </div>
    </div>
  );
};

export default Home;
