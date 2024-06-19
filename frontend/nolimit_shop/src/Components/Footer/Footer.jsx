import React from "react"
import "./Footer.css"
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="Footer Logo" />
            </div>
            <ul className="footer-links">
                {/* <li><Link style={{ textDecoration: 'none' }} to="/aboutus" onClick={scrollToTop}>About Us</Link></li> */}
                <li><Link style={{ textDecoration: 'none' }} to="/faq" onClick={scrollToTop}>FAQ</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="/terms" onClick={scrollToTop}>Terms</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="/sizeguide" onClick={scrollToTop}>Size Guide</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="/contactus" onClick={scrollToTop}>Contact Us</Link></li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="Instagram" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintrest_icon} alt="Pinterest" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="WhatsApp" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved By Durgesh Singh.</p>
            </div>
        </div>
    )
}

export default Footer