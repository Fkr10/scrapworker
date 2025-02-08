"use client";

import { useState } from "react";
import Image from "next/image";
import "@/styles/not-found.css";

export default function NotFound() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Your scrap pickup request has been submitted!");
    }, 2000);
  };

  return (
    <div className="notfound-page">
      {/* Background Image */}
      <Image
        src="/img/hero-bg.webp"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="-z-10 opacity-30"
        priority
      />

      {/* Overlay */}
      <div className="overlay">
        {/* 404 Content */}
        <h1 className="heading">404</h1>
        <p className="message">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Sell Scrap Form */}
        <div className="sell-scrap-form">
          <h2>Sell Scrap? Let’s Connect!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Your Phone Number"
                value={phoneNumber}
                onChange={handlePhoneChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-submit"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>
          <p className="help-message">
            Facing problems? Call us at <br />
            <strong>
              <a href="tel:+919457511854">+91 94 5751 1854</a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
