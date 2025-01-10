import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Nav from '../Util/Nav';
import Info from './Info';
import Collage from './Collage';

import Header from '../Util/header';
import Footer from '../Util/Footer';
import Bannier from '../Util/Bannier';

import Art from './Art';




function Accueil() {
  return (
    <>
     <Bannier />
    <Header />
    <div className='activea'>
    <Nav /></div>
    <Collage />
    <Info />
    <Art />
    <Footer />
    </>
  );
}

export default Accueil;