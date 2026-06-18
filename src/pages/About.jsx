import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Header/>
      {/* Page Banner */}
      <div id="hw-hero">
        <div id="page-header" className="about1">
          <div className="title-breadcrumbs">
            <h1>ABOUT US</h1>
            <div className="thebreadcumb">
              <ul className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li><span> / </span></li>
                <li className="active">About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Introduction Section */}
      <section className="about1">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h2><span>OUR INTRODUCTION</span></h2>
            <hr className="small" />
            <div className="list_point">
              <p>B Sariya & Associates is a leading Chartered Accountant firm in Mumbai since 1989, providing comprehensive professional services in the areas of:</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div className="our_intro_box">
              <i className="check_icon"></i>
              <p>Accounting</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div className="our_intro_box">
              <i className="check_icon"></i>
              <p>Company Law</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div className="our_intro_box">
              <i className="check_icon"></i>
              <p>Taxation</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div className="our_intro_box">
              <i className="check_icon"></i>
              <p>Other Allied Services</p>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="list_point">
              <p>We bring rich blend of industry experience & aspiration of a growing firm to provide tailor-made solutions for our clients' needs.</p>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="list_point">
              <p>Our primary focus is to draft end-to-end business solutions for our clients through flawless and dedicated process, technology & innovation.</p>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="list_point">
              <p>We are committed to deliver solutions for our clients that help them take pragmatic and prudent decisions to tackle ever-changing business environment.</p>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="list_point">
              <p>The firm practices strict ethical standards and integrity.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Mission, Vision & Values */}
      <section className="our_phillosophy">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="phillosophy_box">
              <i className="mission_icon"></i>
              <h2><span>The Mission</span></h2>
              <p>Catalysing our clients' growth by providing unrivalled services & developing strong relationship by dedicatedly committing to perform beyond expectations</p>
              <p>Creating dynamic environment to stimulate creative & innovative thinking among our team for boosting optimal scalability</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="phillosophy_box">
              <i className="vision_icon"></i>
              <h2><span>Our Vision</span></h2>
              <p>To become leading professional organization by expanding our client base & catering our areas of expertise</p>
              <p>With utmost Integrity, our firm consistently strives to show strong commitment to sustainable business practices</p>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="phillosophy_box">
              <i className="values_icon"></i>
              <h2><span>Our Values</span></h2>
              <p>Working as a <b>Team</b> to recognize & define common objectives & capitalizing on diverse strengths.</p>
              <p>Standing up to being honest & working with <b>Integrity</b> is the foundational principle of our firm.</p>
              <p>Providing <b>Quality</b> services to our clients is our sole purpose & each member of our firm contributes to our purpose.</p>
              <p>Our belief is that Collaboration with our clients and Team would enable us in bringing out the best in all of us.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}