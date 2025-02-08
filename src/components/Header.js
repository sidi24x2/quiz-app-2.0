import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container flex">
        <h1>App Name</h1>
        <nav>
          <a href="/">Home</a>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
