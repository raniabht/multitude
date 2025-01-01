import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Nav from '../Util/Nav';
import Info from './info';
import Collage from './Collage';
import Header from '../Util/header';
import Footer from '../Util/Footer';
import Art from './Art';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function Accueil() {
  return (
    <>
    <Header />
    <Nav />
    <Collage />
    <Info />
    <Art />
    <Footer />
    </>
  );
}

export default Accueil;
