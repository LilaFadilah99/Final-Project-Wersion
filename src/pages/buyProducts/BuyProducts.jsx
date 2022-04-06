import React from 'react'
import './BuyProducts.css'
import Navbar from '../../components/navbar/Navbar'
import DetailContack from '../../components/detailContack/DetailContack'
import { useNavigate } from 'react-router-dom'

function BuyProducts() {
    let navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <section id='buyProducts'>
      <div className="container-fluid py-5">
        <div className="container py-md-5 py-3">
          <div className="row justify-content-center">
            <div className="col-md-4 col-12">
              <h1>Isi Data Diri & Detail Pesanan Anda</h1> <br />
              <p>Setelah melakukan pemesanan, tim kami akan menerima email anda dan menghubungi anda kembali untuk berduskusi terkait detail projek dalam waktu 1x24 jam. Pastikan data diri anda terisi dengan benar</p>
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
              <label for="validationCustom01" class="form-label fw-bold pt-3">Phone</label>
              <input type="text" class="form-control" id="validationCustom01" required/>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please choose a username.</div>
              {/* message */}
              <label for="exampleFormControlTextarea1" class="form-label fw-bold pt-3">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please choose a username.</div> <br />
              <button id="heroButton" className="my-3" type="submit" onClick={() => {
                  navigate ('/thanks');
                }}>Send Message</button>
              </form>
            </div>
            {/* akhir row */}
          </div>
        </div>
      </div>
    </section>
    <DetailContack/>
    </>
  )
}

export default BuyProducts