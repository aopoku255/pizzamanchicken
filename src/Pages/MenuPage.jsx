import React from "react";

import menu_6 from "../assets/menu/menu-6.png";
import Navbar2 from "../Components/Navbar2";

const menu = [
  'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821858/pizzaman%20website/menu/menu-1_mcg5rr.png',
  'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821858/pizzaman%20website/menu/menu-2_uv35tw.png',
  'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821859/pizzaman%20website/menu/menu-3_gahzo1.png',
  'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821859/pizzaman%20website/menu/menu-4_vauvvq.png',
  'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821859/pizzaman%20website/menu/menu-5_wcdog5.png',
  menu_6,
  'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821860/pizzaman%20website/menu/menu-7_imkifr.png',
  'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821860/pizzaman%20website/menu/menu-8_lq1qzm.png',
  'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821860/pizzaman%20website/menu/menu-9_iszj3q.png',
  'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821858/pizzaman%20website/menu/menu-10_oc9jwr.png',
];

function MenuPage() {
  return (
    <div>
      <Navbar2 />
      <div className="px-40 py-10">
        {menu.map((list, index) => (
          <div key={index} className="py-10">
            <img src={list} loading="lazy"></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
