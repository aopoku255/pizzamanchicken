
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "../Data/Hero";
import { Link } from "react-router-dom";
import "./styles.css";
import Navbar2 from "./Navbar2";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { RiWhatsappFill } from "react-icons/ri";
import order from '../assets/ord.png'
import now from '../assets/now.jpg'


const Hero = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 10000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
   <div className="relative">
       <Navbar2/>
    <div className="slider">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
        
              <div className="h-screen w-screen" style={{
                backgroundImage:`url(${slide.image})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition: 'center',
                backgroundSize:'cover'
              }}>
              <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-40"></div>
              <div className="content">
                <h2 className="text-xl font-bold">{slide.heading}</h2>
                <p>{slide.desc} {index === 0 ? <b>0302753430</b> : <></>}</p>
                <hr />
              <div className='md:flex flex-row  items-center md:gap-x-4 md:gap-y-0 gap-y-4'>
                <button className='relative text-white bg-primary px-10 py-3 hover:opacity-70 transition-all duration-400'>
                  <a href="https://wa.me/+233553871228?text=Hello! Pizzaman Chickenman" target="_blank" class="flex gap-2 items-center">
                  <RiWhatsappFill />
                  <span>{slide.button}</span>
                  </a>
                  </button>
                  <button className='relative text-white md:mt-0 mt-4 bg-primary px-10 py-3 hover:opacity-70 transition-all duration-400'>
                  <a href="https://wa.me/+233553871228?text=Hello! Pizzaman Chickenman" target="_blank" class="flex gap-2 items-center">
                  {/* <AiOutlineShoppingCart /> */}
                  <div className="w-5 ">
                    <img src={now} className="rounded-full w-full"/>
                  </div>
                  <span>{slide.order}</span>
                  </a>
                  </button>
              </div>
              </div>
            </div>
              

            )}
          </div>
        );
      })}
    </div>
   </div>
  );
};

export default Hero;


