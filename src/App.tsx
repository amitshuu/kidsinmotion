import React, { lazy, Suspense } from 'react';
import AboutUs from './components/AboutUs';
import LifeSkills from './components/LifeSkills';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurActivities from './components/OurActivities';
import OurTeachers from './components/OurTeachers';
import Gallery from './components/Gallery';
import OurCustomers from './components/OurCustomers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <main className='section-center'>
        <Navbar />
        <Hero />
        <AboutUs />
        <OurActivities />
        <LifeSkills />
        <OurTeachers />
        <Gallery />
        <OurCustomers />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default App;
