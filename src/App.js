import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Popup from './components/Popup';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurAchievements from './components/OurAchievements';
import OurPlanet from './components/OurPlanet';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import SocialMediaSidebar from './components/SocialMediaSidebar';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [popupStep, setPopupStep] = useState(1);

  const handlePopupSubmit = (details) => {
    console.log('User Details:', details);
    setShowPopup(false);
  };

  const handleDoItLater = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <Navbar />
      {showPopup && (
        <Popup
          step={popupStep}
          onSubmit={handlePopupSubmit}
          onClose={() => setShowPopup(false)}
          onDoItLater={handleDoItLater}
        />
      )}
      <Home />
      <AboutUs />
      <OurAchievements />
      <OurPlanet />
      <Testimonials />
      <ContactUs />
      <SocialMediaSidebar />
    </div>
  );
}

export default App;