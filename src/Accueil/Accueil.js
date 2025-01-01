import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Nav from './Accueil/Nav';
import Info from './Accueil/info';
import Collage from './Accueil/Collage';
import reportWebVitals from './reportWebVitals';
import Header from './Accueil/header';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function Tst() {
  return (
    <>
    <Header />
    <Nav />
    <Collage />
    <Info />

    </>
  );
}

export default Tst;
