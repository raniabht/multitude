import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function Bannier() {
  const [BannierCookie, setBannierCookie] = useState(false);

  useEffect(() => {
    const cookie = Cookies.get("cookie");
    if (!cookie) {
      setBannierCookie(true);
    }
  }, []);

  const accept = () => {
    Cookies.set("cookie", "accepted", { expires: 365 });
    setBannierCookie(false);
  };

  const refuse = () => {
    setBannierCookie(false);
  };

  return (
    <>
      {BannierCookie && (
        <div id="cookie" className="relative">
          <div className="w-full p-10 bottom-0 border-2 border-black fixed md:flex md:justify-between bg-bg z-50 md:h-header">
            <div className="justify-center md:justify-normal py-6 md:px-20 flex items-center md:w-2/3">
              <p className="font-asap text-2xl">Acceptez-vous les cookies ?</p>
            </div>
            {/* Boutons */}

            <div className="py-4 flex items-start md:items-center justify-center md:w-1/3">
              {/* Bouton non */}
              <button id="nn" onClick={refuse} className="h-fit p-2 px-8 font-edu text-2xl border-2 border-black" >
                refuse
              </button>

              {/* Bouton oui */}
              <button id="oui" onClick={accept} className="h-fit p-2 px-8 font-edu mx-10 text-2xl border-2 border-black" >
                j'accepte
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Bannier;
