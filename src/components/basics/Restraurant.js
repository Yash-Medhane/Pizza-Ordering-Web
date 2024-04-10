import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuapi.js";
import MenuCard from "./MenuCard.js";
import Navbar from "./Navbar.js";

const uniqueList = [...new Set(Menu.map((currentElement) =>{
  return currentElement.category;
})),
"All",];

const Restraurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) =>{

    if(category === "All") {
      setMenuData(Menu);
      return;
    }
   const updatedList = Menu.filter((currentElement) => {
    return currentElement.category === category;
   });

   setMenuData(updatedList);
  };

  return (
    <>
     <Navbar filterItem={filterItem}  menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restraurant;

