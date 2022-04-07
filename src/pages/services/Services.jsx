import React, {useState, useEffect} from 'react';
import '../../pages/services/Services.css'
import Navbar from '../../components/navbar/Navbar'
import Service1 from '../../assets/Service/service1.jpg'
import DetailContack from '../../components/detailContack/DetailContack';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom'


function Services() {
  const [services, setServices] = useState([])
  async function fetchServices() {
    fetch('https://pickled-capricious-beak.glitch.me/product-description')
    .then(response => response.json())
    .then(data => setServices(data))
    .catch(err => console.log(err))
  }
   useEffect(() => {
     fetchServices()
   },[])
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
          {
            services.map(services => {
              return <div className="col-md-4 col-12 mt-2 px-md-5" key={services.id} >
              <button className='border-0 bg-transparent text-start' onClick={() => {navigate ('/detail');}}>
              <img src={services.image} alt="" className='img-fluid' />
              <h3 className='mt-5'>{services.title}</h3>
              <p>{services.description}</p>
              </button>    
              </div>
            })
          }
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
