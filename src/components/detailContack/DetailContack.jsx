import React from 'react'
import '../../components/detailContack/DetailContack.css'

function DetailContack() {
  return (
    <>
    {/* Detail Contack */}
    <section id='detailContack'>
    <div className="container-fluid py-5" style={{backgroundColor: "#25262b"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 col-12">
            <h2 style={{color: "#fdba12"}}>Contact our team of web design experts today</h2>
            <p className='text-white'>Atur panggilan dengan tim kami atau jika Anda lebih suka mengirim email, hubungi kami di</p>
            <p style={{color: "#fdba12"}}>@Wersion.co.id</p>
          </div>
          <div className="col-md-6 col-12 ms-md-5">
            <div className="row">
            <h2 style={{color: "#fdba12"}}>Call Us</h2>
            <p className='text-white'>Tim kami bekerja secara Remote silakan kirim email kepada kami.</p>
            </div>
            <div className="row mt-2">
            <h2 style={{color: "#fdba12"}}>WhatsApp Us</h2>
            <p className='text-white'>+62 65386850</p>
            </div>
            <div className="row mt-2">
            <h2 style={{color: "#fdba12"}}>Find Us</h2>
            <p  className='text-white'>Jl. Lintas Sumbawa No. 12A Sumbawa Besar 83371 - Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default DetailContack