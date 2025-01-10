import React from "react";

import Image1 from '../../img/multitude.png';

function Collage() {
  return (
    <section className="border-2 border-black">
      <div className="h-screen md: collage w-full">
      <img className="w-full h-full object-cover object-top" src={Image1} alt=""/>
      </div>
    </section>
  );
}

export default Collage;