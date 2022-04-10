import React, {useState, useEffect} from 'react';
import '../../pages/services/Services.css'
import Navbar from '../../components/navbar/Navbar'
// import Service1 from '../../assets/Service/service1.jpg'
import DetailContack from '../../components/detailContack/DetailContack';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom'


function Services() {
  const [services, setServices] = useState([])
  const [query, setQuery] = useState("");
  
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
    {/* Search Bar */}
    <section id='seacrhBar'>
      <div className="container-fluid pt-5 pb-3">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-4 col-12">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setQuery(e.target.value)} style={{borderRadius: '30px'}}/>
             <h5><i className="fa-solid fa-magnifying-glass pt-2"></i></h5>
            </form>
      
            </div>
          </div>
        </div>
      </div>
    </section>

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
            services.filter(services=>services.title.toString().toLowerCase().includes(query)).map(services => {
              return <div className="col-md-4 col-12 mt-2 px-md-5 column-1" key={services.id} >
              <button className='border-0 bg-transparent text-start' onClick={() => {navigate (`/detail/${services.id}`);}}>
                <div className="inner">
                <img src={services.image} alt="" className='img-fluid' />
                </div>
              
              <h3 className='mt-5'>{services.title}</h3>
              <p>{services.keterangan}</p>
              </button>    
              </div>
            })
          }
        </div>
      </div>
    </div>
    </section>
    <br />
    <DetailContack/>
    <Footer/>
    </>
  );
}
export default Services;
