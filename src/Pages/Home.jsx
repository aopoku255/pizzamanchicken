import React from "react";
import Hero from "../Components/Hero";
import Story from "../Components/Story";
import Menu from "../Components/Menu";
import Counting from "../Components/Counting";
import Shop from "../Components/Shop";
import ScrollUp from "../Components/ScrollUp";
import Footer1 from "../Components/Footer1";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet></Helmet>
      <Hero />
      <Counting />
      <Story />
      <Shop />
      <Menu />
      <Footer1 />
      <ScrollUp />
    </>
  );
};

export default Home;
