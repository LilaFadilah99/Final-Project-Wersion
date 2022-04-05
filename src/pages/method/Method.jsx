import React from 'react'
import './Method.css'
import Navbar from '../../components/navbar/Navbar'
import Trusted from '../../assets/Home/trusted.png'
import Footer from '../../components/footer/Footer'
import DetailContack from '../../components/detailContack/DetailContack'

function Method() {
  return (
    <>
    <Navbar/>

   {/* Stage 1 */}
   <section id="stage1" className="banner_wrapper">
      <div className="container-fluid pt-md-5 pt-3">
        <div className="container">
          <div className="row flex-md-row-reverse align-items-center">
            <div className="col-md-6">
              <img src={Trusted} alt="banner" className="img-fluid" />
            </div>
            <div className="col-md-6 my-5 my-md-0 text-start text-md-start" id="heroDescription">
              <p>Stage 1</p>
              <h2>References</h2>
              <p>
              Shape akan mengirimkan referensi web klien untuk memberikan gambaran arah sehingga kedua belah pihak berada di halaman yang sama dalam hal gaya.
           </p> <br />
              <a href=""><button id="methodButton1" className="my-3">Next Step</button></a>  
            </div>
          </div>
        </div>
      </div>
    </section>
   {/* Stage 2 */}
   <section id="stage2" className="banner_wrapper">
      <div className="container-fluid">
        <div className="container">
          <div className="row flex-md-row-reverse align-items-center">
            <div className="col-md-6">
              <img src={Trusted} alt="banner" className="img-fluid" />
            </div>
            <div className="col-md-6 my-5 my-md-0 text-start text-md-start" id="heroDescription">
              <p>Stage 2</p>
              <h2>Design</h2>
              <p>
              Setelah klien puas dengan arah proyek, Shape kemudian akan mulai merancang konsep berdasarkan referensi tersebut.
           </p> <br />
              <a href=""><button id="methodButton2" className="my-3">Next Step</button></a>  
            </div>
          </div>
        </div>
      </div>
    </section>
         {/* Stage 3 */}
   <section id="stage3" className="banner_wrapper">
      <div className="container-fluid">
        <div className="container">
          <div className="row flex-md-row-reverse align-items-center">
            <div className="col-md-6">
              <img src={Trusted} alt="banner" className="img-fluid" />
            </div>
            <div className="col-md-6 my-5 my-md-0 text-start text-md-start" id="heroDescription">
              <p>Stage 3</p>
              <h2>
                Development
              </h2>
              <p>
              Setelah desain ditandatangani oleh klien, Shape kemudian akan mulai membangun front-endsitus web kemudian membungkusnya di sekitar  CMS.
           </p> <br />
              <a href=""><button id="methodButton3" className="my-3">Start a project</button></a>  
            </div>
          </div>
        </div>
      </div>
    </section>
     {/* Stage 4 */}
   <section id="stage4" className="banner_wrapper">
      <div className="container-fluid">
        <div className="container">
          <div className="row flex-md-row-reverse align-items-center">
            <div className="col-md-6">
              <img src={Trusted} alt="banner" className="img-fluid" />
            </div>
            <div className="col-md-6 my-5 my-md-0 text-start text-md-start" id="heroDescription">
              <p>Stage 4</p>
              <h2>Content</h2>
              <p>
              Setelah situs web dibuat, sekarang siap untuk memasukkan konten.
           </p> <br />
              <a href=""><button id="methodButton4" className="my-3">Start a project</button></a>  
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Stage 5 */}
   <section id="stage5" className="banner_wrapper">
      <div className="container-fluid">
        <div className="container">
          <div className="row flex-md-row-reverse align-items-center">
            <div className="col-md-6">
              <img src={Trusted} alt="banner" className="img-fluid" />
            </div>
            <div className="col-md-6 my-5 my-md-0 text-start text-md-start" id="heroDescription">
              <p>Stage 5</p>
              <h2>Testing</h2>
              <p>
              Setelah semua konten dimasukkan, Wersion kemudian akan melakukan serangkaian tes terakhir dan melakukan debug pada berbagai browser untuk kompatibilitas sebelum diluncurkan.
           </p> <br />
              <a href=""><button id="methodButton5" className="my-3">Next Step</button></a>  
            </div>
          </div>
        </div>
      </div>
    </section>

   <DetailContack/>
    <Footer/>
    </>
  )
}

export default Method