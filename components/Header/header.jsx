"use client";
import React, { useState } from "react";

// Inline SVG for Envelope Icon
const IconEnvelope = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7" />
  </svg>
);

// Mock Link Component
const Link = ({ href, children, className = "" }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// ========================================================================

const Header = () => {
  const [open, setOpen] = useState(false);

  // 🌟 ADD THIS CLASS FOR DESKTOP HOVER EFFECT 🌟
  const desktopNavLinkClass =
    "relative text-gray-700 font-s text-lg hover:text-blue-600 transition-colors duration-300 whitespace-nowrap " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full " +
    "after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-colors duration-300 font-inter py-3">
      {/* Outer full-width wrapper */}
      <div className="w-full flex items-center justify-between px-4 h-12">
        {/* Logo - fixed left */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="PropertyWiz Logo"
            className="w-auto max-w-[140px] md:max-w-[100px] lg:max-w-[200px] object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
               {" "}
          <Link href="/" className={desktopNavLinkClass}>
            Home
          </Link>
               {" "}
          <Link href="/services" className={desktopNavLinkClass}>
            Our Services
          </Link>
               {" "}
          <Link href="/process" className={desktopNavLinkClass}>
            Our Process
          </Link>
               {" "}
          <Link href="/solutions" className={desktopNavLinkClass}>
            Our Solutions
          </Link>
               {" "}
          <Link href="/contact" className={desktopNavLinkClass}>
            Contact Us
          </Link>
             {" "}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/report.pdf"
            className="flex items-center bg-blue-600 text-white px-5 py-2 rounded-full font-semibold"
          >
            Download Report
          </Link>

          <Link
            href="/brochure.pdf"
            className="flex items-center bg-green-600 text-white px-5 py-2 rounded-full font-semibold"
          >
            📄 Brochure
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1 mr-7"
          onClick={() => setOpen(!open)}
        >
          <span className="h-1 w-6 bg-gray-800 rounded"></span>
          <span className="h-1 w-6 bg-gray-800 rounded"></span>
          <span className="h-1 w-6 bg-gray-800 rounded"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white pr-20 pl-6 py-4 space-y-4 shadow">
          <Link href="/" className="block text-gray-700 text-lg">
            Home
          </Link>
          <Link href="/services" className="block text-gray-700 text-lg">
            Our Services
          </Link>
          <Link href="/process" className="block text-gray-700 text-lg">
            Our Process
          </Link>
          <Link href="/solutions" className="block text-gray-700 text-lg">
            Our Solutions
          </Link>
          <Link href="/contact" className="block text-gray-700 text-lg">
            Contact Us
          </Link>

          <div className="pt-4 space-y-3">
            <Link
              href="/report.pdf"
              className="block w-full text-center bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold"
            >
              Download Report
            </Link>

            <Link
              href="/brochure.pdf"
              className="block w-full text-center bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold"
            >
              📄 Brochure
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
