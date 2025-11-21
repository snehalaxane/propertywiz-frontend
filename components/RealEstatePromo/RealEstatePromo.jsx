// // components/RealEstatePromo.tsx
// import Image from 'next/image';
// import Link from 'next/link';

// export default function RealEstatePromo() {
//   return (
//     <section className="bg-white py-12 px-6 md:px-12">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-gray-800">Real Estate Simplified</h2>
//         <p className="text-lg text-gray-600 mt-2">
//           See how easy the process can be when you are guided by pros.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Buy Panel */}
//         <div className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
//           <Image
//             src="/buy-home.png" // Replace with your image path
//             alt="Buying a home"
//             width={300}
//             height={200}
//             className="rounded-md mb-4"
//           />
//           <h3 className="text-xl font-semibold text-gray-800">Looking to Buy?</h3>
//           <p className="text-gray-600 mt-2">
//             We will walk you through each step with clarity and care.
//           </p>
//          <Link
//   href="/buy"
//   className="mt-4 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
// >
//   Buy Your Home
// </Link>
//         </div>

//         {/* Sell Panel */}
//         <div className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
//           <Image
//             src="/sell-home.png" // Replace with your image path
//             alt="Selling a home"
//             width={300}
//             height={200}
//             className="rounded-md mb-4"
//           />
//           <h3 className="text-xl font-semibold text-gray-800">Thinking of Selling?</h3>
//           <p className="text-gray-600 mt-2">
//             Get insights and tools to list, market, and close confidently.
//           </p>
//          <Link
//   href="/sell"
//   className="mt-4 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
// >
//   Sell Your Home
// </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



// components/RealEstatePromo.tsx
// import Image from 'next/image';
// import Link from 'next/link';

// export default function RealEstatePromo() {
//   return (
//     <section className="bg-white py-12 px-6 md:px-12">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-gray-800">Real Estate Simplified</h2>
//         <p className="text-lg text-gray-600 mt-2">
//           See how easy the process can be when you are guided by pros.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Buy Panel */}
//         <div className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
//           <Image
//             src="/buy-home.png" // Replace with your image path
//             alt="Buying a home"
//             width={300}
//             height={200}
//             className="rounded-md mb-4"
//           />
//           <h3 className="text-xl font-semibold text-gray-800">Looking to Buy?</h3>
//           <p className="text-gray-600 mt-2">
//             We will walk you through each step with clarity and care.
//           </p>
//          <Link
//   href="/buy"
//   className="mt-4 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
// >
//   Buy Your Home
// </Link>
//         </div>

//         {/* Sell Panel */}
//         <div className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
//           <Image
//             src="/sell-home.png" // Replace with your image path
//             alt="Selling a home"
//             width={300}
//             height={200}
//             className="rounded-md mb-4"
//           />
//           <h3 className="text-xl font-semibold text-gray-800">Thinking of Selling?</h3>
//           <p className="text-gray-600 mt-2">
//             Get insights and tools to list, market, and close confidently.
//           </p>
//          <Link
//   href="/sell"
//   className="mt-4 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
// >
//   Sell Your Home
// </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


// import Image from 'next/image';
// import Link from 'next/link';

// export default function RealEstatePromo() {
//   return (
//     <section className="bg-gradient-to-br from-white via-slate-50 to-slate-100 py-16 px-6 md:px-12">
//       {/* Header */}
//       <div className="text-center mb-14">
//         <h2 className="text-4xl font-bold text-gray-800">Real Estate Simplified</h2>
//         <p className="text-lg text-gray-600 mt-3">
//           See how easy the process can be when you are guided by pros.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Buy Card */}
//         <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
//           <Image
//             src="/buy-home.png"
//             alt="Buying a home"
//             width={320}
//             height={200}
//             className="rounded-md mb-6"
//           />
//           <h3 className="text-2xl font-semibold text-gray-800">Looking to Buy?</h3>
//           <p className="text-gray-600 mt-3">
//             We will walk you through each step with clarity and care.
//           </p>
//           <Link
//             href="/buy"
//             className="mt-6 bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition"
//           >
//             Buy Your Home
//           </Link>
//         </div>

//         {/* Sell Card */}
//         <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
//           <Image
//             src="/sell-home.png"
//             alt="Selling a home"
//             width={320}
//             height={200}
//             className="rounded-md mb-6"
//           />
//           <h3 className="text-2xl font-semibold text-gray-800">Thinking of Selling?</h3>
//           <p className="text-gray-600 mt-3">
//             Get insights and tools to list, market, and close confidently.
//           </p>
//           <Link
//             href="/sell"
//             className="mt-6 bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition"
//           >
//             Sell Your Home
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from 'next/image';
import Link from 'next/link';

export default function RealEstatePromo() {
  return (
    <section className="bg-gradient-to-br from-white via-slate-100 to-slate-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">Real Estate Simplified</h2>
          <p className="text-lg text-gray-600 mt-3">
            See how easy the process can be when you are guided by pros.
          </p>
        </div>

        {/* Side-by-side cards with tight gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Buy Card */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center">
            <Image
              src="/buy-home.png"
              alt="Buying a home"
              width={320}
              height={200}
              className="rounded-md mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800">Looking to Buy?</h3>
            <p className="text-gray-600 mt-3">
              We will walk you through each step with clarity and care.
            </p>
            <Link
              href="/buy"
              className="mt-6 bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition"
            >
              Buy Your Home
            </Link>
          </div>

          {/* Sell Card */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center">
            <Image
              src="/sell-home.png"
              alt="Selling a home"
              width={320}
              height={200}
              className="rounded-md mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800">Thinking of Selling?</h3>
            <p className="text-gray-600 mt-3">
              Get insights and tools to list, market, and close confidently.
            </p>
            <Link
              href="/sell"
              className="mt-6 bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition"
            >
              Sell Your Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}