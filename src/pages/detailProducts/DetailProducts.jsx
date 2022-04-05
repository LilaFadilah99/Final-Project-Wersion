import React from 'react'
import './DetailProducts.css'
import Navbar from '../../components/navbar/Navbar'
import DetailProduct from '../../assets/DetailProduct/detailProducts.png'
import Detail1 from '../../assets/DetailProduct/detail1.jpg'
import Detail2 from '../../assets/DetailProduct/detail2.jpg'
import DetailContack from '../../components/detailContack/DetailContack'
import Footer from '../../components/footer/Footer'

function DetailProducts() {
  return (
    <>
    <Navbar/>
         {/* Title */}
    <section id='Title'>
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-md-5">
            <h1>Web Design</h1>
          </div>
        </div>
      </div>
    </div>
    </section>
    {/* Description Product */}
    <section id='descriptionProducts'>
    <div className="container-fluid py-2">
        <div className="container">
            <div className="row">
                {/* kolom kiri */}
                <div className="col-md-6 col-12">
                <h3 className='fw-bold'>Studio Desain Web yang menawarkan saran jujur, pengalaman industri, dan portofolio pekerjaan yang hebat.</h3>
                </div> 
                {/* kolom kanan */}
                <div className="col-md-6 col-12">
                <p>UI/UX, Wireframes, Penelitian dan Pengembangan - kami memahami semua bidang Desain Web. Kami dapat membawa bisnis awal tanpa apa pun ke merek yang berfungsi penuh secara online dan offline. Kami dapat mengubah situs web yang ada, atau membawa merek yang sukses ke tingkat berikutnya. Tim desain web kami yang berbakat dan kreatif akan bekerja sama dengan Anda dalam kolaborasi untuk membuat situs yang mencerminkan merek Anda, berbicara kepada audiens Anda dengan makna dan kepribadian, dan memiliki fungsionalitas yang hebat di seluruh perangkat terbaru.</p>
                <a href=""><button id="descriptionProductsButton" className="my-3">Let's start a project</button></a>  
                </div> 
            </div>
        </div>
    </div>
    </section>

    {/* Company Description */}
    <section id='CompanyDescription'>
        <div className="container-fluid py-5" style={{backgroundColor: "#25262b"}}>
            <div className="container pt-md-5">
                <div className="row flex-column-reverse active flex-md-row">
                    {/* kolom kiri */}
                   <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-6 col-12" style={{color: "#fdba12"}}>
                                <h4><i className="fa-solid fa-arrow-pointer"></i>&emsp;Here since 2010</h4>
                            </div>
                            <div className="col-md-6 col-12" style={{color: "#fdba12"}}>
                            <h4><i class="fa-solid fa-circle-check"></i>&emsp;Here since 2010</h4>
                            </div>
                            <div className="row text-light py-md-5 py-3">
                                <div className="col-12">
                                    <h3 className='fw-bold'>Apakah Anda merek startup, perusahaan mapan, di Jakarta atau di seluruh Indoneia? Tidak masalah. Kami bekerja dengan berbagai klien.</h3> <br />
                                    <p>Kami tahu bahwa sulit bagi merek untuk menyiapkan pengalaman online, dan anggaran bisa ketat. Kami ingin membantu merek baru tumbuh dan bekerja dalam hubungan jangka panjang.</p>
                                    <p>Dan kami juga memiliki pengalaman merancang, membangun, menguji, dan meluncurkan situs web untuk organisasi global besar. Kami dapat menjadi perpanjangan dari tim pemasaran internal Anda atau memanfaatkan tim ahli kami untuk menjadi lengan digital lengkap Anda.</p> <br />
                                    <a href=""><button id="methodButton1" className="my-3">Join Us</button></a>  
                                </div>
                            </div>
                        </div>
                   </div> 
                   {/* kolom kanan */}
                   <div className="col-md-6 col-12">
                       <img src={DetailProduct} alt="" className='img-fluid mb-5 mb-md-0'/>
                   </div>
                </div>
            </div>
        </div>
    </section>
    {/* Visi*/}
    <section id="visi" className="about_wrapper">
      <div className="container-fluid" style={{backgroundColor: "#f3f6f9"}}>
        <div className="container py-5">
          <div className="row justify-content-between align-items-center mt-md-5">
            <div className="col-md-6 col-sm-12 mb-4 mb-md-0">
              <img src={Detail1} className="img-fluid" alt="#"/>
            </div>
            <div className="col-md-6 col-sm-12 text-md-start">
              <h3>Kami ingin menghapus 'wafel' dan mendesain situs web yang fungsional dan mudah digunakan.</h3> <br />
              <p>
              Kami tidak hanya membangun situs web yang cantik. Di MadeByShape kami memahami semua aspek situs yang sukses mulai dari desain hingga pengembangan dan pengujian web, hingga SEO dan Hosting. Kami menyesuaikan layanan kami dengan klien dan kebutuhan proyek.
              </p>
            </div>
           {/* akhir visi 1 */}
           {/* visi 2 */}
           <div className="row flex-md-row-reverse pt-5 my-md-5">
            <div className="col-md-6">
              <img src={Detail2} alt="banner" className="img-fluid rounded mx-auto d-block" />
            </div>
            <div className="col-md-6 my-5 my-md-0 text-start text-md-start" id="heroDescription">
              <h3>Kami menangani setiap proyek secara internal, kami tidak melakukan outsourcing.</h3> <br />
              <p>Kami adalah tim yang kuat, kami tahu berapa banyak pekerjaan yang dapat kami lakukan - dan kami memberi tahu klien jika akan ada penundaan. Setiap proyek yang kami ambil diproduksi di rumah, tidak ada outsourcing yang terlibat. Jika kami merasa kami tidak cocok untuk proyek Anda, kami akan menggunakan pengalaman industri digital kami untuk merekomendasikan agensi yang cocok untuk Anda.</p>
              <a href=""><button id="heroButton" className="my-3">Start a project</button></a>  
            </div>
          </div>
           {/* akhir visi 2 */}
          </div>
        </div>
      </div>
    </section>
    {/* Akhir Visi */}
            {/* Title */}
    <section id='timAhliTitle'>
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row text-md-center text-start">
          <div className="col-12 mt-md-5">
            <h3>Tim ahli desain web yang dapat membantu <br /> Anda merancang dan membangun situs <br /> web yang Anda banggakan</h3>
          </div>
        </div>
      </div>
    </div>
    </section>
    {/* card tim ahli */}
    <section id='timAhli'>
      <div className="container-fluid pb-5">
        <div className="container">
          <div className="row text-start">
               {/* card 1 */}
          <div className="col-md-4 col-12 px-md-5">
          <h3 className='mt-md-5 mt-4 fw-bold'><i class="fa-solid fa-bezier-curve"></i>&emsp;Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </div>
          {/* card 2 */}
          <div className="col-md-4 col-12 px-md-5">
          <h3 className='mt-md-5 mt-4 fw-bold'><i class="fa-solid fa-cart-shopping"></i>&emsp;Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </div>
          {/* card 3 */}
          <div className="col-md-4 col-12 px-md-5">
          <h3 className='mt-md-5 mt-4 fw-bold'><i class="fa-solid fa-object-group"></i>&emsp;Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </div>
          {/* card 4 */}
          <div className="col-md-4 col-12 px-md-5">
          <h3 className='mt-md-5 mt-4 fw-bold'><i class="fa-solid fa-desktop"></i>&emsp;Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </div>
          {/* card 5 */}
          <div className="col-md-4 col-12 px-md-5">
          <h3 className='mt-md-5 mt-4 fw-bold'><i class="fa-solid fa-network-wired"></i>&emsp;Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
          </div>
          {/* card 6 */}
          <div className="col-md-4 col-12 px-md-5">
          <h3 className='mt-md-5 mt-4 fw-bold'><i class="fa-solid fa-chess-board"></i>&emsp;Web Design</h3>
          <p>Situs web adalah alat pemasaran merek yang paling penting. Itu dapat memberikan konten yang beragam, ke khalayak luas dalam waktu singkat.</p>
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

export default DetailProducts