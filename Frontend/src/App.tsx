import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Skills } from './sections/Skills/Skills';
import { Projects } from './sections/Projects/Projects';
import { Experience } from './sections/Experience/Experience';
import { Achievements } from './sections/Achievements/Achievements';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './components/Footer/Footer';



const App: React.FC = () => {
  return (
    <>
      {/* navbar component */}
      <Navbar />

      {/* main */}
      <main>
        {/* Hero Component */}
        <Hero />

        {/* About Component */}
        <About />

        {/* Detailed Skills Grid */}
        <Skills />

        {/* Projects Cards */}
        <Projects />

        {/* Experience  */}
        <Experience />

        {/* Achievements */}
        <Achievements />


        {/* contact form */}
        <Contact />
      </main>

      {/* Footer  */}
      <Footer />
    </>
  );
}

export default App;
