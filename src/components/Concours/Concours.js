import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


import Header from '../Util/header';
import Nav from '../Util/Nav';
import Footer from '../Util/Footer';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function Concours() {
  return (
    <>
    <Header />
    <Nav />

    <Footer />
<p>concours</p>
    </>
  );
}

export default Concours;