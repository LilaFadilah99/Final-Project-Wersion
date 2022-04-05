import React from 'react'
import Logo from '../../assets/logo.png'
import '../footer/Footer.css'
import greatPict from '../../assets/Home/greatPict.png'

function Footer() {
  return (
    <>
         {/* Make Great */}
         <section id="makeGreat" className="about_wrapper">
      <div className="container-fluid py-md-5" style={{backgroundColor: "#f3f6f9"}}>
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 col-sm-12 mb-4 mb-md-0">
              <img src={greatPict} className="img-fluid rounded mx-auto d-block me-5" alt="#" style={{width: "400px"}}/>
            </div>
            <div className="col-md-6 col-sm-12 ps-md-5 text-md-start mb-md-5 mt-">
              <h2>Let's make <br/> something great <br/> together.</h2>
              <p>Memulai pengalaman menjelajah bersama Wersion</p>
              <a href=""><button id="greatButton" className="my-3">Start a project</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* End Make Great */}
         {/* Ready */}
         <section id="startBusiness">
      <div className="container-fluid py-md-5" style={{backgroundColor: "#fdba12"}}>
        <div className="container">
          <div className="row text-center">
            <div className="col pt-5">
              <br/>
              <h2>Ready To Start Your Business With Us?</h2>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fdba12" fillOpacity="1" d="M0,96L120,85.3C240,75,480,53,720,58.7C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </section>
      {/* End Ready */}
     {/* Footer */}
     <section id="footer2">
        <div className="container-fluid" style={{marginTop: "-150px"}}>
          <div className="container">
          <div className="row  justify-content-center" id="footerLogo">
        <div className="col-md-2 col-12">
          <div className="row">
            <div className="col-md-12 col-6 mb-md-3">
              <img src={Logo} alt=""/>
            </div>
            <div className="col-md-12 col-6">
              <p>Web <br/> Design <br/>Agency</p>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <p className="font-weight-bold">Services</p>
          <a href="">Web Design</a> <br/>
          <a href="">Web Development</a> <br/>
          <a href="">Web Hosting</a> <br/>
          <a href="">SEO</a> <br/>
          <a href="">Check All Products</a>
        </div>
        <div className="col-md-2 col-6">
          <p className="font-weight-bold">Services</p>
          <a href="">Web Design</a> <br/>
          <a href="">Web Development</a> <br/>
          <a href="">Web Hosting</a> <br/>
          <a href="">SEO</a> <br/>
          <a href="">Check All Products</a>
        </div>
        <div className="col-md-2 col-6 mt-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
          <p className="font-weight-bold">Services</p>
          <a href="">Web Design</a> <br/>
          <a href="">Web Development</a> <br/>
          <a href="">Web Hosting</a> <br/>
          <a href="">SEO</a> <br/>
          <a href="">Check All Products</a>
        </div>
        <div className="col-md-2 col-6 mt-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
          <p className="font-weight-bold">Services</p>
          <a href="">Web Design</a> <br/>
          <a href="">Web Development</a> <br/>
          <a href="">Web Hosting</a> <br/>
          <a href="">SEO</a> <br/>
          <a href="">Check All Products</a>
        </div>
          </div>
          <div className="row text-center py-5" id="socialMedia">
            <div className="col-12">
              <a href=""><i className="fa-brands fa-instagram"></i>&emsp;</a>
              <a href=""><i className="fa-brands fa-linkedin"></i>&emsp;</a>
              <a href=""><i className="fa-brands fa-twitter"></i>&emsp;</a>
            </div>
          </div>
          <div className="row">
            <hr style={{width: "100%",
          height: "2px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#CCD1E4",
          border:" 0 none"}}/>
          </div>
          <div className="row">
            <div className="col-12">
              <p style={{color: "#8D8DAA", fontSize: "13px"}}>© Hak Cipta 2022  Wersion Digital Agency - Semua Hak Dilindungi</p>
            </div>
          </div>
            </div>
          </div>
      </section>
      {/* End Footer */}
    </>
  )
}

export default Footer