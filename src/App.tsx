import React from 'react';
import AboutUs from './components/AboutUs';
import LifeSkills from './components/LifeSkills';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='section-center'>
      <Navbar />
      <Hero />
      <AboutUs />
      <LifeSkills />
    </div>
  );
};

export default App;
