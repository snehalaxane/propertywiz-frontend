// "use client";
// import Link from "next/link";
// import { FaEnvelope } from "react-icons/fa";

// const Header = () => {
//   return (
//     <header className="bg-[#2d7db5] shadow-md px-6 py-4 transition-colors">

//       <div className="flex items-center justify-between">
//         {/* Logo + Tagline */}
//        <div className="relative inline-block">
//   <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-400">
//     PropertyWiz
//   </h1>
//   <span className="absolute left-[4.2rem] top-full text-sm text-gray-200 italic mt-1">
//     Simply Smarter
//   </span>
// </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-200 font-medium">
//           <Link href="/">Home</Link>
//           <Link href="/services">Our Services</Link>
//           <Link href="/process">Our Process</Link>
//           <Link href="/solutions">Our Solutions</Link>
//           <Link href="/contact">Contact Us</Link>
//         </nav>

//         {/* Right side (toggle + button) */}
//         <div className="flex items-center space-x-4">
//           {/* <button
//             onClick={() => {
//               document.documentElement.classList.toggle("dark");
//             }}
//             className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md"
//           >
//             Toggle Theme
//           </button> */}

//           {/* <Link
//             href="/report.pdf"
//             className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             <FaEnvelope className="mr-2" />
//             Download Report
//           </Link> */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


"use client";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#2d7db5] shadow-md px-6 py-5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Tagline */}
  <div className="flex flex-col">
  <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-400">
    PropertyWiz
  </h1>
  <span className="text-sm text-gray-200 italic pl-[4.2rem] mt-1">
    Simply Smarter
  </span>
</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Our Services</Link>
          <Link href="/process">Our Process</Link>
          <Link href="/solutions">Our Solutions</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Right side (optional actions) */}
        <div className="flex items-center space-x-4">
          {/* Uncomment if needed */}
          {/* <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md"
          >
            Toggle Theme
          </button> */}

          {/* Report Download */}
          {/* <Link
            href="/report.pdf"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <FaEnvelope className="mr-2" />
            Download Report
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;