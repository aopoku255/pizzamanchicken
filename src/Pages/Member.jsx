import React from 'react'
import { members } from '../Data/Team';
import { LiaHouzz } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import ScrollUp from '../Components/ScrollUp';
import Navbar2 from '../Components/Navbar2';
import Footer1 from '../Components/Footer1';


function Member() {
    let i = sessionStorage.getItem("index");
  return (
    <div className='full'>
    <Navbar2 />
      <div className="w-full h-52 p-10 bg-[#fafafacc] flex justify-center items-center text-black">
          <h1 className='text-4xl'>{members[i].name}</h1>
      </div>
      <div className='my-14 flex md:flex-row flex-col lg:px-20 px-10 gap-10 w-full'>
          <div
            className="lg:w-[15rem] md:w-[20rem] w-full border border-gray-100 h-fit ">
              <img src={members[i].image} className="h-[20rem] object-cover w-full" />
              <div className="py-2 px-8 w-full">
                <h3 className="text-black text-3xl pb-2">
                  {members[i].name}
                </h3>
                <p className="text-[#8d9297] font-normal">
                    {members[i].tile}
                </p>
                <div>
                <div className="flex gap-2 items-center py-8">
                  <a href={members[i].twitterLink} className="p-2 rounded-full bg-primary">
                    <FaTwitter color="white" />
                  </a>
                  <Link 
                  to={`/:${members[i].name}`}
                  onClick={() => handleIndex(index)}
                   className="p-2 rounded-full  bg-primary">
                    <LiaHouzz color="white" />
                  </Link>
                </div>
              </div>
              </div>
            </div>
            <div className='md:w-[40rem] w-full text-[16px] leading-7 font-light'>
              {members[i].descriptions.map((desc, index) =>(
                  <p className='pb-5'>{desc}</p>
              ))}
              {
              members[i].Recognition.length > 0 ? (
                <div>
                  <h1 className='text-3xl font-semibold'>Recognition:</h1>
                  <p>{members[i].Recognition}</p>
                </div>
              ) : null
            }
          </div>
          </div>
          <ScrollUp />
          <Footer1 />
      </div>
      
  )
}

export default Member
