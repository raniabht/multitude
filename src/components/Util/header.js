import React from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function Header() {
  return (
    <header >
      <div className="header flex bg-pink-100">
      <div className=" border-2 w-1/6 border-black sm:jsp">

      </div>
      <div className="border-2 border-black flex justify-center items-center w-4/6 sm:titre ">
        <h1 className="text-center text-5xl md:text-8xl">MULTITUDE</h1>
      </div>
      <div className=" border-2 w-1/6 border-black sm:jsp">
        
      </div>
      </div>
    </header>
  );
}

export default Header;