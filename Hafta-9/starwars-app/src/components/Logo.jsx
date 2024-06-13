import React from 'react';
import logo from '../assets/Star_Wars_Logo.png';

function Logo() {
  return (
    <div className="flex justify-center my-4">
      <img src={logo} alt="Star Wars Logo" className="h-16" />
    </div>
  );
}

export default Logo;
