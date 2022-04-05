import './App.css';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './pages/contactUs/ContactUs';
import Home from './pages/home/Home';
import Method from './pages/method/Method';
import NotFound from './pages/notFound/NotFound';
import Products from './pages/products/Products';
import Services from './pages/services/Services';
import DetailProducts from './pages/detailProducts/DetailProducts';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ThankYou from './pages/thankYou/ThankYou';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/method" element={<Method />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/detail" element={<DetailProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thanks" element={<ThankYou />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
