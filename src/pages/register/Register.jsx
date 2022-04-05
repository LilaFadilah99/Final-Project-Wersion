import React from 'react'
import '../register/Register.css'
import LoginPict from '../../assets/Home/hero-bg.png'

function Register() {
  return (
    <>
    <main class="d-flex min-vh-100 justify-content-center align-items-center" style={{backgroundColor: "#FFD365"}}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-12 col-xl-10 shadow rounded-6">
            <div class="form row justify-content-center py-md-0 py-5" style={{backgroundColor: "white"}}>
              <div class="text-center d-md-none">
                <h4>Complete Your Knowledge <span>by Reading Wersion</span></h4>
                <p class="text-secondary mt-1">Let's get started</p>
              </div>
              <div class="col-lg-5 col-md-5 col-7 p-2 my-auto">
                <img src={LoginPict} class="img-fluid w-100" alt="Signup Logo" />
              </div>

              <div class="col-lg-6 col-md-6 col-12 p-lg-5 px-4 pe-md-2 py-md-5">
                <div class="mb-4 d-none d-md-block">
                  <h4>Complete Your Knowledge by<span> Reading Wesion</span></h4>
                  <p class="text-secondary mt-1">Let's get started</p>
                </div>

                <div class="d-none alert alert-warning alert-dismissible fade show" role="alert">
                  This email is already registered, please login
                  <button type="button" class="btn-close"></button>
                </div>

                <form id="registForm">
                  <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1"><i class="far fa-user"></i></span>
                      <input type="text" class="form-control" placeholder="Enter your name" id="name" autocomplete="off" />
                    </div>
                    <small class="text-danger d-none">Please input your name</small>
                  </div>

                  <div class="mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-at"></i></span>
                      <input type="email" class="form-control" placeholder="Enter your email" id="email" autocomplete="off" />
                    </div>
                    <small class="text-danger d-none">Please enter a valid e-mail</small>
                  </div>

                  <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                      <input type="password" class="form-control" placeholder="Enter your password" id="password" autocomplete="off" />
                    </div>
                    <small class="text-secondary">At least 8 character, number and alphabet</small>
                  </div>

                  <div class="mb-3">
                    <label for="konfirmasiPassword" class="form-label">Confirm Password</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                      <input type="password" class="form-control" placeholder="Enter your password" id="konfirmasiPassword" autocomplete="off" />
                    </div>
                    <small class="text-danger d-none">Passwords do not match</small>
                  </div>

                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="showPassword" />
                    <label class="form-check-label" for="showPassword">Show password</label>
                  </div>

                  <div class="d-grid col-12 mt-md-4 mt-4">
                    <button type="submit" class="btn">Sign Up</button>
                  </div>
                </form>

                <div class="mt-4">
                  <p class="mb-0">Already have an account? <a href="./login.html" class="text-primary text-decoration-none">Login</a></p>
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