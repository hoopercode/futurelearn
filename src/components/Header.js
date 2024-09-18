import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>FutureLearn Partners</h1>
        <p>Partnering with schools to shape the future of learning through innovation, technology, and professional development.</p>
        <a href="#services" className="btn">Explore Our Services</a>
      </div>
    </header>
  );
}

export default Header;
