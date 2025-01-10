import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    mail: "",
    conmail: "",
  });

  // État pour afficher un message
  const [error, setError] = useState(""); 

  const [errorClass, setErrorClass] = useState(""); 

  // Gérer la mise à jour des champs de formulaire
  const init = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation du formulaire
  const submit = (e) => {
    e.preventDefault();

    const { nom, prenom, mail, conmail } = formData;

    // Vérification des champs
    if (!nom || !prenom || !mail || !conmail) {
      setError("Tous les champs ne sont pas complétés.");
      setErrorClass("text-rouge"); 
      return;

    } else if (mail !== conmail) {
      setError("Les adresses e-mail ne correspondent pas.");
      setErrorClass("text-rouge"); 
      return;

    } else {
      // Tous les champs sont bien remplis
      setError("Votre participation a bien été enregistrée. Bonne chance!");
      setErrorClass("text-black"); 
      console.log("Données du formulaire envoyées :", formData);
    }
  };

  return (
    <section>
      {/* info */}
      <div className="relative hidden md:block">
        <div className="border-2 border-black p-5 bg-bg md:absolute w-10/12  top-40">
          <p className="font-asap text-xl">
            Envie de découvrir l'incroyable exposition MULTITUDE, au mima?
            Participez à notre jeu-concours et tentez de remporter 2 tickets
            pour vivre une expérience unique ! Remplissez le formulaire de
            participation avant le 15 janvier.
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="border-2 border-black mt-7 w-full md:w-7/12">
          <h2 className="font-edu text-6xl text-center mb-10 sm:text-7xl md:mb-56">
            jeu concours
          </h2>

          {/* info */}
          <div className="mb-10 md:hidden">
            <div className="w-10/12 border-2 border-black p-5 bg-bg top-40">
              <p className="font-asap text-xl">
                Envie de découvrir l'incroyable exposition MULTITUDE, au mima?
                Participez à notre jeu-concours et tentez de remporter 2 tickets
                pour vivre une expérience unique ! Remplissez le formulaire de
                participation avant le 15 janvier.
              </p>
            </div>
          </div>

          <form>
            <div className="w-full flex flex-col justify-center items-center mb-20">
              <div className="flex w-full px-5 mb-4 md:px-24">
                <input
                  className="bg-bg p-1 font-asap text-lg h-input mr-2 w-1/2 border-2 border-black md:mr-3"
                  type="text"
                  placeholder="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={init}
                />
                <input
                  className="bg-bg p-1 font-asap text-lg h-input ml-2 w-1/2 border-2 border-black md:ml-3"
                  type="text"
                  placeholder="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={init}
                />
              </div>

              <div className="w-full px-5 md:px-24">
                <input
                  className="bg-bg p-1 font-asap w-full mb-4 text-lg h-input border-2 border-black"
                  type="email"
                  name="mail"
                  placeholder="email"
                  value={formData.mail}
                  onChange={init}
                />
                <input
                  className="bg-bg p-1 font-asap w-full mb-4 text-lg h-input border-2 border-black"
                  type="email"
                  name="conmail"
                  placeholder="confirmer l'email"
                  value={formData.conmail}
                  onChange={init}
                />
              </div>
            </div>

            {/* dtn et msg */}
            <div className="flex items-center">
              {/* btn */}
              <button
                onClick={submit}
                type="submit"
                className="w-2/6 px-3 py-2 border-2 border-black flex justify-center sm: cursor-pointer"
              >
                <span className="font-edu text-xl text-rouge cursor-pointer sm:text-3xl">
                  envoyer
                </span>
              </button>
              {/* msg error */}
              <p className={`font-asap text-lg ml-3 ${errorClass}`}>{error}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
