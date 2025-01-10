import React from "react";
import { Link } from "react-router-dom";

import Image2 from '../../img/mima.png';
import Image3 from '../../img/facebook.png';
import Image4 from '../../img/instagram.png';
import Image5 from '../../img/twitter.png';

function Footer() {
  return (
    <footer className="bg-bg footer mt-40 md:footer w-full">
      {/* Les 3 sections */}
      <section className="flex flex-row flex-wrap md:flex-nowrap">
        {/* Partenaires */}
        <div className="border-2 border-black p-5 w-1/2 md:order-1 md:w-1/3">
          <p className="font-edu text-xl md:text-3xl">Partenaire</p>
          <div className="w-full">
            <div className="ml-3 w-10/12 h-3 md:ml-10 mt-10">
              <img
                className="w-3/6 h-auto object-cover sm:w-2/6 lg:w-1/3"
                src={Image2}
                alt="Partenaire"
              />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="border-2 border-black p-5 pr-2 w-full order-last md:w-1/3 md:order-2">
          <p className="font-edu text-xl md:text-3xl">Contact</p>
          <div className="ml-5 mt-10 md:ml-10 w-2/3">
            <p className="font-asap text-lg md:text-xl">Num: 04 XX XX XX XX</p>
            <p className="font-asap text-lg mt-2 md:text-xl md:mt-3">Mail: xxx@gmail.com</p>
            <p className="font-asap text-lg mt-2 w-full md:text-xl md:mt-3">
              Adresse: Quai du Hainaut 41, 1080 Molenbeek-Saint-Jean
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-2 border-black flex flex-col justify-between p-5 pb-0 pr-0 w-1/2 md:order-3 md:w-1/3">
          <p className="text-xl md:text-3xl">Navigation</p>
          <div className="flex flex-col ml-16 w-2/3">
            <Link
              className="font-edu text-xl text-rouge cursor-pointer mt-5 w-fit md:text-3xl"
              to="/accueil"
            >
              Accueil
            </Link>
            <Link
              className="font-edu text-xl text-rouge  cursor-pointer mt-5 w-fit md:text-3xl"
              to="/galrie"
            >
              Galerie
            </Link>
          </div>

          {/* Bouton Concours */}
          <div className="w-full flex justify-end">
            <Link
              className="px-3 py-2 border-2 border-black flex justify-center w-3/5 md:w-1/2 cursor-pointer hover:text-rouge"
              to="/concours"
            >
              <p className="font-edu text-2xl">Concours</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Réseaux Sociaux */}
      <div className="w-full p-5 border-2 border-black flex flex-row justify-center gap-20 md::gap-32">
        <a href="https://www.facebook.com/" className="h-10 md:h-16 cursor-pointer">
          <img className="w-auto h-full object-cover" src={Image3} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/" className="h-10 md:h-16 cursor-pointer">
          <img className="w-auto h-full object-cover" src={Image4} alt="Instagram" />
        </a>
        <a href="https://x.com/" className="h-10 md:h-16 cursor-pointer">
          <img className="w-auto h-full object-cover" src={Image5} alt="Twitter" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
