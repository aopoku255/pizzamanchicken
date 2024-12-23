import React, { useState, useEffect } from "react";
import NavLinks from "../Data/NavLinks";
import logo from "../assets/logo2.png";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

function Navbar2() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState("");
  const [subActive, setSubActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [subNav, setSubNav] = useState(false);

  const [navbar, setNavBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []); // Add an empty dependency array to ensure the effect runs once after the initial render

  return (
    <div
      className={`${
        navbar ? "bg-white" : "bg-none"
      } md:px-20 px-5 h-24 flex gap-20 justify-between items-center fixed left-0 right-0 ease-in-out duration-500 z-50`}
    >
      <Link to="/" className="mt-4">
        <img src={logo} alt="Logo" className="lg:h-[7rem] h-[4rem]" />
      </Link>

      <nav className="relative lg:block hidden">
        <ul className="flex gap-10">
          {NavLinks.map((navLink, index) => (
            <li
              key={index}
              className="relative inline-block"
              onClick={() => setActive(navLink?.title)}
              onMouseOver={() => setVisible(navLink?.title)}
              onMouseLeave={() => setVisible("")}
            >
              <Link
                to={navLink?.id ==="menu" ? "https://chrisb.app/menu": `/${navLink?.id}`}
                className={`${
                  active === navLink?.title ? "text-primary" : "text-[#fff]"
                } ${navbar && "text-[black]"}
            hover:text-primary uppercase text-base font-semibold h-[5rem] flex justify-center items-center`}
              >
                {navLink?.title}
              </Link>
              <ul
                className={`${
                  visible === navLink?.title ? "block" : "hidden"
                } absolute top-20 bg-white border-t-4 
          ${navLink?.subLink?.length > 0 && "border-primary w-64"}`}
              >
                {navLink?.subLink?.map((subLink, index) => (
                  <NavLink
                    to={`/${subLink.id}`}
                    key={index}
                    className={`block text-sm pl-5 py-4 hover:bg-primary hover:text-white ${
                      index === 0 && "border-b border-white"
                    }
               `}
                    onClick={() => setSubActive(subLink?.title)}
                    style={({ isActive }) =>
                      isActive
                        ? { backgroundColor: "#e93e21", color: "#fff" }
                        : { backgroundColor: "text-white" }
                    }
                  >
                    {subLink.title}
                  </NavLink>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      {!toggle ? (
        <HiMenu
          size={30}
          className={`lg:hidden block cursor-pointer ${
            navbar ? "text-primary" : "text-white"
          }`}
          onClick={() => setToggle(true)}
        />
      ) : (
        <AiOutlineClose
          size={30}
          className={`lg:hidden block cursor-pointer ${
            navbar ? "text-primary" : "text-white"
          }`}
          onClick={() => setToggle(false)}
        />
      )}

      {/* Mobile Version */}
      {toggle && (
        <nav className="lg:hidden block absolute bg-white top-20 left-0 right-0">
          <ul className="flex flex-col px-4 border-t-4 border-primary">
            {NavLinks.map((navLink, index) => (
              <li key={index} className="relative inline-block">
                {navLink.id === "our-menu" ? (
                  <Link
                    to="https://chrisb.app/menu"
                    className={`${
                      active === navLink.title
                        ? "text-primary"
                        : "text-[#4d5257]"
                    } hover:text-primary uppercase text-base font-semibold flex justify-between items-center py-4 border-b`}
                  >
                    {navLink.title}
                  </Link>
                ) : (
                  <Link
                    to={`/${navLink.id}`}
                    className={`${
                      active === navLink.title
                        ? "text-primary"
                        : "text-[#4d5257]"
                    } hover:text-primary uppercase text-base font-semibold flex justify-between items-center py-4 border-b`}
                    onClick={() => {
                      setActive(navLink.title);
                      navLink.subLink?.length > 0 && setSubNav(!subNav);
                    }}
                  >
                    <span>{navLink.title}</span>
                    {active === navLink.title
                      ? navLink.subLink?.length > 0 && (
                          <MdKeyboardArrowUp className="text-2xl" />
                        )
                      : navLink.subLink?.length > 0 && (
                          <MdKeyboardArrowDown className="text-2xl" />
                        )}
                  </Link>
                )}
                <ul className={`${subNav ? "block" : "hidden"} pl-5`}>
                  {navLink.subLink?.map((subLink, index) => (
                    <Link to={`/${subLink.id}`}>
                      <li
                        key={index}
                        className={`text-base hover:text-primary flex justify-between py-4 border-b ${
                          subActive === subLink?.title && "text-primary"
                        }`}
                        onClick={() => setSubActive(subLink?.title)}
                      >
                        <p>{subLink?.title}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar2;
