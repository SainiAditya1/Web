import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
