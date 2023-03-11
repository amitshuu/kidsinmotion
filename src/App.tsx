import React, { lazy, Suspense } from 'react';
import AboutUs from './components/AboutUs';
import LifeSkills from './components/LifeSkills';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurActivities from './components/OurActivities';
import OurTeachers from './components/OurTeachers';
const Gallery = lazy(() => import('./components/Gallery'));

const App = () => {
  return (
    <main className='section-center'>
      <Navbar />
      <Hero />
      <AboutUs />
      <LifeSkills />
      <OurActivities />
      <OurTeachers />

      <Gallery />
    </main>
  );
};

export default App;
