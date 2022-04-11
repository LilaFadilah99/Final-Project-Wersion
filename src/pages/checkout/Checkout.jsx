import React, {useEffect, useState} from 'react'
import './Checkout.css';
import Navbar from '../../components/navbar/Navbar'
import { useNavigate, useLocation } from 'react-router-dom'
import CheckoutPict from '../../assets/Checkout/checkout.avif'
import DetailContack from '../../components/detailContack/DetailContack'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'

function Checkout() {
    let param = useParams()
    const navigate = useNavigate()
    const [checkout, setChoeckout] = useState({})
    const [user, setUser] = useState({})

    async function getCheckout(id) {
        fetch(`https://pickled-capricious-beak.glitch.me/products/${id}`)
        .then(response => response.json())
        .then(data => setChoeckout(data))
        .catch(err => console.log(err))
      }

      const getLocalStorage = () => {
        const loggedInUser = localStorage.getItem("userLogin");
        setUser(JSON.parse(loggedInUser))
    }

      useEffect(()=> {
        getCheckout(param.id)
      },[param.id])

      useEffect(()=> {
        getLocalStorage()
      },[])

      const handleCheckout = async () => {
    console.log('ini kepanggil......');
    const chars ='abcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for ( let i = 0; i < 20; i++ ) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    const responseServer = await fetch('https://spiny-vivacious-flat.glitch.me/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "order_id": `Transakti-${result}`,
        "gross_amount": `${checkout.price}`,
        "name": `${user.name}`,
        "email": `${user.email}`
      }),
    })
    .then(response => response.json())
    .then(data => {
    //   console.log('Success:', data)
      return data
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    // console.log('ini setelah manggil')
    // console.log(responseServer)
    window.open(responseServer.redirect_url)
    navigate("/thanks")
  };

  return (
    <>
    <Navbar/>
    {/* Checkout Information */}
    <section id='checkOut'>
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row justify-content-between mt-md-5">
                <div className="col-md-6 col-sm-12 mb-4 mb-md-0">
              <img src={checkout.image} className="img-fluid" alt="#"/>
            </div>
            <div className="col-md-6 col-sm-12 text-md-start">
              <h1>{checkout.title}</h1> <br />
              {/* row 1 */}
                <div className="row">
                    <div className="col-12">
                        <p>5.0 <span style={{color: "#fdba12"}}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span><span style={{fontSize: "20px"}}>|</span> 14,3RB Kunjungan<span style={{fontSize: "20px"}}>|</span> 10RB+ Pesanan Selesai</p> <br />
                    </div>
                </div>
                {/* row-2 */}
                <div className="row">
                    <div className="col-12">
                        <p>Selesaikan pemesanan anda dengan mengisi form pembelian. Pastikan data yang anda isi benar. Selanjutnya Wersion akan memproses pesanan anda sesuai ketentuan yang dapat dibaca pada laman dibawah</p>
                    </div>
                </div>
                {/* row-3 */}
                <div className="row">
                    <div className="col-6">
                        <div className="container py-2" style={{backgroundColor: "#EFEFEF"}}>
                            <span className='align-middle fw-bold'>Rp. {
                    new Intl.NumberFormat(['ban', 'id']).format(checkout.price)}</span>
                        </div>
                        <button id="buyProduct" onClick={handleCheckout} className="my-3">Buy</button>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* info Checkout */}
    <section id='infoTitle'>
      <div className="container-fluid pt-md-5 pt-3">
        <div className="container py-md-4 py-3" style={{backgroundColor: '#DDDDDD'}}>
          <div className="row">
            <div className="col-12">
              <h2 className='ps-5'>Proses Pengerjaan</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* detail info */}
    <section id='infoDetail'>
      <div className="container-fluid py-3">
        <div className="container py-md-5 py-3">
          <div className="row justify-content-center">
            <div className="col-md-5 col-12 mt-2">
              <p>Stage 1</p>
              <h3>References</h3>
              <p>Wersion akan mengirimkan referensi web klien untuk memberikan gambaran arah sehingga kedua belah pihak berada di halaman yang sama dalam hal gaya.</p>
            </div>
            <div className="col-md-5 col-12 mt-2 offset-md-1">
              <p>Stage 2</p>
              <h3>Design</h3>
              <p>Setelah klien puas dengan arah proyek, Wersion kemudian akan mulai merancang konsep berdasarkan referensi tersebut.</p>
            </div>
          </div>
          <div className="row mt-md-5 justify-content-center">
            <div className="col-md-5 col-12 mt-2">
              <p>Stage 3</p>
              <h3>Development</h3>
              <p>Setelah desain ditandatangani oleh klien, Wersion kemudian akan mulai mengerjakan desain</p>
            </div>
            <div className="col-md-5 col-12 mt-2 offset-md-1">
              <p>Stage 4</p>
              <h3>Content</h3>
              <p>Setelah konten dibuat, sekarang siap untuk dikirmkan kepada pelanggan.</p>
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

export default Checkout