import React from 'react'
import '../login/Login.css'
// import LoginPict from '../../assets/Login/login.png'
import LoginPict from '../../assets/Home/hero-bg.png'

function Login() {
  return (
   <>
    <main id='loginPage' className="background d-flex min-vh-100 justify-content-center align-items-center"
        style={{backgroundColor: "#FFD365"}} >
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10 col-xl-8 shadow rounded-6">
                    <div className="form row justify-content-center py-md-0 py-5" style={{backgroundColor: 'white'}}>
                        <div className="text-center d-md-none">
                            <h4>Every New Knowledge is <span>a New Adventure</span></h4>
                            <p className="text-secondary mt-1 mb-2">Let's get connected</p>
                        </div>
                        <div className="col-lg-5 col-md-5 col-7 p-2 my-auto">
                            <img src={LoginPict} className="img-fluid w-100" alt="Logo Login"/>
                        </div>

                        <div className="col-lg-5 col-md-6 col-12 p-lg-5 px-4 pe-lg-2 py-md-5">
                            <div className="mb-4 d-none d-md-block">
                                <h4 className="">Every New Knowledge is <span>a New Adventure</span></h4>
                                <p className="text-secondary mt-1">Let's get connected</p>
                            </div>

                            <div className="d-none alert alert-warning alert-dismissible fade show" role="alert">
                                <span className="d-none">Wrong password</span>
                                <span className="d-none">Your email is not registered</span>
                                        <button type="button" className="btn-close"></button>
                            </div>

                            <form id="loginForm">
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <div className="input-group mb-1">
                                        <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-at"></i></span>
                                        <input type="email" className="form-control" placeholder="Enter your e-mail"
                                            id="email" autoComplete="off"/>
                                    </div>
                                    <small className="text-danger d-none">Please enter a valid email address</small> </div>
                                            <div className="mb-2">
                                            <label for="password" className="form-label">Password</label>
                                            <div className="input-group mb-1">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                                                <input type="password" className="form-control"
                                                    placeholder="Enter your password" id="password" autoComplete="off"/>
                                            </div>
                                            <small className="text-secondary">At least 8 character, number and
                                                alphabet</small>
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="showPassword"/>
                                    <label className="form-check-label" for="showPassword">Show password</label>
                                </div>

                                <div className="d-grid col-12 mt-md-4 mt-3">
                                    <button type="submit" className="btn" style={{backgroundColor: "#fdba12"}}>Login</button>
                                </div>
                            </form>

                            <div className="mt-4">
                                <p className=" mb-0">Don't have an account?<a href="register.html"
                                        className="text-primary text-decoration-none"> Register here</a></p>
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

export default Login