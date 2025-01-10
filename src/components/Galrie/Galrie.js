import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Isotope from "isotope-layout";

import Header from "../Util/header";
import Nav from "../Util/Nav";
import Footer from "../Util/Footer";
import Bannier from '../Util/Bannier';

import Filtre from "./Filtre";
import Image from "./Image";

gsap.registerPlugin(ScrollTrigger);

function Galerie() {
  // isotope
  const gridRef = useRef(null);
  const [isotope, setIsotope] = useState(null);

  // Initialisation d'Isotope
  useEffect(() => {
    
    if (gridRef.current) {
      const iso = new Isotope(gridRef.current, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
// Désactiver les transitions d'Isotope
        transitionDuration: 0,
      });
      setIsotope(iso);
    }

    // Cleanup
    return () => {
      if (isotope) {
        isotope.destroy();
      }
    };
  }, []);

  // Gestion des filtres
  const handleFilterClick = (filterValue) => {
    if (isotope) {
      const filter = filterValue === "*" ? "*" : `.${filterValue}`;
      isotope.arrange({ filter });
    }
  };
  // /isotope

  // gsap PIN du filtre
  useEffect(() => {
    const filtre = document.querySelector(".filtre");
    const footer = document.querySelector(".footer");
    // recupetation de la hauter du footer
    const footerH = footer.offsetHeight;

    // trensition Scroll
    ScrollTrigger.create({
      trigger: ".footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      // markers: true,
      // ajustement dynamique de la position du filtre en fonction du scroll.
      onUpdate: (self) => {
        filtre.style.transform = `translateY(-${self.progress * footerH}px)`;
      },
    });

  }, []);
  // gsap PIN du filtre

  return (
    <>
    <Bannier/>
      <Header />
      <div className="activeg">
      <Nav /></div>
      <section ref={gridRef} className="bg-bg">
        <Image />
      </section>
      <section className="filtre w-full fixed bottom-0 bg-bg z-10">
        <Filtre handleFilterClick={handleFilterClick} />
      </section>
      <>
        <Footer />
      </>
    </>
  );
}

export default Galerie;
