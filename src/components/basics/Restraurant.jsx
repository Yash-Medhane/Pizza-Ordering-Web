import React, { useState } from 'react';
import "./Style/style.css"
import Menu from "./menuapi.jsx";
import MenuCard from "./MenuCard.jsx";
import Navbar from "./Navbar.jsx";

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

