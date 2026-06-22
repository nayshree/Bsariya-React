import React from "react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="about_section">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">

          {/* Text content */}
          <div className="col-lg-6 col-12">
            <div className="about_content">
              <span className="about_label">About Us</span>
              <h2>A FEW <span>DETAILS</span> ABOUT US</h2>
              <div className="about_divider"></div>
              <h4>Adding value to Clients business and their lives for the past 30+ years</h4>
              <p>B Sariya &amp; Associates has an impressive roster of clients that it has helped over the last 30 years. The broad range of services includes services as independent auditors, tax consultants, corporate consultants, etc. We help and assist various clients (Indian as well as International clients) in Setting up in India, Legal Registrations, Corporate Compliances, Outsourcing of Accounts, Taxation and Payroll Function, CFO Services, etc. Our diverse clientele includes private and public companies, SME's and Fortune 500 companies, traditional companies and digital enterprises, mature ones and start-ups, commercial and social sectors.</p>
              <Link className="about_btn" to="/about">About us</Link>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 col-12">
            <div className="about_img_wrapper">
              <img src="/images/about_us/about-us.jpg" alt="about-us" className="about_img_main" />
              <div className="about_badge">
                <strong>30+</strong>
                <span>Years of<br />Excellence</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
