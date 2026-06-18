import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer' 

export default function Services() {
  return (
    <div>
      <Header/> 
      {/* Page Banner */}
      <div id="hw-hero">
        <div id="page-header">
          <div className="title-breadcrumbs">
            <h1>OUR SERVICES</h1>
            <div className="thebreadcumb">
              <ul className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li><span> / </span></li>
                <li className="active">Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Intro */}
      <section className="key_service_section">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h2>KEY <span> SERVICE </span> OFFERINGS</h2>
            <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="service_list_section">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="services1-grid">
              <div className="block-grid-item black">
                <div className="shadow-effect">
                  <span className="typcn typcn-chart-line"></span>
                  <h3>Accounting & Related Advisory</h3>
                  <p>Our outsourcing service consists of all four stages of accounting processes starting from recording of financial transactions, classifying the transactions, summarizing the accounting data into useful reports and interpreting the financial data.</p>
                  <Link className="service_read_more" to="/services/accounting">Read More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="services1-grid">
              <div className="block-grid-item blue">
                <div className="shadow-effect">
                  <span className="typcn typcn-chart-area"></span>
                  <h3>Audit & Assurance</h3>
                  <p>We are three decades old well known audit firm in India. We provide attestation function of statutory audits under Companies act, Tax Audit as per Income Tax Act, GST Audit, various other Assurance services to our clients in India.</p>
                  <Link className="service_read_more" to="/services/audit">Read More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="services1-grid">
              <div className="block-grid-item brown">
                <div className="shadow-effect">
                  <span className="typcn typcn-waves"></span>
                  <h3>Direct Tax</h3>
                  <p>We advise our clients on major developments in taxation regimes occurring periodically and their effect on business. Our multi-disciplinary tax team helps you in corporate tax advisory and overall tax planning.</p>
                  <Link className="service_read_more" to="/services/direct-tax">Read More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="services1-grid">
              <div className="block-grid-item lynch">
                <div className="shadow-effect">
                  <span className="typcn typcn-adjust-brightness"></span>
                  <h3>CFO Management Services</h3>
                  <p>We assist clients in India in strategic planning and management of their affairs as Virtual CFO Services in India during initial set up as per requirement.</p>
                  <Link className="service_read_more" to="/services/cfo">Read More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="services1-grid">
              <div className="block-grid-item orange">
                <div className="shadow-effect">
                  <span className="typcn typcn-chart-bar"></span>
                  <h3>Indirect Tax</h3>
                  <p>We are well known GST consultants with decades of experience in Indirect Tax consulting and planning for large corporates in India. Obtaining GST registrations in India, Filing/checking of periodical returns and remittance of taxes.</p>
                  <Link className="service_read_more" to="/services/indirect-tax">Read More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="services1-grid">
              <div className="block-grid-item wisteriapurple">
                <div className="shadow-effect">
                  <span className="typcn typcn-arrow-shuffle"></span>
                  <h3>International - Accounting and MIS</h3>
                  <p>Our international services include various services such as NRI Advisory Services, International Accounting and MIS preparation services, etc.</p>
                  <Link className="service_read_more" to="/services/international">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}