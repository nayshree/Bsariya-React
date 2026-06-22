import React, { useState, useEffect, useRef } from "react";

function CountUp({ end, duration = 3, enableScrollSpy }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(!enableScrollSpy);

  useEffect(() => {
    if (!enableScrollSpy) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasStarted(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [enableScrollSpy]);

  useEffect(() => {
    if (!hasStarted) return;
    const frames = duration * 60;
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round((frame / frames) * end));
      if (frame >= frames) clearInterval(timer);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StateSection() {
  return (
    <section className="stats_section">
      <div className="container">

        {/* Header */}
        <div className="stats_header">
          <span className="stats_label">Why Choose Us</span>
          <h2>THE MOST <span>COST-EFFECTIVE</span> FINANCE SOLUTION</h2>
        </div>

        {/* Description */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12">
            <div className="stats_desc_box">
              <h4>PROMPT AND ACCURATE VALUATIONS</h4>
              <p>Synergistically evolve 2.0 technologies rather than just in time initiatives. Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.</p>
              <p>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate.</p>
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="row g-4 justify-content-center">
          <div className="col-lg-3 col-md-3 col-6">
            <div className="stat_card">
              <div className="stat_number">
                <CountUp end={35} duration={3} enableScrollSpy />
                <span className="stat_plus">+</span>
              </div>
              <div className="stat_name">Years in the Market</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="stat_card">
              <div className="stat_number">
                <CountUp end={3054} duration={3} enableScrollSpy />
                <span className="stat_plus">+</span>
              </div>
              <div className="stat_name">Happy Clients</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="stat_card">
              <div className="stat_number">
                <CountUp end={10} duration={3} enableScrollSpy />
              </div>
              <div className="stat_name">Advisors</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="stat_card">
              <div className="stat_number">
                <CountUp end={2094} duration={3} enableScrollSpy />
                <span className="stat_plus">+</span>
              </div>
              <div className="stat_name">Projects</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
