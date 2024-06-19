import React from "react";
import "./CSS/ContactUs.css";

const ContactUs = () => {
    return (
        <div className="contact">
            <h1>CONTACT US</h1>
            <hr />
            <div className="contact-container">
                <div className="left">
                    <h2>BuyZone</h2>
                    <p>
                        We believe in delivering excellent customer service and we are dedicated to satisfying our customers. 
                        If you have any questions, comments or suggestions, feel free to send us a message in the form below. 
                        Get in touch! We would love to hear from you.
                    </p>
                    <div className="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27421.957272182495!2d79.87374822143366!3d6.979319732396532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f7e653c68ea1%3A0x3084a891b2018837!2sNOLIMIT!5e0!3m2!1sen!2slk!4v1716806550699!5m2!1sen!2slk" 
                            width="100%" 
                            height="370" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" 
                            title="BuyZone Location"
                        ></iframe>
                    </div>
                </div>
                <div className="right">
                    <h2>Drop Us A Line</h2>
                    <p>below with any questions you may have.</p>
                    <form>
                        <label htmlFor="name">NAME (required)</label>
                        <input type="text" id="name" name="name" required />
                        
                        <label htmlFor="email">EMAIL (required)</label>
                        <input type="email" id="email" name="email" required />
                        
                        <label htmlFor="phone">PHONE NUMBER</label>
                        <input type="tel" id="phone" name="phone" />
                        
                        <label htmlFor="message">YOUR MESSAGE (required)</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default ContactUs;