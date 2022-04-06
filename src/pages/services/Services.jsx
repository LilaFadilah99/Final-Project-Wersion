import React from 'react';
import '../../pages/services/Services.css'
import Navbar from '../../components/navbar/Navbar'
import Service1 from '../../assets/Service/service1.jpg'
import DetailContack from '../../components/detailContack/DetailContack';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom'


function Services() {
  let navigate = useNavigate();
  return (
    <>
    <Navbar/>
     {/* Title */}
     <section id='Title'>
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2>A digital marketing agency with expertise.</h2>
          </div>
        </div>
      </div>
    </div>
    </section>

    {/* Service Card */}
    <section id='serviceCard'>
    <div className="container-fluid">
      <div className="container">
        {/* Row 1 */}
        <div className="row text-start">
          {/* card 1 */}
          <div className="col-md-4 col-12 mt-2 px-md-5" >
          <button className='border-0 bg-transparent text-start' onClick={() => {navigate ('/detail');}}>
          <img src={Service1} alt="" className='img-fluid' />
          <h3 className='mt-5'>Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </button>    
          </div>
          {/* card 2 */}
          <div className="col-md-4 col-12 mt-2 px-md-5" >
          <button className='border-0 bg-transparent text-start' onClick={() => {navigate ('/detail');}}>
          <img src={Service1} alt="" className='img-fluid' />
          <h3 className='mt-5'>Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </button>    
          </div>
          {/* card 3 */}
          <div className="col-md-4 col-12 mt-2 px-md-5" >
          <button className='border-0 bg-transparent text-start' onClick={() => {navigate ('/detail');}}>
          <img src={Service1} alt="" className='img-fluid' />
          <h3 className='mt-5'>Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </button>    
          </div>
          {/* card 4 */}
          <div className="col-md-4 col-12 mt-2 px-md-5" >
          <button className='border-0 bg-transparent text-start' onClick={() => {navigate ('/detail');}}>
          <img src={Service1} alt="" className='img-fluid' />
          <h3 className='mt-5'>Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </button>    
          </div>
          {/* card 5 */}
          <div className="col-md-4 col-12 mt-2 px-md-5" >
          <button className='border-0 bg-transparent text-start' onClick={() => {navigate ('/detail');}}>
          <img src={Service1} alt="" className='img-fluid' />
          <h3 className='mt-5'>Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </button>    
          </div>
          {/* card 6 */}
          <div className="col-md-4 col-12 mt-2 px-md-5" >
          <button className='border-0 bg-transparent text-start' onClick={() => {navigate ('/detail');}}>
          <img src={Service1} alt="" className='img-fluid' />
          <h3 className='mt-5'>Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </button>    
          </div>
          {/* card 7 */}
          <div className="col-md-4 col-12 mt-2 px-md-5" >
          <button className='border-0 bg-transparent text-start' onClick={() => {navigate ('/detail');}}>
          <img src={Service1} alt="" className='img-fluid' />
          <h3 className='mt-5'>Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </button>    
          </div>
          {/* card 8 */}
          <div className="col-md-4 col-12 mt-2 px-md-5" >
          <button className='border-0 bg-transparent text-start' onClick={() => {navigate ('/detail');}}>
          <img src={Service1} alt="" className='img-fluid' />
          <h3 className='mt-5'>Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </button>    
          </div>
          {/* card 9 */}
          <div className="col-md-4 col-12 mt-2 px-md-5" >
          <button className='border-0 bg-transparent text-start' onClick={() => {navigate ('/detail');}}>
          <img src={Service1} alt="" className='img-fluid' />
          <h3 className='mt-5'>Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </button>    
          </div>
          
        </div>
      </div>
    </div>
    </section>
    <DetailContack/>
    <Footer/>
    </>
  );
}
export default Services;
