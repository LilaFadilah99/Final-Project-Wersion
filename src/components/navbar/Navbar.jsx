import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Navbar() {
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate()
  const [islogin, setIslogin] = useState(false)

  const handleLogout = () => {
    MySwal.fire({
      title: <strong>Berhasil Logout</strong>,
      html: <i>Terima kasih .....</i>,
      icon: 'success'
  }).then(() => {
      localStorage.clear();
      setIslogin(false)
      navigate('/')
      return
  })
  };

  const checkLogin = () => {
    const loggedInUser = localStorage.getItem("userLogin");
    if(loggedInUser) {
      setIslogin(true)
    }
  }

  useEffect(() => {
    checkLogin()
  },[])

    return (
      
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light  shadow-sm">
      <div className="container">
        <img src={logo} alt="" width="50" />
        <Link className="navbar-brand ms-2" to="/">Wersion</Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span ><i className="fa-solid fa-bars"></i></span>
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

          {
            islogin ? <>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button id="navLogout" className="my-3" onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </>
          : <><ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-3">
                      <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
                    </li>
                  </ul><ul className="navbar-nav ">
                      <li className="nav-item">
                        <Link to="/login"><button id="navButton" className="my-3">Login</button></Link>
                      </li>
                  </ul></>
          }
          
        </div>
      </div>
    </nav>
        </>
    )
}

export default Navbar;