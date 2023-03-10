import React from 'react';
import AboutUs from './components/AboutUs';
import AboutUs2 from './components/AboutUs2';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='section-center'>
      <Navbar />
      <Hero />
      <AboutUs />
      <AboutUs2 />
    </div>
  );
};

export default App;
