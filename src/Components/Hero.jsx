import { useState, useEffect } from "react";
import { sliderData } from "../Data/Hero";
import "./styles.css";
import Navbar2 from "./Navbar2";
import { RiWhatsappFill } from "react-icons/ri";
import now from "../assets/now.jpg";
import { Link } from "react-router-dom";

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
      <Navbar2 />
      <div className="slider">
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div
                  className="h-screen w-screen flex justify-center items-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-40"></div>
                  <div className="content">
                    <h1 className="lg:text-[6rem] md:text-[4rem] text-[3rem] font-bold text-white leading-[1em] text-center lg:text-left">
                      {slide.heading}
                    </h1>
                    <p className="text-[2rem] lg:self-start text-center">
                      {slide.desc}{" "}
                      {index === 0 ? <b>+233 302 753 430</b> : <></>}
                    </p>
                      <div className="flex flex-col md:flex-row items-center gap-4 w-[90%] md:w-auto mx-auto md:mx-0 md:self-start self-center">
                        <button className="w-full md:w-auto text-white bg-primary rounded-lg px-8 py-3 hover:opacity-70 transition-all duration-400">
                          <a
                            href="https://wa.me/+233553871228?text=Hello! Pizzaman Chickenman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center md:justify-start gap-2 whitespace-nowrap"
                          >
                            <RiWhatsappFill />
                            <span>{slide.button}</span>
                          </a>
                        </button>
                        
                        <button className="w-full md:w-auto text-white bg-primary rounded-lg px-8 py-3 hover:opacity-70 transition-all duration-400">
                          <Link
                            to="https://chrisb.app/menu"
                            target="_blank"
                            className="flex items-center justify-center md:justify-start gap-2 whitespace-nowrap"
                          >
                            <div className="w-5">
                              <img src={now} alt="Order Now" className="rounded-full w-full" />
                            </div>
                            <span>{slide.order}</span>
                          </Link>
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

{
  /* <div className="content">
  <h2 className="text-xl font-bold">{slide.heading}</h2>
  <p>
    {slide.desc} {index === 0 ? <b>0302753430</b> : <></>}
  </p>
  <hr />
  <div className="md:flex flex-row  items-center md:gap-x-4 md:gap-y-0 gap-y-4">
    <button className="relative text-white bg-primary px-10 py-3 hover:opacity-70 transition-all duration-400">
      <a
        href="https://wa.me/+233553871228?text=Hello! Pizzaman Chickenman"
        target="_blank"
        class="flex gap-2 items-center"
      >
        <RiWhatsappFill />
        <span>{slide.button}</span>
      </a>
    </button>
    <button className="relative text-white md:mt-0 mt-4 bg-primary px-10 py-3 hover:opacity-70 transition-all duration-400">
      <Link to="menu" target="_blank" class="flex gap-2 items-center">
      
        <div className="w-5 ">
          <img src={now} className="rounded-full w-full" />
        </div>
        <span>{slide.order}</span>
      </Link>
    </button>
  </div>
</div>; */
}
