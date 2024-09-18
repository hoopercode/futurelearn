import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu /> {/* Sticky Menu */}
      <Header />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
