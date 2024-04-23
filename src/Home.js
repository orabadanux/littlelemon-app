import React from 'react';
import HeroSection from './HeroSection';
import WeekSpecials from './WeekSpecials';
import GuestsVoices from './GuestsVoices';
import OurStory from './OurStory';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <HeroSection />
      <WeekSpecials />
      <GuestsVoices />
      <OurStory />
      <Footer />
    </div>
  );
}

export default Home;