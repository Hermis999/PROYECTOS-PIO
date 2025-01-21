import React from 'react';
import logo from '../assets/img/juego.png';
const Header = () => (
  <header className="bg-primary text-white text-center py-3">
    <img src={logo} alt="Logo" width="50" className="d-inline-block" />
    <h1>Mis Pokemons</h1>
  </header>
);
export default Header;

