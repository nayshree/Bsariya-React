import React from "react";

const members = [
  {
    img: "/images/img/baboolal sariya.jpeg",
    name: "Baboolal Sariya",
    role: "Founder & Senior Partner",
    qualification: "FCA",
    bio: (
      <>
        <b>Baboolal Sariya</b> is a Fellow member (FCA) of the Institute of Chartered
        Accountants of India (ICAI) and a Commerce Graduate. During a span of{" "}
        <b>Three decades</b>, he successfully served and added value to numerous clients
        in the fields of Accountancy; Auditing; Domestic Taxation; International Taxation
        and Transfer Pricing and Company Law &amp; Secretarial Services. Baboolal has been
        appreciated by his clients for providing business-oriented solutions and
        professional advice to them, thus, being part of their success stories. An avid
        reader and a keen learner, Baboolal strives to keep himself on top of all the
        latest developments.
      </>
    ),
  },
  {
    img: "/images/img/rachit sariya.jpg",
    name: "Rachit Sariya",
    role: "Associate Partner",
    qualification: "ACA",
    bio: (
      <>
        <b>Rachit Sariya</b> is an Associate member (ACA) of the Institute of Chartered
        Accountants of India (ICAI) &amp; a Commerce Graduate from Mumbai University.
        Rachit pursued his Articleship training from PricewaterhouseCoopers ('PwC') with
        specialisation in Auditing and Assurance. Post qualification, Rachit worked in
        Corporate &amp; International Taxation department at PwC for <b>2+ years</b>{" "}
        wherein he gained exposure in the fields of Income Tax, Transfer Pricing, FEMA,
        RERA, Company Law &amp; Other Allied Laws.
      </>
    ),
  },
];

export default function TeamSection() {
  return (
    <section className="team_section" id="team_section">
      <div className="container">

        <div className="team_header">
          <span className="team_label">Our People</span>
          <h2>MEET THE <span>TEAM</span></h2>
        </div>

        <div className="row g-4">
          {members.map((m, i) => (
            <div className="col-lg-6 col-12" key={i}>
              <div className="team_card">

                <div className="team_card_profile">
                  <img src={m.img} alt={m.name} className="team_avatar" />
                  <div className="team_card_meta">
                    <div className="team_card_name_row">
                      <span className="team_card_name">{m.name}</span>
                      <span className="team_card_qual">{m.qualification}</span>
                    </div>
                    <div className="team_card_role">{m.role}</div>
                  </div>
                </div>

                <div className="team_card_divider" />
                <p className="team_card_bio">{m.bio}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
