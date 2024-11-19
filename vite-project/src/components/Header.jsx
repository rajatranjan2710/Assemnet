import React from "react";
import "../styles/header.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="logo">User List</div>
      <div className="buttons">
        <div>Credits</div>
        <div>Logout</div>
      </div>
    </section>
  );
};

export default Header;
