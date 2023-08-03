import React, { useState } from "react";
import Header from './components/Header.jsx';
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Date from "./components/Date.jsx";
import AboutUs from "./components/AboutUs.jsx";
import FindUs from "./components/FindUs.jsx";
import History from "./components/History.jsx";
import Menu from "./components/Menu.jsx";
import Food from "./components/Food.jsx";
import NavMobile from "./components/NavMobile.jsx";
import Footer from "./components/Footer.jsx";
import Xhero from "./components/Xhero.jsx";
import Awards from "./components/Awards.jsx";




function App() {
  const [navMobile, setNavMobile] = useState(true);
  return (
    <div>
      <Header setNavMobile={setNavMobile}/>
      <Hero />
      <Xhero />
      <Awards />
      {/* mobile nav */}
      <div className={`${navMobile ? 'right-0' : '-left-full'} absolute top-0 bottom-0 w-[340px] transition-all`}>
        <NavMobile setNavMobile={setNavMobile}/>
      </div>
      <About />
      <Date />
      <AboutUs />
      <FindUs />
      <History />
      <Menu />
      <Food />
      <Footer />
    </div>
  );
}

export default App;
