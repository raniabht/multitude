import React from "react";


import Image1 from '../../img/logo.png';
import Image2 from '../../img/mima.png';


function Header() {

  return (
    <header className="w-full">

      <div className=" w-full flex bg-bg md:h-header ">
{/* logo multitude */}
      <div className="border-2 w-logosm border-black sm:jsp sm:w-logo">
      <div className="flex justify-center items-center w-full h-full "><img className="w-3/6 h-auto object-cover sm:w-3/6 lg:w-1/4" src={Image1} alt=""/></div>
      </div>

{/* titre */}
      <div className="border-2 border-black flex justify-center items-center w-titresm sm:titre sm:w-titre">
        <h1 className="font-edu text-center text-3xl md:text-8xl">MULTITUDE</h1>
      </div>
{/* logo mima */}
      <div className="border-2 w-logosm border-black sm:jsp sm:w-logo">
      <div className="flex justify-center items-center w-full h-full"><img className="w-5/6 h-auto object-cover sm:w-5/6 lg:w-2/4" src={Image2} alt=""/></div>
      </div>

      </div>

    </header>
  );
}

export default Header;