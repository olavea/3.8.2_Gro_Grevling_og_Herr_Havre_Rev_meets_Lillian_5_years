import React from "react";

const Header = props => (
  <header className="top">
    <h3>Tegninger tegnet av:</h3>
    <h2 className="tagline">
      <span>{props.tagline}</span>
    </h2>
  </header>
);

export default Header;
