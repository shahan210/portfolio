import React from "react";
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <p className="name">Mohammed Shahan</p>
      <div className="navbar__menu">
        <p>Home</p>
        <p>About</p>
        <p>Experience</p>
        <p>Project</p>
        <p>Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;
