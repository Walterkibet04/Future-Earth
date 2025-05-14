import React from 'react'
import Hero from '../components/Hero';
import HouseDesign from '../components/HouseDesign'
import BenefitsSection from '../components/BenefitsSection';
import Pathways from '../components/Pathways';
import Ongoing from '../components/Ongoing';
import Partners from '../components/Partners';
import Footer from '../components/Shared/Footer';
const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Hero />
      <HouseDesign />
      <BenefitsSection />
      <Pathways />
      <Ongoing />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home
