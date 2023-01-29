import React from "react";
import Content from "../components/Content/Content";
import NavBar from "../components/NavBar/NavBar";

const Home = ({token}) => {
  return (
    <>
      <NavBar token={token} />
      <Content />
    </>
  );
};

export default Home;
