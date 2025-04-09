// src/components/HomePage.jsx
import { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { languageData } from '../data/LanguageData';

export default function HomePage() {
  const [language, setLanguage] = useState('ko');
  
  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };
  
  // 현재 언어에 맞는 텍스트 데이터
  const t = languageData[language];
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar 
        t={t} 
        toggleLanguage={toggleLanguage} 
      />
      <HeroSection t={t} />
      <FeaturesSection t={t} />
      <AboutSection t={t} />
      <ContactSection t={t} />
      <Footer />
    </div>
  );
}