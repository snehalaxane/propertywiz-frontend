// "use client";
// import React from "react";

// // Inline SVG for Envelope Icon
// const IconEnvelope = (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7"/></svg>
// );

// // Mock Link Component (created once, outside render)
// const Link = ({ href, children, className = "" }) => (
//     <a href={href} className={className}>{children}</a>
// );

// // =========================================================================

// const Header = () => {
//   return (
//     // Clean, light background with subtle shadow and glass effect
//     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-colors duration-300 font-inter py-3">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-16">

//         {/* Logo - Retained original image tag as requested */}
//        <div className="flex items-end">
//           <img
//             src="/logo.png" 
//             alt="PropertyWiz Logo"
//             className="h-35 w-45 object-contain" 
//           />
//         </div>

//         {/* Navigation - Enhanced Links with modern underline hover */}
//         <nav className="hidden md:flex space-x-8">
//           <Link href="/" className="text-gray-700 font-medium text-lg relative group transition-colors duration-300 hover:text-blue-600">
//             Home
//             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//           </Link>
//           <Link href="/services" className="text-gray-700 font-medium text-lg relative group transition-colors duration-300 hover:text-blue-600">
//             Our Services
//             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//           </Link>
//           <Link href="/process" className="text-gray-700 font-medium text-lg relative group transition-colors duration-300 hover:text-blue-600">
//             Our Process
//             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//           </Link>
//           <Link href="/solutions" className="text-gray-700 font-medium text-lg relative group transition-colors duration-300 hover:text-blue-600">
//             Our Solutions
//             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//           </Link>
//           <Link href="/contact" className="text-gray-700 font-medium text-lg relative group transition-colors duration-300 hover:text-blue-600">
//             Contact Us
//             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//           </Link>
//         </nav>

//         {/* Right side actions - Modern Button */}
//         <div className="flex items-center space-x-4">
//           <Link
//             href="/report.pdf"
//             // Modern Button Styling
//             className="flex items-center bg-blue-600 text-white px-5 py-2.5 text-base font-semibold rounded-full 
//                        transition transform hover:scale-105 hover:bg-blue-700 
//                        shadow-lg shadow-blue-500/40 active:scale-95 duration-300 whitespace-nowrap"
//           >
//             <IconEnvelope className="w-5 h-5 mr-2" />
//             Download Report
//           </Link>

//            {/* ⭐ Download Brochure */}
//   <Link
//     href="/brochure.pdf"   // <-- put your brochure pdf inside public folder
//     className="flex items-center bg-green-600 text-white px-5 py-2.5 text-base font-semibold rounded-full 
//                transition transform hover:scale-105 hover:bg-green-700 
//                shadow-lg shadow-green-500/40 active:scale-95 duration-300 whitespace-nowrap"
//   >
//     📄 Brochure
//   </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




// "use client";
// import React, { useState } from "react";

// // Inline SVG for Envelope Icon
// const IconEnvelope = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect width="20" height="16" x="2" y="4" rx="2" />
//     <path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7" />
//   </svg>
// );

// // Mock Link Component
// const Link = ({ href, children, className = "" }) => (
//   <a href={href} className={className}>
//     {children}
//   </a>
// );

// // ========================================================================

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-colors duration-300 font-inter py-3">
//     <div className="max-w-7xl mx-auto flex items-center justify-between px-0 lg:px-0 h-8">

//   {/* Logo */}
//   <div className="flex items-start justify-start">
//     <img
//       src="/logo.png"
//       alt="PropertyWiz Logo"
//       className="h-20 w-50 object-contain"
//     />
//   </div>


//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-8">
//           <Link href="/" className="text-gray-700 font-medium text-lg relative group hover:text-blue-600">
//             Home
//             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
//           </Link>
//           <Link href="/services" className="text-gray-700 font-medium text-lg relative group hover:text-blue-600">
//             Our Services
//             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
//           </Link>
//           <Link href="/process" className="text-gray-700 font-medium text-lg relative group hover:text-blue-600">
//             Our Process
//             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
//           </Link>
//           <Link href="/solutions" className="text-gray-700 font-medium text-lg relative group hover:text-blue-600">
//             Our Solutions
//             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
//           </Link>
//           <Link href="/contact" className="text-gray-700 font-medium text-lg relative group hover:text-blue-600">
//             Contact Us
//             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
//           </Link>
//         </nav>

//         {/* Right Buttons (Desktop Only) */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link
//             href="/report.pdf"
//             className="flex items-center bg-blue-600 text-white px-5 py-2.5 text-base font-semibold rounded-full 
//                        transition transform hover:scale-105 hover:bg-blue-700 
//                        shadow-lg shadow-blue-500/40 active:scale-95 duration-300 whitespace-nowrap"
//           >
//             <IconEnvelope className="w-5 h-5 mr-2" />
//             Download Report
//           </Link>

//           <Link
//             href="/brochure.pdf"
//             className="flex items-center bg-green-600 text-white px-5 py-2.5 text-base font-semibold rounded-full 
//                        transition transform hover:scale-105 hover:bg-green-700 
//                        shadow-lg shadow-green-500/40 active:scale-95 duration-300 whitespace-nowrap"
//           >
//             📄 Brochure
//           </Link>
//         </div>

//         {/* Mobile Hamburger Button */}
//         <button
//           className="md:hidden flex flex-col space-y-1"
//           onClick={() => setOpen(!open)}
//         >
//           <span className="h-1 w-6 bg-gray-800 rounded"></span>
//           <span className="h-1 w-6 bg-gray-800 rounded"></span>
//           <span className="h-1 w-6 bg-gray-800 rounded"></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow">
//           <Link href="/" className="block text-gray-700 text-lg">Home</Link>
//           <Link href="/services" className="block text-gray-700 text-lg">Our Services</Link>
//           <Link href="/process" className="block text-gray-700 text-lg">Our Process</Link>
//           <Link href="/solutions" className="block text-gray-700 text-lg">Our Solutions</Link>
//           <Link href="/contact" className="block text-gray-700 text-lg">Contact Us</Link>

//           <div className="pt-4 space-y-3">
//             <Link
//               href="/report.pdf"
//               className="block w-full text-center bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold"
//             >
//               Download Report
//             </Link>

//             <Link
//               href="/brochure.pdf"
//               className="block w-full text-center bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold"
//             >
//               📄 Brochure
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;





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

  return (
   <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-colors duration-300 font-inter py-3">

  {/* Outer full-width wrapper */}
  <div className="w-full flex items-center justify-between px-4 h-7">

    {/* Logo - fixed left */}
    <div className="flex items-center">
      <img
        src="/logo.png"
        alt="PropertyWiz Logo"
        className="h-20 w-30 object-contain"   // smaller for mobile
      />
    </div>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center space-x-8">
      <Link href="/" className="text-gray-700 font-medium text-lg hover:text-blue-600">Home</Link>
      <Link href="/services" className="text-gray-700 font-medium text-lg hover:text-blue-600">Our Services</Link>
      <Link href="/process" className="text-gray-700 font-medium text-lg hover:text-blue-600">Our Process</Link>
      <Link href="/solutions" className="text-gray-700 font-medium text-lg hover:text-blue-600">Our Solutions</Link>
      <Link href="/contact" className="text-gray-700 font-medium text-lg hover:text-blue-600">Contact Us</Link>
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

      <Link href="/" className="block text-gray-700 text-lg">Home</Link>
      <Link href="/services" className="block text-gray-700 text-lg">Our Services</Link>
      <Link href="/process" className="block text-gray-700 text-lg">Our Process</Link>
      <Link href="/solutions" className="block text-gray-700 text-lg">Our Solutions</Link>
      <Link href="/contact" className="block text-gray-700 text-lg">Contact Us</Link>

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
