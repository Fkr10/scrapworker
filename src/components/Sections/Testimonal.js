"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/lib/content/homePageData";

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-5 info"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Testimonials</h3>
            <p>
              Our customers love the hassle-free and reliable scrap pickup
              service. See what they have to say about their experience!
            </p>
          </div>

          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              className="testimonials-swiper"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img
                        src={item.imgSrc}
                        className="testimonial-img flex-shrink-0"
                        alt={`${item.name}'s Testimonial`}
                      />
                      <div>
                        <h3>{item.name}</h3>
                        <h4>{item.role}</h4>
                        <div className="stars">
                          {Array.from({ length: item.stars }, (_, i) => (
                            <i key={i} className="bi bi-star-fill"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>{item.text}</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
