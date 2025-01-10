import React, { useState } from "react";

function Filtre({ handleFilterClick }) {
  const [active, setActive] = useState(""); 

  const Click = (filter) => {
    setActive(filter);
    handleFilterClick(filter);
  };

  return (
    <div className="filtre relative bg-bg">
      <div className="fixed bottom-0 w-full flex">
        <div
          className={`w-1/4 h-full flex justify-center border-2 border-black p-3 cursor-pointer bg-bg text-black ${
            active === "mural" ? "text-rouge" : "bg-bg"
          } hover:bg-red-100`}
          onClick={() => Click("mural")}
        >
          <a className="font-edu text-center text-xl md:text-2xl">Murales</a>
        </div>
        <div
          className={`w-1/4 h-full flex justify-center text-black border-2 border-black p-3 cursor-pointer bg-bg ${
            active === "collage" ? "text-rouge" : "bg-bg"
          } hover:bg-red-100`}
          onClick={() => Click("collage")}
        >
          <a className="font-edu text-center text-xl md:text-2xl">Collage</a>
        </div>
        <div
          className={`w-1/4 h-full flex justify-center text-black border-2 border-black p-3 cursor-pointer bg-bg ${
            active === "video" ? "text-rouge" : "bg-bg"
          } hover:bg-red-100`}
          onClick={() => Click("video")}
        >
          <a className="font-edu text-center text-xl md:text-2xl">Video</a>
        </div>
        <div
          className={`w-1/4 h-full flex justify-center text-black border-2 border-black p-3 cursor-pointer bg-bg ${
            active === "*" ? "text-rouge" : "bg-bg"
          } hover:bg-red-100`}
          onClick={() => Click("*")}
        >
          <a className="font-edu text-center text-xl md:text-2xl">Tout</a>
        </div>
      </div>
    </div>
  );
}

export default Filtre;

