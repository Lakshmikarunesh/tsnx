import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio/Portfolio';
import Team from './components/Team/Team';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Team />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;