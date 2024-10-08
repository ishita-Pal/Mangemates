import React from 'react'

import "./mainnn.css"
import {useEffect} from 'react'
import Navbar from "./componentsss/Navbar"
import Hiro from './componentsss/Hiro';
import Skills from './componentsss/Skills'
import Honors from './componentsss/Honors';
// import Certs from './components/Certs';
import Graph from './componentsss/Graph';
import Perc from './componentsss/Perc';
import Footer from './componentsss/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Mainn = () => {
    useEffect(() => {
        // document.title = 'Damasukma Trihanan';
        AOS.init();
      }, []);
    return (
      <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
        <Navbar />
        <Hiro />
        <Skills />
        <Honors />
        <Graph/>
        <Footer/>
      </div>
    );
  }

export default Mainn