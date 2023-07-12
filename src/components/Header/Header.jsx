import React from "react";
import "./Header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="heading">
      <h3 className="heading__text">MY JOURNEY</h3>
      <div className="heading__links">
        <Link to="/">
          <h4 className="heading__links--text">HOME</h4>
        </Link>
        <Link to="/holidays">
          <h4 className="heading__links--text">BLOG</h4>
        </Link>
        <Link to="/holiday/add">
          <h4 className="heading__links--text">ADD</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
