import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Accounting & Related Advisory",
    desc: "Our outsourcing service consists of all four stages of accounting processes starting from recording of financial transactions, classifying the transactions, summarizing the accounting data into useful reports and interpreting the financial data.",
    link: "/services/accounting",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Audit & Assurance",
    desc: "We are three decades old well known audit firm in India. We provide attestation function of statutory audits under Companies act, Tax Audit as per Income Tax Act, GST Audit, various other Assurance services to our clients in India.",
    link: "/services/audit",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Direct Tax",
    desc: "We advise our clients on major developments in taxation regimes occurring periodically and their effect on business. Our multi-disciplinary tax team helps you in corporate tax advisory and overall tax planning.",
    link: "/services/direct-tax",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <path d="M13 8h4M13 12h4M13 16h4" />
      </svg>
    ),
    title: "CFO Management Services",
    desc: "We assist clients in India in strategic planning and management of their affairs as Virtual CFO Services in India during initial set up as per requirement.",
    link: "/services/cfo",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Indirect Tax",
    desc: "We are well known GST consultants with decades of experience in Indirect Tax consulting and planning for large corporates in India. Obtaining GST registrations in India, Filing/checking of periodical returns and remittance of taxes.",
    link: "/services/indirect-tax",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "International - Accounting and MIS",
    desc: "Our international services include various services such as NRI Advisory Services, International Accounting and MIS preparation services, etc.",
    link: "/services/international",
  },
];

export default function Services() {
  return (
    <div>
      <Header />

      {/* Page Banner */}
      <div className="page_banner">
        <div className="container">
          <div className="page_banner_content">
            <h1>OUR SERVICES</h1>
            <ul className="page_breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>/</li>
              <li className="active">Services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="services_intro_section">
        <div className="container">
          <h2>KEY <span>SERVICE</span> OFFERINGS</h2>
          <p>
            Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly
            predominate extensible testing procedures for reliable supply chains. Dramatically engage
            top-line web services vis-a-vis cutting-edge deliverables.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services_grid_section">
        <div className="container">
          <div className="row g-4">
            {services.map((s, i) => (
              <div className="col-lg-4 col-md-6 col-12" key={i}>
                <div className="service_card">
                  <div className="service_card_icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link className="service_card_link" to={s.link}>
                    Read More
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
