import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import COMPANY from './constants';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero phoneNumber={COMPANY.phone} />
      <Services />
      <About />
      <Contact phoneNumber={COMPANY.phone} phoneFormatted={COMPANY.phoneFormatted} />
      <Footer />
      <FloatingButton phoneNumber={COMPANY.phone} />
    </div>
  );
}

export default App;
