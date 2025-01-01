import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { BrowserRouter as Router, Link } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Nav() {
  return (
    <>
      <nav>
        <ul className="nav flex">
          <li className="w-1/3 h-full flex justify-center border-2 border-black p-4">
            <Link className="text-xl" to="/accueil">Accueil</Link>
          </li>
          <li className="w-1/3 h-full flex justify-center border-2 border-black p-4">
            <Link className="text-xl" to="/galrie">Galerie</Link>
          </li>
          <li className="w-1/3 h-full flex justify-center border-2 border-black p-4">
            <Link className="text-xl" to="/concours">Concours</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
