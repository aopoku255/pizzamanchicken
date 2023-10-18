import React from "react";
import Hero from "../Components/Hero";
import Story from "../Components/Story";
import Menu from "../Components/Menu";
import Counting from "../Components/Counting";
import Gallery from "../Components/Gallery";
import Shop from "../Components/Shop";
import ScrollUp from "../Components/ScrollUp";
import Footer1 from "../Components/Footer1";

const Home = () => {
  return(
   <>
    <Hero/>
    <Counting/>
    <Story/>
    <Shop/>
    <Gallery/>
    <Menu/>
    <Footer1/>
    <ScrollUp />
   </>
    
    
  )
}

export default Home;