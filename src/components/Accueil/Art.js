import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Art() {
  // Références pour les éléments à animer
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    // Animation GSAP pour le texte
    gsap.fromTo(
      textElement,
      {
    // donnée de départ 
        y: "50px",
        opacity: 0, 
      },
      {
    // donnée finale
        y: "0px", 
        opacity: 1,
        duration: 1, 
        scrollTrigger: {
    // Déclencheur
          trigger: textElement,
          start: "top 100%",
          end: "top 85%",
    //  L'animation dépend du scroll
          scrub: true,
          // markers: true, 
        },
      }
    );
  }, []);

  return (
    <section className="marge mb-0 md:mt-48 md:mb-96 bg-bg">

      <div className="image w-full h-72 border-2 border-black bg-slate-500 md:h-vh">
        <img
          className="w-full h-full object-cover object-top"
          src={require("../../img/art.jpg")} 
          alt="Art"
          style={{ visibility: "visible" }} 
        />
      </div>

      <div ref={textRef} className="w-full md:relative bg-bg">
        <div className="flex flex-col items-end md:absolute -top-64">
          <div className="border-2 border-black bg-bg w-full md:w-6/12 p-5">
            <h1 className="text-center text-4xl font-edu md:text-7xl">
              Alexandre Farto
            </h1>
          </div>
          <div className="bg-bg border-2 border-black w-full md:w-6/12 p-5">
            <p className="font-asap leading-6 lg:leading-8">
              L’artiste portugais Alexandre Farto, alias Vhils (né en 1987), a
              développé un langage visuel unique, basé sur l’élimination des
              couches superficielles des murs et autres supports à l’aide
              d’outils et de techniques non conventionnels. Ses interactions
              avec l’environnement urbain ont commencé au début des années
              2000 par la pratique du graffiti. En épluchant les strates de
              notre culture matérielle comme un archéologue urbain des temps
              modernes, Vhils réfléchit à l’impact de l’urbanité, du
              développement et de l’homogénéisation globale sur les paysages et
              les identités des gens. Détruisant pour créer, il multiplie les
              déclarations visuelles puissantes et poétiques à partir de
              matériaux que la ville rejette, humanisant les zones déprimées
              grâce à ses portraits poignants à grande échelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Art;
