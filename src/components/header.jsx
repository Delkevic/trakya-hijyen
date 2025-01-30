import React from "react";
import "./header.css"

const Header = () => {
  return (
    <div>
      <div className="header">
        <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/tr/1/14/Trakya_%C3%9Cniversitesi_logosu.jpg"
          alt="trakya-logo"
          className="trakya-logo"
        /></div>
        <p className="hijyen-text">Trakya Hijyen</p>
      </div>
    </div>
  );
};

export default Header;
