import React from "react";
import AddUser from "../components/AddUser";
import "../styles/homepage.scss";
import ShowUsers from "../components/ShowUsers";

const HomePage = () => {
  return (
    <section className="home-page">
      <AddUser />
      <ShowUsers />
    </section>
  );
};

export default HomePage;
