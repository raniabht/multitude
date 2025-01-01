import React from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function Art() {
  return (
      <section className="marge sm: mt-40">
        <div className="h-72 border-2 border-black sm: h-96 w-full bg-red-600">
          {/* art */}
        </div>

        <div className="w-full  md:relative bg-white">
            <div className="flex flex-col items-end md:absolute -top-64">
        <div className="border-2 border-black bg-white w-full md: w-6/12 p-5">
        <h1 className="text-center text-4xl md: text-7xl ">Alexandre Farto</h1>
        </div>
        <div className="bg-white border-2 border-black w-full md:w-6/12 p-5 ">
            <p className="leading-8 md:leading-10">
                L’artiste portugais Alexandre Farto, alias Vhils (né en 1987), 
                a développé un langage visuel unique, basé sur l’élimination des 
                couches superficielles des murs et autres supports à l’aide d’outils 
                et de techniques non conventionnels. Ses interactions avec l’environnement 
                urbain ont commencé au début des années 2000 par la pratique du graffiti. 
                En épluchant les strates de notre culture matérielle comme un archéologue 
                urbain des temps modernes, Vhils réfléchit à l’impact de l’urbanité, 
                du développement et de l’homogénéisation globale sur les paysages et les 
                identités des gens. Détruisant pour créer, il multiplie les déclarations 
                visuelles puissantes et poétiques à partir de matériaux que la ville 
                rejette, humanisant les zones déprimées grâce à ses portraits poignants 
                à grande échelle.
            </p>
        </div>
        </div>

        </div>

      </section> 
  );
}

export default Art;