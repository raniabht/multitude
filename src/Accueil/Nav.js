import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { link } from 'react-router-dom';

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function Nav() {
  return (
    <>
      <nav>
        <ul className="nav flex">
            <li className="w-1/3 h-full flex justify-center border-2 border-black p-4">
            {/* <Link to="Accueil">Accueil</Link>  */}
            <a className="text-xl">Accueil</a></li>
            <li className="w-1/3 h-ful flex justify-center border-2 border-black p-4">
            {/* <Link to="galrie">Galrie</Link> */}
            <a className="text-xl">galrie</a></li>
            <li className="w-1/3 h-ful flex justify-center border-2 border-black p-4">
            {/* <Link to="concours">Concours</Link> */}
            <a className="text-xl">concours</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;