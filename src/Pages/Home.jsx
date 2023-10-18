import React from "react";
import Hero from "../Components/Hero";
import Story from "../Components/Story";
import BestSellers from "../Components/BestSellers";
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
    <BestSellers/>
    <Gallery/>
    <Menu/>
    <Footer1/>
    <ScrollUp />
   </>
    
    
  )
}

export default Home;