import React from "react";

import menu_1 from "../assets/menu/menu-1.png";
import menu_2 from "../assets/menu/menu-2.png";
import menu_3 from "../assets/menu/menu-3.png";
import menu_4 from "../assets/menu/menu-4.png";
import menu_5 from "../assets/menu/menu-5.png";
import menu_6 from "../assets/menu/menu-6.png";
import menu_7 from "../assets/menu/menu-7.png";
import menu_8 from "../assets/menu/menu-8.png";
import menu_9 from "../assets/menu/menu-9.png";
import menu_10 from "../assets/menu/menu-10.png";
import Navbar2 from "../Components/Navbar2";

const menu = [
  menu_1,
  menu_2,
  menu_3,
  menu_4,
  menu_5,
  menu_6,
  menu_7,
  menu_8,
  menu_9,
  menu_10,
];

function MenuPage() {
  return (
    <div>
      <Navbar2 />
      <div className="px-40 py-10">
        {menu.map((list, index) => (
          <div key={index} className="py-10">
            <img src={list}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
