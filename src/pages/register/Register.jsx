import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../register/Register.css'
import LoginPict from '../../assets/Home/hero-bg.png'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Register() {
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate()
  const [value, setValue] = useState({
    email: "",
    name: "",
    password: ""
  })

  function handleInput(event){
    setValue({
      ...value, 
      [event.target.name] : event.target.value
    })
  }

  async function handleRegister(event) {
    event.preventDefault()
    fetch('https://pickled-capricious-beak.glitch.me/users', 
    {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    })
    .then(response => response.json())
    .then(data => {
      MySwal.fire({
        title: <strong>Register Berhasil</strong>,
        html: <i>{data.email}</i>,
        icon: 'success'
      }).then(() => {
        localStorage.setItem('userLogin', JSON.stringify(data))
        navigate('/products')
        return
      })
      // MySwal.fire({
      //   title: <p>Hello World</p>,
      //   footer: 'Copyright 2018',
      //   didOpen: () => {
      //     // `MySwal` is a subclass of `Swal`
      //     //   with all the same instance & static methods
      //     MySwal.clickConfirm()
      //   }
      // }).then(() => {
      //   MySwal.fire(<p>Shorthand works too</p>)
      //   localStorage.setItem('userLogin', value.email)
      //   navigate('/')
      //   return
      // })
    })
    .catch(err => console.log(err))
  }
// useEffect(() => {
//   console.log(value)
// },[value])

  return (
    <>
    <main className="d-flex min-vh-100 justify-content-center align-items-center" style={{backgroundColor: "#FFD365"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12 col-xl-10 shadow rounded-6">
            <div className="form row justify-content-center py-md-0 py-5" style={{backgroundColor: "white"}}>
              <div className="text-center d-md-none">
                <h4>Complete Your Knowledge <span>by Reading Wersion</span></h4>
                <p className="text-secondary mt-1">Let's get started</p>
              </div>
              <div className="col-lg-5 col-md-5 col-7 p-2 my-auto">
                <img src={LoginPict} className="img-fluid w-100" alt="Signup Logo" />
              </div>

              <div className="col-lg-6 col-md-6 col-12 p-lg-5 px-4 pe-md-2 py-md-5">
                <div className="mb-4 d-none d-md-block">
                  <h4>Complete Your Knowledge by<span> Reading Wesion</span></h4>
                  <p className="text-secondary mt-1">Let's get started</p>
                </div>

                <div className="d-none alert alert-warning alert-dismissible fade show" role="alert">
                  This email is already registered, please login
                  <button type="button" className="btn-close"></button>
                </div>

                <form id="registForm" onSubmit= {handleRegister}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1"><i className="far fa-user"></i></span>
                      <input type="text" value={value.name} onChange={handleInput} name='name' className="form-control" placeholder="Enter your name" id="name" autoComplete="off" />
                    </div>
                    <small className="text-danger d-none">Please input your name</small>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-at"></i></span>
                      <input type="email" value={value.email} onChange={handleInput} name='email' className="form-control" placeholder="Enter your email" id="email" autoComplete="off" />
                    </div>
                    <small className="text-danger d-none">Please enter a valid e-mail</small>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                      <input type="password" value={value.password} onChange={handleInput} name='password' className="form-control" placeholder="Enter your password" id="password" autoComplete="off" />
                    </div>
                    <small className="text-secondary">At least 8 character, number and alphabet</small>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="showPassword" />
                    <label className="form-check-label" htmlFor="showPassword">Show password</label>
                  </div>

                  <div className="d-grid col-12 mt-md-4 mt-4">
                    <button type="submit" className="btn"  style={{backgroundColor: "#fdba12"}}>Sign Up</button>
                  </div>
                </form>

                <div className="mt-4">
                  <p className="mb-0">Already have an account? <Link to="/login" className="text-primary text-decoration-none">Login</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Register