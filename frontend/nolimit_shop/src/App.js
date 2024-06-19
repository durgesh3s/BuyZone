import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Shop from './Pages/Shop'
import Footer from './Components/Footer/Footer';
import kid_banner from './Components/Assets/banner_kids.png'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import AboutUs from './Pages/AboutUs';
import Faq from './Pages/Faq';
import Terms from './Pages/Terms';
import ContactUs from './Pages/ContactUs'
import SizeGuide from './Pages/SizeGuide'


function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Routes>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/sizeguide' element={<SizeGuide/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
