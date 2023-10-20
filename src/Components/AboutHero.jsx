import React from "react";
import { truckDark, chris } from "../assets";

const AboutHero = () => {

  return (
    <div className="font-Montserrat">
      <div
        className="w-full h-96 flex justify-center items-center"
        style={{
          backgroundImage: `url(${truckDark})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-5xl text-white">
          About Us
        </h1>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 py-20 lg:px-14 px-6 lg:gap-12 gap-8 w-full">
       
        <img src={chris} alt="" className=" w-full object-contain" loading="lazy"/>
          <div>
            <h2 className="text-3xl text-center pb-5 border-b-2 border-b-primary">Welcome To Pizzaman Chickenman.</h2>
            <p className="text-center py-5 text-[16px] leading-7 font-light">
              <b>Pizzaman Chickenman</b> is a fully owned Ghanaian company
              which aims at serving the people of Ghana and Africa with the best
              of meals. As the founder and Chief Executive Officer of this
              company, it is our vision to be the first and leading fast food
              chain in Ghana and West Africa at large. Our aim is to make
              quality and tasty food accessible and affordable.
            </p>
          </div>
        </div>
      </div>
  );
}

export default AboutHero;
