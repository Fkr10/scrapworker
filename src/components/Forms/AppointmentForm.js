"use client";

import { useState } from "react";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    scrap_type: "",
    pickup_location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    loading: false,
    errorMessage: "",
    successMessage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ loading: true, errorMessage: "", successMessage: "" });

    try {
      // Simulate API request (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitting(false);
      setFormStatus({
        loading: false,
        errorMessage: "",
        successMessage:
          "Your pickup request has been sent successfully. Thank you!",
      });

      // Optionally reset the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        scrap_type: "",
        pickup_location: "",
        message: "",
      });
    } catch (error) {
      setIsSubmitting(false);
      setFormStatus({
        loading: false,
        errorMessage:
          "There was an error submitting your request. Please try again.",
        successMessage: "",
      });
    }
  };

  return (
    <section id="appointment" className="appointment section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Schedule a Pickup</h2>
        <p>
          Ready to recycle your scrap? Schedule a pickup today! Our team will
          collect scrap materials, including metal, e-waste, plastics, and more,
          right from your doorstep.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form onSubmit={handleSubmit} className="php-email-form">
          <div className="row">
            <div className="col-md-4 form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <label htmlFor="phone">Your Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <label htmlFor="date">Preferred Pickup Date</label>
              <input
                type="datetime-local"
                id="date"
                name="date"
                className="form-control"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4 form-group mt-3">
              <label htmlFor="scrap_type">Select Scrap Type</label>
              <select
                id="scrap_type"
                name="scrap_type"
                className="form-select"
                value={formData.scrap_type}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Scrap Type</option>
                <option value="Scrap Metal">Scrap Metal</option>
                <option value="E-waste">E-waste</option>
                <option value="Plastics">Plastics</option>
                <option value="Paper">Paper</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <label htmlFor="pickup_location">Select Pickup Location</label>
              <select
                id="pickup_location"
                name="pickup_location"
                className="form-select"
                value={formData.pickup_location}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Pickup Location</option>
                <option value="Home">Home</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="message">Additional Instructions (Optional)</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows={5}
              placeholder="Additional Instructions"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mt-3">
            {formStatus.loading && <div className="loading">Loading...</div>}
            {formStatus.errorMessage && (
              <div className="error-message">{formStatus.errorMessage}</div>
            )}
            {formStatus.successMessage && (
              <div className="sent-message">{formStatus.successMessage}</div>
            )}
            <div className="text-center">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Scheduling..." : "Schedule Pickup"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentSection;
