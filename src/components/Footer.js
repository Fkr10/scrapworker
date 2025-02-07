import React from "react";
import Link from "next/link";

const Footer = () => {
  const footerSections = [
    {
      title: "Useful Links",
      links: [
        { text: "Home", href: "/" },
        { text: "About us", href: "/about" },
        { text: "Services", href: "/services" },
        { text: "Terms of service", href: "/terms" },
        { text: "Privacy policy", href: "/privacy" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { text: "Metal Scrap Collection", href: "/scrap-metal" },
        { text: "Electronic Waste Disposal", href: "/services/e-waste" },
        { text: "Plastic Recycling", href: "/services/plastic" },
        { text: "Paper Scrap Management", href: "/services/paper" },
        { text: "Bulk Scrap Pickup", href: "/services/bulk" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { text: "Contact Us", href: "/contact" },
        { text: "FAQs", href: "/faqs" },
        { text: "Support", href: "/support" },
        { text: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Our Partners",
      links: [
        { text: "EcoFriends", href: "/partners/ecofriends" },
        { text: "RecyTech", href: "/partners/recytech" },
        { text: "GreenEnergy", href: "/partners/greenenergy" },
        { text: "CleanEarth", href: "/partners/cleanearth" },
      ],
    },
  ];

  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* Footer About Section */}
          <div className="col-lg-4 col-md-6 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">
                Scrap<span>Worker</span>
              </span>
            </Link>
            <div className="footer-contact pt-3">
              <p>Main road, near Spectrum Mall,</p>
              <p>Sector 75, Noida, Uttar Pradesh 201301</p>
              <p className="mt-3">
                <strong>Phone:</strong>{" "}
                <a href="tel:+919457511854">+91 94 5751 1854</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:team@scrapworker.com">team@scrapworker.com</a>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a
                href="https://x.com/scrapworker_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://facebook.com/scrapworker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://instagram.com/scrapworker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://linkedin.com/company/scrapworker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Dynamic Footer Sections */}
          {footerSections.map(({ title, links }) => (
            <div key={title} className="col-lg-2 col-md-3 footer-links">
              <h4>{title}</h4>
              <ul>
                {links.map(({ text, href }) => (
                  <li key={text}>
                    <Link href={href}>{text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>{new Date().getFullYear()}</span>{" "}
          <strong className="px-1 sitename">ScrapWorker</strong> All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
