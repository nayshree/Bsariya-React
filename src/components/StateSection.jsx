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
   <section className="numbers">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-4"></div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
          <h2>THE MOST <span>COST-EFFECTIVE</span> FINANCE SOLUTION</h2>
          <div className="row no-gutter">
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <div className="numbersbox">
                <h4>PROMPT AND ACCURATE VALUATIONS</h4>
                <hr className="small" />
                <p>Synergistically evolve 2.0 technologies rather than just in time initiatives. Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.</p>
                <p>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
              <div className="numbersbox-small">
                <div className="number">
                  <h4><CountUp end={35} duration={3} enableScrollSpy /></h4>
                  <div className="numbername">YEARS IN THE MARKET</div>
                </div>
                <div className="number">
                  <h4><CountUp end={3054} duration={3} enableScrollSpy /></h4>
                  <div className="numbername">HAPPY CLIENTS</div>
                </div>
                <div className="number">
                  <h4><CountUp end={10} duration={3} enableScrollSpy /></h4>
                  <div className="numbername">ADVISORS</div>
                </div>
                <div className="number">
                  <h4><CountUp end={2094} duration={3} enableScrollSpy /></h4>
                  <div className="numbername">PROJECTS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
