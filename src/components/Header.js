"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Preloader from "./Preloader";
import Aos from "aos";

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    const handleScroll = () => {
      const body = document.body;
      const header = document.querySelector("#header");
      if (
        header?.classList.contains("scroll-up-sticky") ||
        header?.classList.contains("sticky-top") ||
        header?.classList.contains("fixed-top")
      ) {
        window.scrollY > 100
          ? body.classList.add("scrolled")
          : body.classList.remove("scrolled");
      }
    };

    const toggleMobileNav = () => {
      const body = document.body;
      const toggleBtn = document.querySelector(".mobile-nav-toggle");
      body.classList.toggle("mobile-nav-active");
      toggleBtn?.classList.toggle("bi-list");
      toggleBtn?.classList.toggle("bi-x");
    };

    const handleDropdownToggle = (e) => {
      e.preventDefault();
      e.currentTarget.parentNode.classList.toggle("active");
      e.currentTarget.nextElementSibling.classList.toggle("dropdown-active");
    };

    const setupEventListeners = () => {
      // Scroll behavior
      document.addEventListener("scroll", handleScroll);

      // Mobile nav toggle
      const toggleBtn = document.querySelector(".mobile-nav-toggle");
      if (toggleBtn) toggleBtn.addEventListener("click", toggleMobileNav);

      // Close mobile nav on link click
      const navLinks = document.querySelectorAll("#navmenu a");
      navLinks.forEach((link) =>
        link.addEventListener("click", () => {
          if (document.body.classList.contains("mobile-nav-active")) {
            toggleMobileNav();
          }
        })
      );

      // Handle dropdown toggles
      const dropdownToggles = document.querySelectorAll(
        ".navmenu .toggle-dropdown"
      );
      dropdownToggles.forEach((toggle) =>
        toggle.addEventListener("click", handleDropdownToggle)
      );
    };
    const checkAppReady = async () => {
      // Perform any necessary setup tasks here
      await Promise.all([
        document.fonts.ready, // Ensure all fonts are loaded
        new Promise((resolve) => requestAnimationFrame(resolve)), // Ensure DOM is fully rendered
      ]);
      setIsLoading(false); // Mark app as ready
    };

    checkAppReady();
    setupEventListeners();

    return () => {
      // Cleanup event listeners
      document.removeEventListener("scroll", handleScroll);

      const toggleBtn = document.querySelector(".mobile-nav-toggle");
      if (toggleBtn) toggleBtn.removeEventListener("click", toggleMobileNav);

      const navLinks = document.querySelectorAll("#navmenu a");
      navLinks.forEach((link) =>
        link.removeEventListener("click", toggleMobileNav)
      );

      const dropdownToggles = document.querySelectorAll(
        ".navmenu .toggle-dropdown"
      );
      dropdownToggles.forEach((toggle) =>
        toggle.removeEventListener("click", handleDropdownToggle)
      );
    };
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navmenu ul li a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`#navmenu a[href="#${id}"]`);

          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active"));
            if (link) link.classList.add("active");
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold to match visibility percentage
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header id="header" className="header sticky-top">
      <Preloader loading={isLoading} />
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@scrapworker.com">
                contact@scrapworker.com
              </a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <a href="tel:+919457511854">+91 94 5751 1854</a>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a
              href="https://x.com/scrapworker_"
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              href="https://www.facebook.com/scrapworker"
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/scrapworker/"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/scrapworker"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Branding Section */}
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link href="/" className="logo d-flex align-items-center me-auto">
            <Image
              src="/img/logo.svg"
              alt="ScrapWorker Logo"
              width={40}
              height={40}
              priority
            />
            <h1 className="sitename">
              Scrap<span>Worker</span>
            </h1>
          </Link>

          {/* Navigation */}
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link href="#hero" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#services">Our Services</Link>
              </li>
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#faq">FAQs</Link>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>More</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <Link href="#">Recycling Tips</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                  <li>
                    <Link href="#">Partners</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          {/* Call to Action */}
          <Link className="cta-btn d-none d-sm-block" href="#appointment">
            Schedule a Pickup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
