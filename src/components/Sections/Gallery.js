"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = Array.from({ length: 8 }, (_, index) => ({
    src: `/img/gallery/gallery-${index + 1}.jpg`,
    alt: `Gallery Item ${index + 1}`,
  }));

  return (
    <section id="gallery" className="gallery section">
      <div className="container section-title">
        <h2>Gallery</h2>
        <p>Explore our scrap collection featuring various materials.</p>
      </div>

      <div className="container-fluid">
        <div className="row g-2">
          {images.map((image, index) => (
            <div className="col-lg-3 col-md-4 col-6" key={index}>
              <div
                className="gallery-item"
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="img-fluid"
                  priority={index < 4}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((img) => ({ src: img.src }))}
          index={currentIndex}
        />
      )}
    </section>
  );
};

export default Gallery;
