import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => (

    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">Inicio</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/somos">Somos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Productos</Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Perfil</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>

);

export default Navbar;
