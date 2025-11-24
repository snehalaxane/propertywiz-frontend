"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white px-6 py-10 md:px-15">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10">
        {/* Brand */}
        <div className="space-y-4">
          {/* Logo */}
          <div>
            <img
              src="/logo.png" // replace with your logo path
              alt="PropertyWiz Logo"
              className="w-32 h-auto object-contain"
            />
          </div>

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
          <h3 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Home", "Services", "Process", "Solutions", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-blue-500 cursor-pointer transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-4">
            Company
          </h3>
          <p>Phone: 9390885007</p>
          <p>Email: Propertywiz@mail.com</p>
          <p>Address: 123 Hyderabad, Telangana, India</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-4">
            Newsletter
          </h3>
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
      </div>
    </footer>
  );
}
