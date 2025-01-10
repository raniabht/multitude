import React from "react";


import {Link } from "react-router-dom";


function Nav() {
  
  return (
    <>
      <nav className="navi bg-bg">
        <ul className="nav flex">
          <Link className="accueil w-1/3 h-full flex justify-center border-2 border-black p-4  hover:bg-rouge hover:font-semibold" to="/accueil">
          <p className="font-edu text-2xl ">
            Accueil
          </p></Link>
          
          <Link className="galerie w-1/3 h-full flex justify-center border-2 border-black p-4  hover:bg-rouge hover:font-semibold" to="/galrie">
          <p className="font-edu text-2xl">
            Galerie
          </p></Link>

          <Link className="concours w-1/3 h-full flex justify-center border-2 border-black p-4  hover:bg-rouge hover:font-semibold" to="/concours">
          <p className="font-edu text-2xl ">
            Concours
          </p></Link>
        </ul>
      </nav>
      
    </>
  );
}

export default Nav;
