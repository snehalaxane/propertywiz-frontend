"use client";
import React, { useState } from 'react';

// === INLINE SVG ICON DEFINITION ===
const IconFileDownload = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M256 0h-48C103.5 0 0 103.5 0 232c0 101.4 69.4 186 163.6 214.1c-1.3 4.9-2.3 9.8-3.4 14.8c-12.8 59.9-74.6 70.3-107.5 70.3c-2.7 0-5.5-.1-8.2-.3c-11.7-.8-22.3 8.3-23.1 20c-.8 11.7 8.3 22.3 20 23.1c1.8 .1 3.7 .2 5.5 .2c45.9 0 94.6-18.7 113.8-103.5c1.4-6.4 2.5-12.9 3.4-19.4c.1-.8 .2-1.6 .3-2.4c.7-5 1.5-10 2.5-15c15.8-9.4 33.2-16.6 51.5-21.7c47.5-13.4 92.8-38.1 129.5-73.6c47.9-46.1 76.8-109.8 76.8-177.2C512 103.5 408.5 0 280 0h-24zm0 64h24c75.6 0 137.1 61.4 137.1 137.1c0 53-29.3 100.3-75.1 124.9l-22.4 11.8c-17.6 9.3-37.5 14.2-57.6 14.2c-20.1 0-40-4.9-57.6-14.2l-22.4-11.8C154.2 301.4 125.1 254.1 125.1 201.1C125.1 125.4 186.6 64 256 64z"/>
  </svg>
);

export default function DownloadReport() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    console.log("Form submitted. Simulating file download...");
    setIsDownloaded(true);

    setTimeout(() => {
      setIsDownloaded(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <main className="flex-1 flex items-center justify-center py-28 px-4 sm:px-6 lg:px-8 font-inter relative z-10">
        <div className="max-w-5xl w-full space-y-12">
          
          {/* Page Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-black mb-4 tracking-tight">
              The <span className="text-blue-400">Due Diligence</span> Report
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Get an instant, high-level preview of our comprehensive verification audit process.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:shadow-blue-500/50 transition duration-500">
            
            {/* Left Column */}
            <div className="lg:col-span-1 bg-blue-700 p-8 flex flex-col justify-between text-white">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold border-b border-blue-600 pb-2 mb-4">
                  Whats Inside?
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start">
                    <span className="text-blue-300 font-bold mr-3 mt-1 text-lg">1.</span>
                    <p>In-depth Risk Assessment Methodology</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 font-bold mr-3 mt-1 text-lg">2.</span>
                    <p>Sample Findings & Verification Evidence</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 font-bold mr-3 mt-1 text-lg">3.</span>
                    <p>Compliance and Regulatory Checklist</p>
                  </li>
                </ul>
              </div>
              <div className="mt-8 text-sm text-blue-200">
                <p>The sample is a high-quality PDF designed for quick understanding.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 p-8 md:p-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Access Your Preview
              </h3>

              <form className="space-y-6" onSubmit={handleDownload}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputGroup id="full-name" label="Full Name" type="text" placeholder="John Doe" />
                  <InputGroup id="email-address" label="Business Email" type="email" placeholder="your.email@company.com" required />
                </div>
                <InputGroup id="phone-number" label="Phone Number (Optional)" type="tel" placeholder="(555) 123-4567" />

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isDownloaded}
                    className={`group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-xl font-bold rounded-xl 
                               text-white transition duration-300 ease-in-out shadow-lg 
                               ${isDownloaded 
                                 ? 'bg-green-500 hover:bg-green-600 cursor-not-allowed' 
                                 : 'bg-blue-600 hover:bg-blue-800 transform hover:scale-[1.01] focus:ring-4 focus:ring-blue-300'}`}
                  >
                    <span className="mr-3">
                      <IconFileDownload className="w-6 h-6 text-white" aria-hidden="true" />
                    </span>
                    {isDownloaded ? 'Download Initiated (Check Console)' : 'Get Instant Report'}
                  </button>
                  <p className="mt-4 text-center text-sm text-gray-500">
                    By clicking Get Instant Report, you agree to our terms and conditions.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// === HELPER COMPONENT ===
const InputGroup = ({ id, label, type, placeholder, required = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}{required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      autoComplete={id.includes('email') ? 'email' : id.includes('name') ? 'name' : id.includes('phone') ? 'tel' : 'off'}
      required={required}
      className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 text-gray-900 
                 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base transition duration-200 shadow-sm"
      placeholder={placeholder}
    />
  </div>
);
