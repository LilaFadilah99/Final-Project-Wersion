import React, { useEffect} from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { fetchWhyJoinUs } from '../../store/actions/users';
import './Home.css';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';
import HeroBg from "../../assets/Home/hero-bg.png"
import Redsbaby from '../../assets/Home/Redsbaby.png'
import oriflame from '../../assets/Home/oriflame.png'
import zara from '../../assets/Home/zara.png'
import LG from '../../assets/Home/LG.png'
import About from '../../assets/Home/aboutUs.png'
import Trusted from '../../assets/Home/trusted.png'
// import Service1 from '../../assets/Home/service1.png'
// import Service2 from '../../assets/Home/service2.png'
// import Service3 from '../../assets/Home/service3.png'
// import Service4 from '../../assets/Home/service4.png'
import Busines1 from '../../assets/Home/bisnis-1.png'
import Busines2 from '../../assets/Home/bisnis-2.png'
import Busines3 from '../../assets/Home/bisnis-3.png'
import BusinesCard from '../../assets/Home/businesCard.jpg'
import WebPict from '../../assets/Home/web (1).png'
import Detail1 from '../../assets/Home/detail-1.png'
import Detail2 from '../../assets/Home/detail-2.png'
import Detail3 from '../../assets/Home/detail-3.png'
// import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import Profil1 from '../../assets/Home/profil1.png'
import Profil2 from '../../assets/Home/profil2.png'
import Profil3 from '../../assets/Home/profil3.png'
import brand1 from '../../assets/Home/lenovo.png'
import brand2 from '../../assets/Home/reebok.png'
import DetailContack from '../../components/detailContack/DetailContack';


function Home() {
  // const [whyJoinUs, setWhyJoinUs] = useState([])
  // async function fetchWhyJoinUs() {
  //   fetch('https://pickled-capricious-beak.glitch.me/join')
  //   .then(response => response.json())
  //   .then(data => setWhyJoinUs(data))
  //   .catch(err => console.log(err))
  // }

  const dispatch = useDispatch()
  const { whyJoinUs } = useSelector(state => state.userReducer)

  useEffect(() => {
    dispatch (fetchWhyJoinUs())
  },[dispatch])

  let navigate = useNavigate();
  return (
    <>
      <Navbar/>

      {/* Hero */}
      <section id="home" className="banner_wrapper">
      <div className="container-fluid">
        <div className="container">
          <div className="row flex-md-row-reverse">
            <div className="col-md-6">
              <img src={HeroBg} alt="banner" className="img-fluid" />
            </div>
            <div className="col-md-6 my-5 my-md-0 text-start text-md-start" id="heroDescription">
              <br/><br/><br/>
              <h1>
                Web Design Agency <br />
  
                In Indonesia
              </h1>
              <h5>
                Saatnya beralih ke strategi pemasaran terkini di internet! <br />
                Meningkatkan bisnis, popularitas dan kepercayaan melalui media sosial
              </h5>
             <button id="heroButton" className="my-3" onClick={() => {
                navigate ('/services');
              }}>Start a project</button>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* End Hero */}

      {/* Brand connection */}
      <div className="container py-5">
    <div className="row">
      <div className="col-12 text-center mb-2">
        <h4 className="fw-bold">Trusted by 28,000+ businesses</h4>
      </div>
    </div>
  </div>
<section id="brand" className="container d-flex justify-content-center">
  <div className="row " id="imageBrand">
    <img src={Redsbaby} alt="brand" className="img-fluid col-lg-2 col-md-4 col-4 py-5 pt-lg-0"/>
    <img src={brand1} alt="brand" className="img-fluid col-lg-2 col-md-4 col-4 py-5 pt-lg-0"/>
    <img src={brand2} alt="brand" className="img-fluid col-lg-2 col-md-4 col-4 py-5 pt-lg-0"/>
    <img src={LG} alt="brand" className="img-fluid col-lg-2 col-md-4 col-4 py-md-5 py-5 pt-lg-0"/>
    <img src={oriflame} alt="brand" className="img-fluid col-lg-2 col-md-4 col-4 py-md-5 py-5 pt-lg-0"/>
    <img src={zara} alt="brand" className="img-fluid col-lg-2 col-md-4 col-4 py-md-5 py-5 pt-lg-0"/>
  </div>
</section>
      {/* End Brand connection */}

      {/* What we do */}
      <section id="about" className="about_wrapper">
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 col-sm-12 mb-4 mb-md-0">
              <img src={About} className="img-fluid" alt="#"/>
            </div>
            <div className="col-md-6 col-sm-12 text-md-start">
              <h2>What We Do</h2>
              <p>
                Kami adalah Agen Desain Web yang berspesialisasi dalam Desain Web, Pengembangan Web, eCommerce, dan SEO Organik. <br /><br />
                Dengan pengalaman lebih dari satu dekade, Shape adalah tim yang energik, segar, dan bersemangat yang menawarkan bakat kreatif, pengetahuan industri, dan standar yang sangat tinggi. <br /><br />
                Kami bekerja dengan bisnis awal yang ambisius hingga organisasi global besar sehingga kami dapat menyesuaikan layanan kami dengan kebutuhan Anda. Sistem manajemen konten pilihan kami adalah Craft CMS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* akhir what we do */}

      {/* Trusted */}
      <section id="trusted" className="about_wrapper">
    <div className="container-fluid">
     <div className="container py-3">
       <div className="row">
         <div className="col-12 text-center mb-2">
           <h2>Trusted by Indonesia’s Top Tech Companies</h2>
         </div>
       </div>
       <div className="row justify-content-between align-items-center mt-5">
         <div className="col-md-6 col-sm-12 ps-md-5 text-md-start">
           <h2>01</h2>
           <h3>E-Commerce & Digital Commerce</h3>
           <p>
              Wersion telah bermitra dengan lebih dari 200
              e-commerce & digital commerce ternama di Indonesia, dan
              mampu memproses hingga puluhan transaksi setiap harinya.
           </p>
           <h2 className="py-2">02</h2>
           <h3>Mitra Profesional Craft CMS</h3>
           <p>
           Sistem manajemen konten pilihan kami adalah Craft CMS daripada Wordpress, memungkinkan Anda mengelola halaman situs web, konten, dan SEO dengan mudah. Kami bangga menjadi mitra profesional Craft CMS dan Craft Commerce yang terverifikasi.
           </p>
         </div>
         <div className="col-md-6 col-sm-12 mb-4 mb-md-0">
           <img src={Trusted} className="img-fluid" alt="#" />
         </div>
       </div>
     </div>
    </div>
   </section>
      {/* End Trusted */}

      {/* why join us */}
      <section id="whyJoinUs" className="about_wrapper">
    <div className="container-fluid">
      <div className="container py-sm-3 py-md-5">
        <div className="row">
          <div className="col-12 text-center mb-2">
            <h2>Why Join Us?</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" className="services_wrapper">
    <div className="container-fluid">
        <div className="row">
        {
              whyJoinUs.map(whyJoinUs => {
                return <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card bg-white border-0 rounded-0 text-center" key={whyJoinUs.id}>
                    <div className="card-body">
                        <img src={whyJoinUs.image} alt="service" className="img-fluid mb-5"/>
                        <p>{whyJoinUs.description}</p>
                    </div>
                </div>
            </div>
              })
            }
        </div>  
    </div>
    </section>
      {/* End why join us  */}

      {/* Card Business Section */}
      <section id="businesSection">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f6f9" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,117.3C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <div className="container-fluid" style={{backgroundColor: "#f3f6f9"}} id="businesContainerFluid">
      <div className="container" id="businesContainer">
        <div className="row">
          <div className="col-md-4 offset-md-2 ">
            <h2>The perfect Web<br/>solution for your<br/>business</h2>
          </div>
          <div className="col-md-4">
            <p>Whether you’re a start-up, well established <br/> or an enterprise company, we offer solution to meet your business needs.</p>
          </div>
        </div>
        <div className="row py-5" id="businesCard">
          <div className="col-md-4 col-12 mb-3 d-flex justify-content-center">
            <div className="card border-0 businessColumn" style={{width: "18rem"}}>
              <img src={Busines1} alt="our busines" className="rounded mx-auto d-block pt-4"/>
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold">Pilih Produk Anda</h5>
                <p className="card-text">Anda dapat memilih produk sesuai kebutuhan dan budget yang anda miliki</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item font-weight-bold">Produk beragam</li>
                <li className="list-group-item font-weight-bold">Harga terjangkau</li>
                <li className="list-group-item font-weight-bold">Keamanan terjaga</li>
              </ul>
              <div className="card-body bisnisList">
                <p><i className="fa-solid fa-circle-check"></i>&ensp;Simple dan mudah di akses</p>
                <p><i className="fa-solid fa-circle-check"></i>&ensp;Terjangkau untuk semua bisnis</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-3 d-flex justify-content-center">
            <div className="card border-0 businessColumn" style={{width: "18rem"}}>
              <img src={Busines2} alt="our busines" className="rounded mx-auto d-block pt-4"/>
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold">Transaksi Dimana Saja</h5>
                <p className="card-text">Anda dapat terhubung dengan kami kapan saja dan dimanapun</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item font-weight-bold">Proses simple</li>
                <li className="list-group-item font-weight-bold">Komunikasi 24 jam</li>
                <li className="list-group-item font-weight-bold">CS support</li>
              </ul>
              <div className="card-body bisnisList">
                <p><i className="fa-solid fa-circle-check"></i>&ensp;Pilih kebutuhan anda</p>
                <p><i className="fa-solid fa-circle-check"></i>&ensp;Diproses dengan cepat</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-3 d-flex justify-content-center">
            <div className="card border-0 businessColumn" style={{width: "18rem"}}>
              <img src={Busines3} alt="our busines" className="rounded mx-auto d-block pt-4"/>
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold">Solusi Bisnis</h5>
                <p className="card-text">Menyediakan berbagai kebutuhan dan solusi untuk bisnis anda</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item font-weight-bold">Pilihan desain beragam</li>
                <li className="list-group-item font-weight-bold">Free layanan bekonsultasi</li>
                <li className="list-group-item font-weight-bold">Meeting progres pengerjaan</li>
              </ul>
              <div className="card-body bisnisList">
                <p><i className="fa-solid fa-circle-check"></i>&ensp;Flesksibel dan terukur</p>
                <p><i className="fa-solid fa-circle-check"></i>&ensp;Sesuai dengan kebutuhan anda</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-md-5">
          <div className="col d-flex justify-content-center">
            <div className="card mb-3 w-75 border-0 rounded-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={BusinesCard} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Good design
                      makes life better.</h5>
                    <p className="card-text">Agen desain web yang peduli dengan Anda dan merek Anda, terlepas dari ukuran atau industri apa bisnis Anda berada.</p>
                    <p className="card-text"><small className="text-muted">Solusi Web Anda</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      {/* End Card Business Section */}

      {/* Fokus Kami */}
      <section id="detail" className="about_wrapper">
    <div className="container-fluid" style={{backgroundColor: "#25262b"}}>
      <div className="container py-5">
        <div className="row align-items-center pb-md-5">
          <div className="col-md-6 col-sm-12 ps-md-5 text-md-start">
            <p className="text-white font-weight-bold">Fokus Kami</p>
            <h2 style={{color: "#fdba12"}}>We approach every project with a clear vision.</h2>
            <p className="text-white">Kami tidak hanya membangun situs web yang cantik. Di MadeByShape kami memahami semua aspek situs yang sukses mulai dari desain hingga pengembangan dan pengujian web, hingga SEO dan Hosting. Kami menyesuaikan layanan kami dengan klien dan kebutuhan proyek.</p> 
            <button id="detailButton" className="my-3"  onClick={() => {
                  navigate ('/contact');
                }}>Contack Us</button>
          </div>
          <div className="col-md-6 col-sm-12 mb-4 mb-md-0 ">
            <img src={WebPict} className="img-fluid" id="detailImage" alt="#" />
          </div>
        </div>
        <div className="row mt-5" id="detailIcons">
          <div className="col-md-4 col-12">
            <img src={Detail1} alt="detail" className="mb-3"/>
            <h5 className="font-weight-bold" style={{color: "#fdba12"}}>Data Aman</h5>
            <p className="text-white">Seluruh data pelanggan akan dikelola secara aman dan dilindungi secara ketat</p>
          </div>
          <div className="col-md-4 col-12">
            <img src={Detail2} alt="detail" className="mb-3"/>
            <h5 className="font-weight-bold" style={{color: "#fdba12"}}>Proses Cepat</h5>
            <p className="text-white">Proses sangat cepat dan instant, dibandingkan harus melakukan marketing bulanan sendiri.</p>
          </div>
          <div className="col-md-4 col-12">
            <img src={Detail3} alt="detail" className="mb-3"/>
            <h5 className="font-weight-bold" style={{color: "#fdba12"}}>Tim Creator Handal</h5>
            <p className="text-white">Dikerjakan oleh tim yang ahli di berbagai bidang, seperti industri makanan, teknologi, layanan & jasa.</p>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#25262b" fillOpacity="1" d="M0,288L120,272C240,256,480,224,720,229.3C960,235,1200,277,1320,298.7L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
  </section>
      {/* End Fokus Kami */}
      

      {/* Our Team */}
      <section id="ourTeam">
    <div className="container-fluid pt-5" style={{backgroundColor: "#f3f6f9", marginTop: "-80px"}}>
      <div className="container">
        <div className="row text-center py-md-5">
          <div className="col">
            <h1>Our Team</h1>
          </div>
        </div>
        <div className="row d py-5">
          <div className="col-md-4 col-6 text-center">
            <img src={Profil1} alt="" className="mb-3"/>
            <h3>Lila Fadilah</h3>
            <p>Co-Founder & Web Developer</p>
          </div>
          <div className="col-md-4 col-6 text-center">
            <img src={Profil2} alt="" className="mb-3"/>
            <h3>Zuhriatul Aini</h3>
            <p>Brand Designer</p>
          </div>
          <div className="col-md-4 col-6 text-center">
            <img src={Profil3} alt="" className="mb-3"/>
            <h3>Ella Gia Dewi</h3>
            <p>Accounts & Finance</p>
          </div>
        </div>
        
      </div>
    </div>
  </section>
      {/* end Our Team */}
      <DetailContack/>
      <Footer/>
    </>
  );
}

export default Home;
