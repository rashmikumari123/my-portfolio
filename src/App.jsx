import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Project from './components/Projects/Project.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App