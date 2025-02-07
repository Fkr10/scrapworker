"use client";

import { useState } from "react";

const Faq = ({
  id = "faq",
  className = "faq section light-background",
  title,
  description,
  faqs,
}) => {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <section id={id} className={className}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    openIndices.includes(index) ? "faq-active" : ""
                  }`}
                >
                  <h3
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndices.includes(index)}
                    aria-controls={`faq-content-${index}`}
                    role="button"
                  >
                    {faq.question}
                    <i
                      className={`faq-toggle bi ${
                        openIndices.includes(index)
                          ? "bi-chevron-down"
                          : "bi-chevron-right"
                      }`}
                    ></i>
                  </h3>
                  {openIndices.includes(index) && (
                    <div
                      id={`faq-content-${index}`}
                      className="faq-content"
                      aria-hidden={!openIndices.includes(index)}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* End Faq Column */}
        </div>
      </div>
    </section>
  );
};

export default Faq;
