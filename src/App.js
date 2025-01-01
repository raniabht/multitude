
import React from 'react';
import './App.css';

import Header from './components/Util/header';
import Footer from './components/Util/Footer';
import Error from './components/Util/Error'

import Concours from './components/Concours/Concours'
import Galrie from './components/Galrie/Galrie'

import Accueil from './components/Accueil/Accueil';
// import Accueil from './Accueil/Accueil';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     
      <Route index element={<Accueil />}/>
      {/* path= le chemin url element fichier */}
      <Route path="/accueil" element={<Accueil/>}/>
      <Route path="/galrie" element={<Galrie/>}/>
      <Route path="/concours" element={<Concours/>}/>

      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Accueil /> */}
    {/* <Header />
    <Nav />
    <Collage />
    <Info />
    <Art />
    <Footer /> */}
    </>
  );
}

export default App;
