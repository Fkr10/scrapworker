import React from "react";

const HeroSection = ({
  backgroundImage,
  welcomeText,
  mainTitle,
  whyChooseTitle,
  whyChooseDescription,
  highlights,
}) => {
  return (
    <section id="hero" className="hero section light-background">
      <img src={backgroundImage} alt="" data-aos="fade-in" />

      <div className="container position-relative">
        <div
          className="welcome position-relative"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <p>{welcomeText}</p>
          <h2>
            SCRAP<span>WORKER</span>
          </h2>
        </div>

        <div className="content row gy-4">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
              <h3>{whyChooseTitle}</h3>
              <p>{whyChooseDescription}</p>
            </div>
          </div>

          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-center">
              <div className="row gy-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="col-xl-4 d-flex align-items-stretch"
                  >
                    <div
                      className="icon-box"
                      data-aos="zoom-out"
                      data-aos-delay={(index + 3) * 100}
                    >
                      <i className={highlight.icon}></i>
                      <h4>{highlight.title}</h4>
                      <p>{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
