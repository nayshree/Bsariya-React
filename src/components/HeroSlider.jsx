import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    bg: "/images/index2-slider-1.jpg",
    tag: "Financial Excellence",
    title: "Accounting & Related Advisory",
    desc: "Our outsourcing service covers all four stages of accounting — recording, classifying, summarizing, and interpreting financial data for actionable insights.",
  },
  {
    bg: "/images/index2-slider-2.jpg",
    tag: "Three Decades of Trust",
    title: "Audit & Assurance",
    desc: "We are a three-decade-old audit firm providing statutory audits under Companies Act, Tax Audit, GST Audit, and comprehensive Assurance services.",
  },
  {
    bg: "/images/index2-slider-3.jpg",
    tag: "Strategic Tax Planning",
    title: "Direct Tax",
    desc: "Our multi-disciplinary tax team advises on corporate tax, major developments in taxation regimes, and end-to-end tax planning for your business.",
  },
  {
    bg: "/images/index2-slider-4.jpg",
    tag: "Leadership Support",
    title: "CFO Management Services",
    desc: "We assist clients with strategic planning and management as Virtual CFO Services in India, tailored to your stage of growth and business needs.",
  },
  {
    bg: "/images/index2-slider-5.jpg",
    tag: "GST Experts",
    title: "Indirect Tax",
    desc: "Well-known GST consultants with decades of experience in Indirect Tax consulting and planning for large corporates across India.",
  },
];

export default function HeroSlider() {
  return (
    <section className="hero_slider_section">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        pagination={{ clickable: true, el: ".hero-pagination" }}
        speed={800}
        className="hero-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="hero-overlay" />
              <div className="container h-100">
                <div className="hero-content">
                  <span className="hero-tag">{slide.tag}</span>
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-desc">{slide.desc}</p>
                  <div className="hero-actions">
                    <a href="/services" className="hero-btn-primary">
                      Our Services
                    </a>
                    <a href="#contact_section" className="hero-btn-outline">
                      Get In Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows — individually positioned on left/right */}
      <button className="hero-prev hero-nav-btn" aria-label="Previous">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="hero-next hero-nav-btn" aria-label="Next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      {/* Dots — centered independently */}
      <div className="hero-pagination" />
    </section>
  );
}
