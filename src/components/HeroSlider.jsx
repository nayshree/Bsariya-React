import React from "react";  
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HeroSlider() {
  return (
    <section className="slider_section">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 8500 }}
        >
          <SwiperSlide>
            <div className="item">
              <h2>Accounting & Related Advisory</h2>
              <p>Our outsourcing service consists of all four stages of accounting processes starting from recording of financial transactions, classifying the transactions, summarizing the accounting data into useful reports and interpreting the financial data.</p>
              <a href="/services" className="learn_more_btn">Learn More</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <h2>Audit & Assurance</h2>
              <p>We are three decades old well known audit firm in India. We provide attestation function of statutory audits under Companies act, Tax Audit as per Income Tax Act, GST Audit, various other Assurance services to our clients in India.</p>
              <a href="/services" className="learn_more_btn">Learn More</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <h2>Direct Tax</h2>
              <p>We advise our clients on major developments in taxation regimes occurring periodically and their effect on business. Our multi-disciplinary tax team helps you in corporate tax advisory and overall tax planning.</p>
              <a href="/services" className="learn_more_btn">Learn More</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <h2>CFO Management Services</h2>
              <p>We assist clients in India in strategic planning and management of their affairs as Virtual CFO Services in India during initial set up as per requirement.</p>
              <a href="/services" className="learn_more_btn">Learn More</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <h2>Indirect Tax</h2>
              <p>We are well known GST consultants with decades of experience in Indirect Tax consulting and planning for large corporates in India.</p>
              <a href="/services" className="learn_more_btn">Learn More</a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    )
}
