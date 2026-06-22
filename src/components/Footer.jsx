import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
<footer className="footer" id="contact_section">
    <div className="footer-widgets">
        <div className="row">
        <div className="col-sm-4">
            <div className="footer-widget">
            <h5>CONTACT US</h5>
            <ul className="posts">
                <li><span>ADDRESS:</span>10, C Wing, Dattani Nagar Two, 
                    Swami Vivekananda Rd, Opp. Kalyan Jewellers,
                    Borivali West, Mumbai 400 092, Maharashtra, India</li>
                <li><span>PHONE:</span>+91 (22) 28072653 | +91-93249 17517 | +91-9619820027</li>
            </ul>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="footer-widget">
            <h5>OUR PAGES</h5>
            <ul className="posts">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/team">Our Team</Link></li>
            </ul>
            </div>
        </div>   
        <div className="col-sm-4">
            <div className="footer-widget">
            <h5>WORKING DAYS</h5>
            <ul className="posts">
                <li>Monday to Saturday (10 AM to 7.00PM) Sunday (Week off)</li>
                <li><span>EMAIL:</span>rachit@bsariya.com baboolal@bsariya.com</li>
            </ul>
            </div>
        </div>
        </div>
    </div>
</footer>
    )
}
