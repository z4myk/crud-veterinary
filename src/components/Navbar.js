import React from "react";
import { Link } from "react-router-dom"
import logo from '../img/logo.png'
import "../App.css";
import { useAuth0 } from '@auth0/auth0-react';

export const Navbar = (props) => {
  const {logout} = useAuth0();
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <Link className="navbar-brand lead" to="/" ><img className="logo" src={logo} alt="Logo Veterinaria" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link menu" to="/admin">Administracion</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link menu" to="/turnos">Turnos</Link>
        </li>
        <li className="nav-item">
        <p className="nav-link menu text-danger" onClick={() => logout()}>Salir</p>
        </li>



      </ul>
    </div>
  </div>
</nav>
    </>
  );
};
