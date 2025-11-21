import Image from 'next/image';

const propertyTypes = [
  { title: 'APARTMENT', count: 12, image: '/apartment.jpg' },
  { title: 'OFFICE', count: 1, image: '/office.jpg' },
  { title: 'SHOP', count: 2, image: '/shop.jpg' },
  { title: 'SINGLE FAMILY HOME', count: 12, image: '/single-family.jpg' },
  { title: 'STUDIO', count: 4, image: '/studio.jpg' },
];

export default function PropertyTypeShowcase() {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-slate-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header + CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">
            Explore Property Types That Fit Your Lifestyle
          </h2>
          <button className="mt-4 md:mt-0 bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-yellow-500 transition">
            VIEW MORE
          </button>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={type.image}
                  alt={type.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.count} Properties</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}