import React from "react";

export default function TeamSection() {
  return (
    <section className="testimonials" id="team_section">
      <div className="row">
        <div className="col-sm-12">
          <h2><span>MEET THE TEAM</span></h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="item">
            <div className="shadow-effect">
              <img className="img-circle" src="/images/img/baboolal sariya.jpeg" alt="Baboolal Sariya" />
              <p><b>Baboolal Sariya</b> is a Fellow member (FCA) of the Institute of Chartered Accountants of India (ICAI) and a Commerce Graduate. During a span of <b>Three decades</b>, he successfully served and added value to numerous clients in the fields of Accountancy; Auditing; Domestic Taxation; International Taxation and Transfer Pricing and Company Law & Secretarial Services. Baboolal has been appreciated by his clients for providing business-oriented solutions and professional advice to them, thus, being part of their success stories. An avid reader and a keen learner, Baboolal strives to keep himself on top of all the latest developments.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="item">
            <div className="shadow-effect">
              <img className="img-circle" src="/images/img/rachit sariya.jpg" alt="Rachit Sariya" />
              <p><b>Rachit Sariya</b> is an Associate member (ACA) of the Institute of Chartered Accountants of India (ICAI) & a Commerce Graduate from Mumbai University. Rachit pursued his Articleship training from PricewaterhouseCoopers ('PwC') with specialisation in Auditing and Assurance. Post qualification, Rachit worked in Corporate & International Taxation department at PwC for <b>2+ years</b> wherein he gained exposure in the fields of Income Tax, Transfer Pricing, FEMA, RERA, Company Law & Other Allied Laws.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}