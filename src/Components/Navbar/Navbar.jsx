import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  let navbar = ["Home","SignUp", "SignIn"];


  return (
    <div>
        
    <div className=" p-2 font-bold nav text-white">
      <nav className="flex align-center justify-between p-3">
        <div className="mx-70 align-center flex object-contain">
         <div className=""> 
         
        <h1 className="text-center text-white text-4xl px-2 py-2 ">PROJECT X</h1>
          </div> 
        </div>
        <ul className="flex justify-center items-center">
          {navbar.map((buttons, index) => (
            <NavLink to={buttons} key={index} className=" text-white mx-9 text-xl rounded-full p-2 text-center hover: curosr-pointer link hover:text-sky-400">{buttons}</NavLink> 
          ))}
        </ul>
      </nav>
    </div>
</div>
  
  );
};

export default Navbar;
