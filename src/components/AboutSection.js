// src/app/about/page.js (or wherever you want to include this)

import React from "react";

const AboutUsSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4 gx-5">
          <div
            className="col-lg-6 position-relative align-self-start"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src="img/about.jpg" className="img-fluid" alt="About Us" />
            <a
              href="https://www.youtube.com/watch?v=_ErocQ2S080"
              className="glightbox pulsating-play-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch YouTube Video"
            ></a>
          </div>

          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>About Us</h3>
            <p>
              At Scrapworker, we are committed to providing reliable and
              eco-friendly scrap collection, recycling, and disposal services.
              Our team ensures transparent pricing and hassle-free solutions,
              helping you manage your scrap responsibly. With years of
              experience, we aim to contribute to a cleaner, sustainable future
              while offering top-notch service to our customers.
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-users"></i>
                <div>
                  <h5>Experienced Scrap Recycling Team</h5>
                  <p>
                    A skilled team dedicated to delivering efficient and
                    professional scrap collection and recycling services for
                    various materials.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-credit-card"></i>
                <div>
                  <h5>Transparent Scrap Pricing</h5>
                  <p>
                    Offering fair, upfront pricing for scrap metal, e-waste,
                    plastic, and paper recycling, ensuring trust and
                    satisfaction with every transaction.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-truck"></i>
                <div>
                  <h5>Comprehensive Scrap Collection Services</h5>
                  <p>
                    Providing scrap collection and recycling services for homes,
                    businesses, and industries, specializing in responsible
                    waste disposal and eco-friendly recycling practices.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
