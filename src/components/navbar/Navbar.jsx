import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import './Navbar.css';

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light  shadow-sm">
      <div className="container">
        <img src={logo} alt="" width="50" />
        <Link className="navbar-brand ms-2" to="/">Wersion</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-5">
            <li className="nav-item mx-2">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/method">Method</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/login"><button id="navButton" className="my-3">Login</button></Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
        </>
    )
}

export default Navbar;