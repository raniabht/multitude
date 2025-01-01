import './App.css';

import Footer from './Accueil/Footer';
import Art from './Accueil/Art';
import Nav from './Accueil/Nav';
import Info from './Accueil/info';
import Collage from './Accueil/Collage';
import reportWebVitals from './reportWebVitals';
import Header from './Accueil/header';

function App() {
  return (
    <>
    {/* <Accueil /> */}
    <Header />
    <Nav />
    <Collage />
    <Info />
    <Art />
    <Footer />
    </>
  );
}

export default App;
