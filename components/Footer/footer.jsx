// // components/Footer.tsx
// import Link from 'next/link';

// export default function Footer() {
//   return (
//    <footer className="bg-[#111827] text-gray-100 py-10 px-6 md:px-12">
//   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
//     {/* Logo + Tagline */}
//     {/* Logo + Tagline in Footer */}
// <div className="relative inline-block">
//   <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-400">
//     PropertyWiz
//   </h1>
//   <span className="absolute left-[4.2rem] top-full text-sm text-gray-200 italic mt-1">
//     Simply Smarter
//   </span>
// </div>

//     {/* Navigation */}
//     <div>
//       <h4 className="text-lg font-semibold mb-2">Services</h4>
//       <ul className="space-y-2 text-sm">
//         <li><Link href="/">Home</Link></li>
//         <li><Link href="/buy">Buy</Link></li>
//         <li><Link href="/sell">Sell</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//       </ul>
//     </div>


//     {/* Navigation */}
//     <div>
//       <h4 className="text-lg font-semibold mb-2">Company</h4>
//       <ul className="space-y-2 text-sm">
//         <li><Link href="/">Blog</Link></li>
//         <li><Link href="/buy">FAQs</Link></li>
//         <li><Link href="/sell">Team</Link></li>
//         <li><Link href="/contact">Pricing</Link></li>
//       </ul>
//     </div>

//     {/* Contact Info */}
//     <div>
//       <h4 className="text-lg font-semibold mb-2">Contact</h4>
//       <p className="text-sm">📞 +91 98765 43210</p>
//       <p className="text-sm">📧 info@propertywiz.com</p>
//       <p className="text-sm">🏢 123 Hyderabad, Telegana, India</p>
//     </div>
//   </div>

//   {/* Bottom Bar */}
//   <div className="mt-10 text-center text-xs text-gray-200">
//     © {new Date().getFullYear()} PropertyWiz. All rights reserved.
//   </div>
// </footer>
//   );
// }



// components/Footer.tsx
// import Link from 'next/link';

// export default function Footer() {
//   return (
//    <footer className="bg-[#111827] text-gray-100 py-12 px-6 md:px-12">
//   <div className="max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8">
//     {/* Logo + Tagline */}
//     <div className="flex flex-col items-start md:col-span-1 ml-0">
//       <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-400">
//         PropertyWiz
//       </h1>
//       <span className="text-sm text-gray-200 italic mt-1 ml-15">
//         Simply Smarter
//       </span>
//     </div>

//         {/* Services */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
//           <ul className="space-y-2 text-sm">
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/buy">Buy</Link></li>
//             <li><Link href="/sell">Sell</Link></li>
//             <li><Link href="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
//           <ul className="space-y-2 text-sm">
//             <li><Link href="/">Blog</Link></li>
//             <li><Link href="/buy">FAQs</Link></li>
//             <li><Link href="/sell">Team</Link></li>
//             <li><Link href="/contact">Pricing</Link></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
//           <ul className="space-y-2 text-sm text-gray-200">
//             <li>📞 +91 9390885007</li>
//             <li>📧 info@propertywiz.com</li>
//             <li>🏢 123 Hyderabad, Telangana, India</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="mt-5 border-t border-white/20 pt-4 text-center text-xs text-gray-200">
//         © {new Date().getFullYear()} PropertyWiz. All rights reserved.
//       </div>
//     </footer>
//   );
// }



// components/Footer.tsx
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-[#0f172a] text-white px-6 py-12 md:px-20">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Brand + Social */}
//         <div className="flex flex-col items-start md:col-span-1">
//   <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-400">
//     PropertyWiz
//   </h1>
//   <span className="text-sm text-gray-200 italic mt-1 ml-15">
//     Simply Smarter
//   </span>
//   <p className="text-sm text-gray-400 mt-4 mb-6 max-w-xs">
//     We are committed to helping you succeed, and we will work with you every step of the way.
//   </p>

//   <div className="flex space-x-4 mb-5">
//     <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
//     <FaTwitter className="hover:text-sky-400 cursor-pointer" />
//     <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
//     <FaInstagram className="hover:text-pink-500 cursor-pointer" />
//   </div>

//   <p className="text-sm text-gray-400">© 2025 PropertyWiz. All Rights Reserved.</p>
// </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Services</h3>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             <li>Home</li>
//             <li>Services</li>
//             <li>Process</li>
//             <li>Report</li>
//             <li>Contact</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Company</h3>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             <li>Blog</li>
//             <li>FAQs</li>
//             <li>Team</li>
//             <li>Pricing</li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
//           <p className="text-sm text-gray-400 mb-4">
//             Subscribe our newsletter to get the latest news and updates!
//           </p>
//           <div className="flex items-center border border-gray-600 rounded overflow-hidden">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="bg-transparent px-4 py-2 w-full text-sm text-white placeholder-gray-400 focus:outline-none"
//             />
//             <button className="bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700">
//               Send
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//     <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row md:justify-between md:items-center md:space-x-8 text-center md:text-left">
 
//   <p>Phone: 123-456-7890</p>
//   <p>Email: Propertywiz@mail.com</p>
//   <p>Address: 123 Hyderabad, Telangana, India</p>
// </div>
//     </footer>
//   );
// }


// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-[#0f172a] text-white px-6 py-12 md:px-20">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* Brand + Social */}
//         <div className="flex flex-col items-start md:col-span-1">
//           <h1 className="text-2xl font-bold text-blue-500">PropertyWiz</h1>
//           <span className="text-sm text-gray-300 italic mt-1 ml-15">Simply Smarter</span>

//           <p className="text-sm text-gray-400 mt-4 mb-6 max-w-xs">
//             We are committed to helping you succeed, and we will work with you every step of the way.
//           </p>

//           <div className="flex space-x-4 mb-5">
//             <FaFacebookF className="hover:text-blue-500 cursor-pointer transition-colors duration-300" />
//             <FaTwitter className="hover:text-sky-400 cursor-pointer transition-colors duration-300" />
//             <FaLinkedinIn className="hover:text-blue-700 cursor-pointer transition-colors duration-300" />
//             <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors duration-300" />
//           </div>

//           <p className="text-sm text-gray-400 mt-auto">© 2025 PropertyWiz. All Rights Reserved.</p>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Services</h3>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Home</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Services</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Process</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Report</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Contact</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Company</h3>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Blog</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">FAQs</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Team</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Pricing</li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
//           <p className="text-sm text-gray-400 mb-4">
//             Subscribe to our newsletter to get the latest news and updates!
//           </p>
//           <div className="flex items-center border border-gray-600 rounded-full overflow-hidden">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="bg-transparent px-4 py-2 w-full text-sm text-white placeholder-gray-400 focus:outline-none"
//             />
//             <button className="bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors duration-300 rounded-r-full">
//               Send
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left space-y-2 md:space-y-0">
//         <p>Phone: 123-456-7890</p>
//         <p>Email: Propertywiz@mail.com</p>
//         <p>Address: 123 Hyderabad, Telangana, India</p>
//       </div>
//     </footer>
//   );
// }


// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-[#0f172a] text-white px-6 py-12 md:px-20">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* Brand + Social */}
//         <div className="flex flex-col items-start md:col-span-1">
//           <h1 className="text-2xl font-bold text-blue-500">PropertyWiz</h1>
//           <span className="text-sm text-gray-300 italic mt-1 ml-15">
//             Simply Smarter
//           </span>

//           <p className="text-sm text-gray-400 mt-4 mb-6 max-w-xs">
//             We are committed to helping you succeed, and we will work with you every step of the way.
//           </p>

//           <div className="flex space-x-4 mb-5">
//             <FaFacebookF className="hover:text-blue-500 cursor-pointer transition-colors duration-300" />
//             <FaTwitter className="hover:text-sky-400 cursor-pointer transition-colors duration-300" />
//             <FaLinkedinIn className="hover:text-blue-700 cursor-pointer transition-colors duration-300" />
//             <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors duration-300" />
//           </div>

//           <p className="text-sm text-gray-400 mt-auto">
//             © 2025 PropertyWiz. All Rights Reserved.
//           </p>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Services</h3>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Home</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Services</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Process</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Report</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Contact</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Company</h3>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Blog</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">FAQs</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Team</li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">Pricing</li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
//           <p className="text-sm text-gray-400 mb-4">
//             Subscribe to our newsletter to get the latest news and updates!
//           </p>
//           <div className="flex items-center border border-gray-600 rounded-full overflow-hidden">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="bg-transparent px-4 py-2 w-full text-sm text-white placeholder-gray-400 focus:outline-none"
//             />
//             <button className="bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors duration-300 rounded-r-full">
//               Send
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left space-y-2 md:space-y-0">
//         <p>Phone: 123-456-7890</p>
//         <p>Email: Propertywiz@mail.com</p>
//         <p>Address: 123 Hyderabad, Telangana, India</p>
//       </div>
//     </footer>
//   );
// }


// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-[#0f172a] text-white px-6 py-12 md:px-20">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* Brand + Social */}
//         <div className="flex flex-col items-start md:col-span-1">
//           <h1 className="text-2xl font-bold text-blue-500">PropertyWiz</h1>
//           <span className="text-sm text-gray-300 italic mt-1 ml-15">
//             Simply Smarter
//           </span>

//           <p className="text-sm text-gray-400 mt-4 mb-6 max-w-xs">
//             We are committed to helping you succeed, and we will work with you every step of the way.
//           </p>

//           <div className="flex space-x-4 mb-5">
//             <FaFacebookF className="hover:text-blue-500 cursor-pointer transition-colors duration-300" />
//             <FaTwitter className="hover:text-sky-400 cursor-pointer transition-colors duration-300" />
//             <FaLinkedinIn className="hover:text-blue-700 cursor-pointer transition-colors duration-300" />
//             <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors duration-300" />
//           </div>

//           <p className="text-sm text-gray-400 mt-auto">
//             © 2025 PropertyWiz. All Rights Reserved.
//           </p>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Services</h3>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             {['Home', 'Services', 'Process', 'Report', 'Contact'].map((item) => (
//               <li key={item} className="hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Company</h3>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             {['Blog', 'FAQs', 'Team', 'Pricing'].map((item) => (
//               <li key={item} className="hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
//           <p className="text-sm text-gray-400 mb-4">
//             Subscribe to our newsletter to get the latest news and updates!
//           </p>
//           <div className="flex items-center border border-gray-600 rounded-full overflow-hidden">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="bg-transparent px-4 py-2 w-full text-sm text-white placeholder-gray-400 focus:outline-none"
//             />
//             <button className="bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors duration-300 rounded-r-full">
//               Send
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap text-center md:text-left">
       
//         <p>Phone: 123-456-7890</p>
//         <p>Email: Propertywiz@mail.com</p>
//         <p>Address: 123 Hyderabad, Telangana, India</p>
//       </div>
//     </footer>
//   );
// }


import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white px-6 py-16 md:px-24">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10">
        {/* Brand */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-blue-500">PropertyWiz</h1>
          <p className="text-sm text-gray-300 italic ml-15">Simply Smarter</p>
          <div className="text-sm text-gray-400 space-y-1">
  <p>We are committed to helping </p>
  <p>you succeed, and we will work </p>
  <p>with you every step of the way.</p>
</div>
          <div className="flex space-x-4 pt-2">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {['Home', 'Services', 'Process', 'Report', 'Contact'].map((item) => (
              <li key={item} className="hover:text-blue-500 cursor-pointer transition">{item}</li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {['Blog', 'FAQs', 'Team', 'Pricing'].map((item) => (
              <li key={item} className="hover:text-blue-500 cursor-pointer transition">{item}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter to get the latest news and updates!
          </p>
          <div className="flex items-center border border-gray-600 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 w-full text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700 transition rounded-r-full">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap text-center md:text-left">
        <p>© 2025 PropertyWiz. All Rights Reserved.</p>

        <p>Phone: 123-456-7890</p>
        <p>Email: Propertywiz@mail.com</p>
        <p>Address: 123 Hyderabad, Telangana, India</p>
      </div>
    </footer>
  );
}