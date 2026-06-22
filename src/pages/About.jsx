import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Header />

      {/* Page Banner */}
      <div className="page_banner">
        <div className="container">
          <div className="page_banner_content">
            <h1>ABOUT US</h1>
            <ul className="page_breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>/</li>
              <li className="active">About</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="about_intro_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-12">
              <span className="section_label">Our Introduction</span>
              <h2 className="section_title">OUR <span>INTRODUCTION</span></h2>
              <div className="about_intro_divider" />
              <p className="intro_lead">
                B Sariya &amp; Associates is a leading Chartered Accountant firm in Mumbai since 1989,
                providing comprehensive professional services in the areas of:
              </p>
              <div className="intro_services_grid">
                <div className="intro_service_item">
                  <div className="intro_service_dot" />
                  <span>Accounting</span>
                </div>
                <div className="intro_service_item">
                  <div className="intro_service_dot" />
                  <span>Company Law</span>
                </div>
                <div className="intro_service_item">
                  <div className="intro_service_dot" />
                  <span>Taxation</span>
                </div>
                <div className="intro_service_item">
                  <div className="intro_service_dot" />
                  <span>Other Allied Services</span>
                </div>
              </div>
              <p>We bring rich blend of industry experience &amp; aspiration of a growing firm to provide tailor-made solutions for our clients' needs.</p>
              <p>Our primary focus is to draft end-to-end business solutions for our clients through flawless and dedicated process, technology &amp; innovation.</p>
              <p>We are committed to deliver solutions for our clients that help them take pragmatic and prudent decisions to tackle ever-changing business environment.</p>
              <p>The firm practices strict ethical standards and integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="philosophy_section">
        <div className="container">
          <div className="philosophy_section_header">
            <h2>OUR <span>PHILOSOPHY</span></h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-12">
              <div className="philosophy_card">
                <div className="philosophy_icon_wrap">
                  <img src="/images/about_us/mission_blue.png" alt="Mission" />
                </div>
                <h3>The Mission</h3>
                <p>Catalysing our clients' growth by providing unrivalled services &amp; developing strong relationship by dedicatedly committing to perform beyond expectations</p>
                <p>Creating dynamic environment to stimulate creative &amp; innovative thinking among our team for boosting optimal scalability</p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="philosophy_card">
                <div className="philosophy_icon_wrap">
                  <img src="/images/about_us/vision_blue.png" alt="Vision" />
                </div>
                <h3>Our Vision</h3>
                <p>To become leading professional organization by expanding our client base &amp; catering our areas of expertise</p>
                <p>With utmost Integrity, our firm consistently strives to show strong commitment to sustainable business practices</p>
              </div>
            </div>
            <div className="col-12">
              <div className="philosophy_card">
                <div className="philosophy_icon_wrap">
                  <img src="/images/about_us/our_values.png" alt="Values" />
                </div>
                <h3>Our Values</h3>
                <p>Working as a <b>Team</b> to recognize &amp; define common objectives &amp; capitalizing on diverse strengths.</p>
                <p>Standing up to being honest &amp; working with <b>Integrity</b> is the foundational principle of our firm.</p>
                <p>Providing <b>Quality</b> services to our clients is our sole purpose &amp; each member of our firm contributes to our purpose.</p>
                <p>Our belief is that Collaboration with our clients and Team would enable us in bringing out the best in all of us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
