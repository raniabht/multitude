import React from 'react';

import Bannier from '../Util/Bannier';
import Header from '../Util/header';

import Nav from '../Util/Nav';
import Footer from '../Util/Footer';
import Form from './Form'




function Concours() {
  return (
    <>
    <Bannier />
    <Header />
    <div className='activec'>
    <Nav /></div>
    <Form />

    <Footer />

    </>
  );
}

export default Concours;