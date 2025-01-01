import React from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function Footer() {
  return (
    <footer className="mt-40 sm:footer w-full">
        {/* les 3section */}
      <section className="flex flex-row flex-wrap sm:flex flex-row">
        {/* les partenaire */}
        <div className="border-2 border-black p-5 w-1/2 sm:w-1/3">
        <p className="text-xl sm:text-3xl">partenaire</p>
        <div className=" w-full">
        <div className="ml-3 w-10/12 h-32 bg-red-600 sm:ml-10 mt-10 "></div>
        </div>
        </div>
{/* les contact */}
        <div className="border-2 border-black p-5 w-full order-last sm:w-1/3 order-2">
        <p className="text-xl sm:text-3xl">contact</p>
        <div className="ml-5 mt-10 sm:ml-10 w-2/3">
            <p className="text-lg ms:text-xl">num: 04 XX XX XX XX</p>
            <p className="text-lg mt-2 ms:text-xl mt-3">mail: xxx@gmail.com</p>
            <p className="text-lg mt-2 w-full ms:text-xl mt-3">adresse: Quai du Hainaut 41, 1080 Molenbeek-Saint-Jean</p>
        </div>
        </div>

{/* navigation */}
        <div className="border-2 border-black flex flex-col justify-between p-5 pb-0 pr-0 w-1/2 sm:w-1/3">
        <p className="text-xl sm:text-3xl">navigation</p>
        <div className="flex flex-col ml-16 w-2/3">
        <a className="text-xl text-red-600 cursor-pointer mt-5 sm:text-3xl">Accueil</a>
        <a className="text-xl text-red-600 cursor-pointer mt-5 sm:text-3xl">Galrie</a>
        </div>

        {/* btn concours */}
        <div className="w-full flex justify-end">
        <div className="px-3 py-2 border-2 border-black flex justify-center w-3/5 sm: w-1/2">
        <a className=" text-xl text-red-600 cursor-pointer sm:text-3xl">concours</a> 
        </div>
        </div>
        </div>
      </section>

        {/* les reseau */}
        <div className="w-full p-5 border-2 border-black flex flex-row justify-center">
            <div className="mx-8 w-24 h-24 bg-red-600"></div>
            <div className="mx-8 w-24 h-24 bg-red-600"></div>
            <div className="mx-8 w-24 h-24 bg-red-600"></div>
        </div>
    </footer>
  );
}

export default Footer;