import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


import Header from './components/header';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function Tst() {
  return (
    <>
    <Header />

    </>
  );
}

export default Tst;