import React from "react";
import apple from "../assets/apple-app.svg";
import google from "../assets/google-play.svg";
import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer1 = () => {
  return (
    <div className="bg-black">
      <div className=" py-10 px-10 text-white flex flex-wrap gap-x-32 gap-y-10 border-b-[1px] border-white">
        <div className="">
          <h2 className="text-2xl mb-6">Contact Us</h2>
          <div>
            <p>Head office:</p>
            <p>Citizen kofi building, Labone.</p>
            <p>Accra - Ghana</p>

            <p className="pt-8">Email: info@ceqaltd.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-6">Quick Link</h2>
          <div className="space-y-4">
            <div>
              <div />
              <Link to="/about-us" className="hover:text-primary">
                About Us
              </Link>
            </div>
            <div>
              <div />
              <Link to="/our-branches" className="hover:text-primary">
                Our Branches
              </Link>
            </div>
            <div>
              <div />
              <Link to="/our-team" className="hover:text-primary">
                Our Team
              </Link>
            </div>
            <div>
              <div />
              <Link to="/menu" className="hover:text-primary">
                Menu
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">Download the App</h1>
          <a href="https://apps.apple.com/gh/app/chris-b/id6445878198">
            <img src={apple} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.pizzamangh&pcampaignid=web_share">
            <img src={google} />
          </a>
        </div>
        <div>
          <img src={logo} width={200} />
        </div>
      </div>
      <div className="py-10 text-white text-center">
        <p>Copyright © 2023 <span className="text-primary">Pizzaman Chickenman</span> All rights reserved.</p>
        <div className="flex gap-10 justify-center py-10">
                <a href="https://www.facebook.com/pizza%20man%20ghana" className="p-4 rounded-full border border-white hover:bg-primary hover:border-primary transition-all duration-200 ease-out"><FaFacebookF/></a>
                <a href="https://twitter.com/pizzamanghana" className="p-4 rounded-full border border-white hover:bg-primary hover:border-primary transition-all duration-200 ease-out"><FaTwitter/></a>
                <a href="https://www.instagram.com/pizzamanchickenman/" className="p-4 rounded-full border border-white hover:bg-primary hover:border-primary transition-all duration-200 ease-out"><FaInstagram/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
