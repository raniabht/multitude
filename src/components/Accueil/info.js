import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";



function Info() {
  return (
    <section className="relative  sm:mt-40 bg-bg">
      <div className="absolute mul -top-96 sm:static">
      {/* titre et info inportent */}
      <div className="w-full p-5 border-2 border-black bg-bg flex justify-center items-center sm:w-8/12">
        <h2 className="text-6xl font-edu sm:text-7xl">MULTITUDE</h2>
      </div>

      <div className="w-full sm:flex sm:items-center">
        <div className="border-2 border-black bg-bg p-5 w-4/6 sm:w-1/2">
        <p className="text-xl font-asap text-center">Adresse</p>
        <p className="text-md font-asap text-center">Quai du Hainaut 41, 1080Molenbeek-Saint-Jean</p>
      </div>

      <div className="flex justify-end  sm:justify-start  sm:w-1/2 ">
      <div className="border-2 border-black bg-bg p-5 w-4/6 sm:w-full">
        <p className="text-xl font-asap text-center">periode</p>
        <p className="text-md font-asap text-center">Jun 28, 2024 - Jan 05, 2025</p>
      </div>
      </div>
      
      </div>

      <div className="w-full sm:w-8/12 bg-bg">
      {/* txt info */}
      <div className="p-5 w-full border-2 border-black bg-bg">
        <p className="font-asap leading-6 sm:leading-8">
            MULTITUDE est une exposition d’Alexandre Farto alias Vhils. Elle traite de 
            notre relation avec la ville, “la plus grande invention humaine” selon 
            l’historien Ben Wilson.
            Répartis sur les différents niveaux du MIMA, les visiteurs peuvent découvrir 
            des gravures murales, des panneaux d’affichage, des paysages urbains, des 
            vidéos et des installations de différentes époques qui offrent un aperçu 
            fascinant de l’approche de l’artiste portugais en ce qui concerne la relation 
            entre les individus et les villes.<br/>
            En grattant les surfaces, Alexandre Farto, alias Vhils, plonge dans le passé 
            et le présent des sociétés. L'artiste creuse dans leur héritage, les couches 
            et leurs récits. Et c'est à la fois, par ses prouesses techniques et par la 
            profondeur de son travail, qu'il parvient à révéler l'invisible. En utilisant 
            des outils de gravure, il libère des moments à travers trois éléments cruciaux 
            pour son œuvre : les paysages urbains, les mots et les visages. En gravant des 
            portraits, Vhils sculpte l'avenir, bien que ses œuvres semblent aussi éphémères 
            et bâtardes que l'histoire elle-même.
            </p>
        </div>

        {/* btn */}
      <div className="w-full flex flex-row justify-end ">
      <Link className="p-5 border-2 border-black w-1/2 sm:w-1/3 flex justify-center items-center cursor-pointer hover:text-rouge" to="/galrie">
          <p className="font-edu text-2xl">
            Galerie
          </p></Link>


          <Link className="p-3 md:p-5 border-2 border-black w-1/2 sm:w-1/3 flex justify-center items-center cursor-pointer hover:text-rouge" to="/concours">
          <p className="font-edu text-2xl">
            Concours
          </p></Link>
          
        </div> 


      </div>
      </div>
    </section>
  );
}

export default Info;