import React from 'react'
import '../contactUs/ContactUs.css'
import Navbar from '../../components/navbar/Navbar'
import DetailContack from '../../components/detailContack/DetailContack'
import Footer from '../../components/footer/Footer'

function ContactUs() {
  return (
    <>
    <Navbar/>
    <section id='contack'>
      <div className="container-fluid py-5">
        <div className="container py-md-5 py-3">
          <div className="row justify-content-center">
            <div className="col-md-4 col-12">
              <h1>It's nice to <br /> meet ya</h1> <br />
              <p>Mari saling mengenal satu sama lain. Untuk pertanyaan umum, isi formulir untuk menghubungi. Atau, jika Anda mengetahui detail proyek Anda - kunjungi perencana proyek kami.</p>
            </div>
            <div className="col-md-6 col-12 offset-md-1">
            <form className='needs-validation" novalidate' id='contackForm'>
              {/* Name */}
              <label for="validationCustom01" class="form-label fw-bold pt-md-0 pt-3">Name</label>
              <input type="text" class="form-control" id="validationCustom01" required/>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please choose a username.</div>
             {/*   Email */}
              <label for="exampleInputEmail1" class="form-label fw-bold pt-3">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
              <div class="invalid-feedback">Please choose a username.</div>
              <div class="valid-feedback">Looks good!</div>
              {/* phone */}
              <label for="validationCustom01" class="form-label fw-bold pt-3">Name</label>
              <input type="text" class="form-control" id="validationCustom01" required/>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please choose a username.</div>
              {/* message */}
              <label for="exampleFormControlTextarea1" class="form-label fw-bold pt-3">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please choose a username.</div> <br />
              <button id="heroButton" className="my-3" type="submit">Send Message</button>
              </form>
            </div>
            {/* akhir row */}
          </div>
        </div>
      </div>
    </section>
    <DetailContack/>
    <Footer/>
    </>
  )
}

export default ContactUs

