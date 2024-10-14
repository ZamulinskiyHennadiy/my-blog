import React from 'react';
import './Nav.css'; 

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Головна</a></li>
        <li><a href="#about">Про мене</a></li>
        <li><a href="#blog">Блог</a></li>
        <li><a href="#contact">Контакти</a></li>
      </ul>
    </nav>
  );
};

export default Nav;