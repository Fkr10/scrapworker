"use client";

import CountUp from "react-countup";

const Stats = ({ stats, title, className }) => {
  return (
    <section id="stats" className={`stats section ${className}`}>
      <div className="container">
        {title && <h2 className="text-center">{title}</h2>}
        <div className="row gy-4">
          {stats.map(({ icon, value, description }, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 d-flex flex-column align-items-center"
            >
              <i className={`fa ${icon} fa-3x`}></i>
              <div className="stats-item">
                <CountUp start={0} end={value} duration={1} />
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
