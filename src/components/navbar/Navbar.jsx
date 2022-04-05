import React from "react";
import logo from "../../assets/logo.png"
import './Navbar.css';

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light  shadow-sm">
      <div className="container">
        <img src={logo} alt="" width="50" />
        <a className="navbar-brand ms-2" href="#">Wersion</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-5">
            <li className="nav-item mx-2">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Method</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">Register</a>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a href=""><button id="navButton" className="my-3">Login</button></a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
        </>
    )
}

export default Navbar;