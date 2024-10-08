import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./componentsss/Navbar";
import Hiro from './componentsss/Hiro';
import Skills from './componentsss/Skills';
import Honors from './componentsss/Honors';
import Graph from './componentsss/Graph';
import Footer from './componentsss/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Mainn = () => {
  const location = useLocation();
  const { employee } = location.state || {}; // Get employee data from location state

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
  
      <Navbar />
   
      <Hiro employee={employee} /> {/* Pass employee data to Hiro component */}
      <Skills />
      <Honors />
      <Graph />
      <Footer />
    </div>
  );
}

export default Mainn;
