import React, {useState, useEffect} from 'react'
import '../products/Products.css'
import Navbar from '../../components/navbar/Navbar'
// import Products1 from '../../assets/products/products1.avif'
import Footer from '../../components/footer/Footer'
import DetailContack from '../../components/detailContack/DetailContack'
import { Navigate } from 'react-router-dom'

function Products() {
  const [products, setProducts] = useState([])
  async function fetchProducts() {
    fetch('https://pickled-capricious-beak.glitch.me/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err))
  }

  function cardClick(title) {
    // console.log(`card ${title} di klik`)
  }

  useEffect(()=> {
    fetchProducts()
  },[])
  return (
   <>
    <Navbar/>
    <section style={{backgroundColor: "#f3f6f9"}}>
      {/* Title */}
    <section id='Title'>
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2>Paket Bergantung Pada Kebutuhan Anda</h2>
          </div>
        </div>
      </div>
    </div>
    </section>
    {/* Products Card */}
    <section id='productsCard'>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center ">
          {
            products.map(products => {
              return <div className="mb-3 col-md-3 col-6" key={products.id} onClick={() => cardClick(products.title)} >
              <div className="card h-100 rounded-2">
                <img src={products.image} className="card-img-top" alt="paket 1" />
                <div className="card-body">
                  <p className="card-title fw-bold">{products.title}</p>
                  <p className="card-text" style={{fontSize: "15px"}}>Rp. {products.price}</p>
                  <p style={{fontSize: "12px"}}>{products.ket}</p>
                </div>
              </div>
            </div>
            })
          }
            {/* end row 1 */}
          </div>
        </div>
      </div>
    </section>
        {/* Paket Title*/}
        <section id='TitlePaket'>
        <div className="container-fluid py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h3>Paket Komplit Untuk Harga Yang Lebih Terjangkau</h3>
              <br/><br/>
              <p>Dengan harga terjangkau, anda sekarang dapat langsung ACTION dan sudah mendapatkan desain <br/>
                  profesional beserta banyak bonus lainya.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
          {/* card paket */}
    <section id='cardPaket'>
       <div className="container-fluid py-md-5">
        <div className="container">
          <div className="row justify-content-center text-center">
          <h2>Paket Desain Only</h2>
          <p>Kami akan membantu kegiatan branding bisnis anda di social media, opsi ini bisa anda pilih bila sudah punya admin <br/> social media sendiri. <br/></p>
          {/* card paket 1 */}
          <div className="col-md-4 mb-3 pt-3" data-aos="fade-up">
            <div className="card border-0">           
              <div className="card-body shadow-sm text-center">
                <h4 className="card-title">PAKET HEMAT</h4>
                <p>Desain Only</p>
                <h2 className="card-subtitle mb-2 text-muted">IDR 525.000</h2>
                <p className="card-text"><s>Rp 955.000</s></p>
                <p><i className="bi bi-check-lg"></i>12 Desain Premium</p>
                <p><i className="bi bi-check-lg"></i>Free 2 IG Stories</p>
                <p><i className="bi bi-check-lg"></i>Creative Design</p>
                <p><i className="bi bi-check-lg"></i>100% Original Design</p>
                <a href="" className='btn my-4'>Beli Sekarang</a>  
              </div>
            </div>
          </div>
          {/* card paket 2 */}
          <div className="col-md-4 mb-3 pt-3" data-aos="fade-up">
            <div className="card border-0">
              <div className="card-body shadow-sm text-center">
                <h4 className="card-title">PAKET MEDIUM</h4>
                <p>Desain Only</p>
                <h2 className="card-subtitle mb-2 text-muted">IDR 1.050.000</h2>
                <p className="card-text"><s>Rp 1.840.000</s></p>
                <p><i className="bi bi-check-lg "></i>30 Desain Premium</p>
                <p><i className="bi bi-check-lg"></i>Free 5 IG Stories</p>
                <p><i className="bi bi-check-lg"></i>Creative Design</p>
                <p><i className="bi bi-check-lg"></i>100% Original Design</p>
                <p><i className="bi bi-check-lg"></i>Free Riset Hastag Tertarget</p>
                <a href="" className='btn my-4'>Beli Sekarang</a>  
              </div>
            </div>
          </div>
          {/* card paket 3 */}
          <div className="col-md-4 mb-3 pt-3" data-aos="fade-up">
            <div className="card border-0">             
              <div className="card-body shadow-sm  text-center">
                <h4 className="card-title">PAKET PRO</h4>
                <p>Desain Only</p>
                <h2 className="card-subtitle mb-2 text-muted">IDR 2.100.000</h2>
                <p className="card-text"><s>Rp 3.667.000</s></p>
                <p><i className="bi bi-check-lg "></i>60 Desain Premium
                </p>
                <p><i className="bi bi-check-lg"></i>Free 10 IG Storie</p>
                <p><i className="bi bi-check-lg"></i>Creative Design</p>
                <p><i className="bi bi-check-lg"></i>100% Original Design</p>
                <p><i className="bi bi-check-lg"></i>Free Riset Hastag Tertarget</p>
                <a href="" className='btn my-4'>Beli Sekarang</a>  
              </div>
            </div>
          </div>         
          </div>
          {/* Card row-2 */}
          <div className="row justify-content-center text-center mt-4 pt-4">
          <h2>Paket Desain & Admin Instagram</h2>
            <p>Kami akan membantu kegiatan branding sekaligus menjadi admin di social media bisnis anda, opsi ini bisa anda pilih <br/> jika ingin mendapatkan paket komplit dengan harga terjangkau. <br/></p>
            {/* card paket 1 */}
          <div className="col-md-4 mb-3 pt-3" data-aos="fade-up">
          <div className="card border-0">
           <div className="card-body shadow-sm text-center">
          <h4 className="card-title">PAKET HEMAT</h4>
          <p>Desain & Admin Post</p>
          <h2 className="card-subtitle mb-2 text-muted">IDR 875.000</h2>
          <p className="card-text"><s>Rp 1.200.000</s></p>
          <p><i className="bi bi-check-lg"></i>12 Desain Premium</p>
          <p><i className="bi bi-check-lg"></i>2 Desain Story</p>
          <p><i className="bi bi-check-lg"></i>12 Caption Copywriting</p>
          <p><i className="bi bi-check-lg"></i>Creative Design
          </p>
          <p><i className="bi bi-check-lg"></i>Unlimmited Revision</p>
          <p><i className="bi bi-check-lg"></i>Posting Terjadwal</p>
          <p><i className="bi bi-check-lg"></i>Free Riset Hastag Tertargetn</p>
          <p><i className="bi bi-check-lg"></i>Free Riset Audien</p>
          <p><i className="bi bi-check-lg"></i>Free Admin Post</p>
          <p><i className="bi bi-check-lg"></i>Report Bulanan</p>
          <a href="" className='btn my-4'>Beli Sekarang</a> 
           </div>
         </div>
         </div>
         
         {/* Card paket 2 */}
         <div className="col-md-4 mb-3 pt-3" data-aos="fade-up">
      <div className="card border-0">   
        <div className="card-body shadow-sm text-center">
          <h4 className="card-title">PAKET MEDIUM</h4>
          <p>Desain & Admin Post</p>
          <h2 className="card-subtitle mb-2 text-muted">IDR 1.775.000</h2>
          <p className="card-text"><s>Rp 3.000.000</s></p>
          <p><i className="bi bi-check-lg "></i>30 Desain Premium</p>
          <p><i className="bi bi-check-lg"></i>8 Desain Story</p>
          <p><i className="bi bi-check-lg"></i>30 Caption Copywriting</p>
          <p><i className="bi bi-check-lg"></i>Unlimmited Revision</p>
          <p><i className="bi bi-check-lg"></i>Creative Design</p>
          <p><i className="bi bi-check-lg"></i>Posting Terjadwal</p>
          <p><i className="bi bi-check-lg"></i>Free Riset Hastag Tertarget</p>
          <p><i className="bi bi-check-lg"></i>Free Riset Audien</p>
          <p><i className="bi bi-check-lg"></i>Free Admin Post</p>
          <p><i className="bi bi-check-lg"></i>Report Bulanan</p>
          <a href="" className='btn my-4'>Beli Sekarang</a> 
          </div>
         </div>
       </div>
        {/* card paket 3 */}
        <div className="col-md-4 mb-3 pt-3" data-aos="fade-up">
      <div className="card border-0">
        <div className="card-body shadow-sm text-center">
          <h4 className="card-title">PAKET PRO</h4>
          <p>Desain & Admin Post</p>
          <h2 className="card-subtitle mb-2 text-muted">IDR 3.550.000</h2>
          <p className="card-text"><s>Rp 7.220.000</s></p>
          <p><i className="bi bi-check-lg "></i>60 Desain Premium
          </p>
          <p><i className="bi bi-check-lg"></i>16 Desain Story</p>
          <p><i className="bi bi-check-lg"></i>60 Caption Copywriting</p>
          <p><i className="bi bi-check-lg"></i>Unlimmited Revision</p>
          <p><i className="bi bi-check-lg"></i>Creative Design</p>
          <p><i className="bi bi-check-lg"></i>Posting Terjadwal</p>
          <p><i className="bi bi-check-lg"></i>Free Riset Hastag Tertarget</p>
          <p><i className="bi bi-check-lg"></i>Free Riset Audien</p>
          <p><i className="bi bi-check-lg"></i>Free Admin Post</p>
          <p><i className="bi bi-check-lg"></i>Report Bulanan</p>
          <a href="" className='btn my-4'>Beli Sekarang</a> 
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </section>
    </section>
    <DetailContack/>
    <Footer/>
   </>
    
  )
}

export default Products