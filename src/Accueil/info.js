import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function Info() {
  return (
    <section className="relative  md:mt-40">
      <div className="absolute mul -top-96 md:relative">
      {/* titre et info inportent */}
      <div className="w-full p-5 border-2 border-black bg-white flex justify-center items-center sm:w-9/12">
        <h1 className="text-6xl md:text-7xl">MULTITUDE</h1>
      </div>
      <div className="w-full md:flex items-center">
        <div className="border-2 border-black bg-white p-5 w-4/6 md:w-1/2">
        <p className="text-xl text-center">Adresse</p>
        <p className="text-lg text-center">Quai du Hainaut 41, 1080 Molenbeek-Saint-Jean</p>
      </div>

      <div className="flex justify-end md:justify-start">
      <div className="p-5 border-2 border-black bg-white w-4/6 md:w-1/2">
        <p className="text-xl text-center">periode</p>
        <p className="text-lg text-center">Jun 28, 2024 - Jan 05, 2025</p>
      </div>
      </div>
      
      </div>

      <div className="w-full md:w-9/12">
      {/* txt info */}
      <div className="p-5 w-full border-2 border-black">
        <p className="leading-8 md:leading-10">
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
          <div className="p-5 border-2 border-black w-1/2 md:w-1/3 flex justify-center items-center">
            <p className="text-red-700 text-2xl">la galerie</p>
          </div>

          <div className="p-5 border-2 border-black w-1/2 md:w-1/3 flex justify-center items-center">
            <p className="text-red-700 text-2xl">jeu concours</p>
          </div>
        </div> 


      </div>
      </div>
    </section>
  );
}

export default Info;