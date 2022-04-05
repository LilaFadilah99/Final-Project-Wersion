import React from 'react'
import '../thankYou/ThankYou.css'
import Navbar from '../../components/navbar/Navbar'
import DetailContack from '../../components/detailContack/DetailContack'

function thankYou() {
  return (
    <>
    <Navbar/>
       {/* Title */}
       <section id='Title'>
    <div className="container-fluid py-md-5 py-3">
      <div className="container mt-5">
        <div className="row text-start">
          <div className="col-12">
            <h1>Thanks for getting in touch.</h1>
          </div>
        </div>
        <div className="row py-5">
            <div className="col-md-6 col-12">
                <h3>Sekedar catatan singkat, kami telah menerima email Anda dan akan menghubungi Anda sesegera mungkin.</h3>
            </div>
            <div className="col-md-6 col-12 mt-md-0 mt-3">
                <p>Sementara itu mengapa Anda tidak mengecek media sosial kami dan testimonial klien kami yang sebenarnya untuk menunjukkan mengapa merek memilih untuk bekerja sama dengan kami. Atau kunjungi halaman tim kami untuk melihat wajah di balik email.</p>
            </div>
        </div>
      </div>
    </div>
    </section>
    <DetailContack/>
    </>
  )
}

export default thankYou