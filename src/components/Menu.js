import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={isOpen ? 'menu-items open' : 'menu-items'}>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">What We Offer</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
