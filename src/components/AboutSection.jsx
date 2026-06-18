import React from "react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="aboutus_section">
        <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h2>A FEW <span>DETAILS</span> ABOUT US</h2>
          <h4>Adding value to Clients business and their lives for the past 30+ years</h4>
          <p>B Sariya & Associates has an impressive roster of clients that it has helped over the last 30 years. The broad range of services includes services as independent auditors, tax consultants, corporate consultants, etc. We help and assist various clients (Indian as well as International clients) in Setting up in India, Legal Registrations, Corporate Compliances, Outsourcing of Accounts, Taxation and Payroll Function, CFO Services, etc. Our diverse clientele includes private and public companies, SME's and Fortune 500 companies, traditional companies and digital enterprises, mature ones and start-ups, commercial and social sectors.</p>
          <Link className="about_us_btn" to="/about">About us</Link>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center">
          <img src="/images/about_us/about-us.jpg" alt="about-us" className="about_img" />
        </div>
      </div>
    </section>
  )
}