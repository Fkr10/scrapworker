"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "glightbox/dist/css/glightbox.css";
import GLightbox from "glightbox";

// Dynamically import GLightbox

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lb = GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
        closeEffect: "fade",
        openEffect: "zoom",
      });
      setLightbox(lb);

      return () => {
        lb.destroy();
      };
    }
  }, []);

  return (
    <section id="gallery" className="gallery section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>
          Browse our gallery featuring various scrap materials, including metal,
          plastic, paper, and electronic waste. We specialize in efficient scrap
          collection, recycling, and responsible disposal.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {" "}
          {/* Removed extra gaps */}
          {Array.from({ length: 8 }, (_, index) => {
            const imageSrc = `/img/gallery/gallery-${index + 1}.jpg`;

            return (
              <div className="col-lg-3 col-md-4 col-6" key={index}>
                {" "}
                {/* Fixed column widths */}
                <div className="gallery-item">
                  <a
                    href={imageSrc}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <Image
                      src={imageSrc}
                      alt={`Gallery Item ${index + 1}`}
                      width={300}
                      height={300}
                      className="img-fluid w-100 h-auto"
                      priority={index < 4}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
