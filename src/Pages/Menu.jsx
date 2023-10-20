import React from 'react'

import menu_1  from '../assets/menu/menu-1.png';
import menu_2  from '../assets/menu/menu-1.png';
import menu_3  from '../assets/menu/menu-1.png';
import menu_4  from '../assets/menu/menu-1.png';
import menu_5  from '../assets/menu/menu-1.png';
import menu_6  from '../assets/menu/menu-1.png';
import menu_7  from '../assets/menu/menu-1.png';
import menu_8  from '../assets/menu/menu-1.png';
import menu_9  from '../assets/menu/menu-1.png';


const menu = [menu_1, menu_2, menu_3, menu_4, menu_5, menu_6, menu_7, menu_8, menu_9. menu_10]

function Menu() {
  return (
    <div>
      {menu.map((menu, index) => (
        <div key={index}>
            <img src={menu}></img>
        </div>
      ))}
    </div>
  )
}

export default Menu
