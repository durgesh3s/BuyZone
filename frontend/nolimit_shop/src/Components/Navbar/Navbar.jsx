import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {

  const {getTotalCartItems}= useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <ul className='nav-menu'>
        <li><Link style={{ textDecoration: 'none' }} to="/">Shop</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to="/mens">Men</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to="/womens">Women</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link></li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<Link style={{ textDecoration: 'none' }} to="/login"><button>Login</button></Link>}
      <Link style={{ textDecoration: 'none' }} to="/cart"><img src={cart_icon} alt='' /></Link>
        <dic className="nav-cart-count">{getTotalCartItems()}</dic>
      </div>
      
    </div>
  )
}

export default Navbar
