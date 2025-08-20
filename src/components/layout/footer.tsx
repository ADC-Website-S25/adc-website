"use client";
import React, { useState } from "react";

const Footer = () => {
  const [emailMessage, setEmailMessage] = useState("");
  const year = new Date().getFullYear();
  const mailto = `mailto:umdappdev@gmail.com?subject=${encodeURIComponent(
    "Information Request"
  )}&body=${encodeURIComponent(emailMessage)}`;
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailMessage(e.target.value);
  };
  return (
    <footer className="relative bg-white w-full h-96 p-10">

      {/* back to top button */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => {
          const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;
          window.scrollTo({
            top: 0,
            behavior: prefersReduced ? "auto" : "smooth",
          });
        }}
        className="flex absolute top-1 gap-1 right-1 font-bold focus-visible:ring-2 focus-visible:ring-black/30 items-center p-3 rounded hover:bg-[#0083FF] cursor-pointer transition-colors duration-100 text-xs"
      >
        <img src="/back-to-top2.png" alt="Back to Top" className="w-4 h-4" />
      </button>

      <div className="flex flex-col justify-center items-center w-full h-full gap-y-8">
        {/* logo */}
        <a href="/">
          <img src="/adc_logo_black.png" alt="ADC Logo" className="w-64" />
        </a>

        {/* social media icons */}
        <div className="flex gap-5 items-center">
          <a
            href="https://www.instagram.com/appdev_umd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ig-icon.png" alt="Instagram" className="w-7 h-auto" />
          </a>
          <a
            href="https://www.linkedin.com/company/app-development-club/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin-icon.png"
              alt="LinkedIn"
              className="w-7 h-auto"
            />
          </a>
          <a
            href="https://github.com/appdevumd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github-icon.png" alt="GitHub" className="w-7 h-auto" />
          </a>
          <a
            href="mailto:umdappdev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <img src="/email-icon2.svg" alt="Email" className="w-7 h-auto" />
          </a>
          <a
            href="https://discord.com/invite/scSeVbTT7G"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/discord-icon.svg" alt="Discord" className="w-7 h-auto" />
          </a>
        </div>

        {/* email input */}
        <div className="w-full flex justify-center">
          <div className="w-[80%] md:w-3/5 lg:w-2/5 relative">
            <label htmlFor="footer-message" className="sr-only">
              Your message
            </label>
            <input
              id="footer-message"
              type="text"
              placeholder="Drop us a message!"
              value={emailMessage}
              onChange={handleEmailChange}
              className={`w-full rounded-lg border border-black p-3 bg-transparent text-black placeholder-black/70 pr-10
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 ${
                        emailMessage ? "font-bold" : ""
                      }`}
            />
            <a
              href={mailto}
              aria-label="Open email client with message"
              className="
             focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            >
              <img
                src="/send-icon.png"
                alt="Send"
                className="w-5 absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </a>
          </div>
        </div>
      </div>

      {/* bottom text */}
      <div className="w-full absolute inset-x-0 bottom-5 text-center text-black">
        © {year} App Dev Club LLC
      </div>
    </footer>
  );
};

export default Footer;
