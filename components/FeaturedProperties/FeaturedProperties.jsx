export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      image: "/property1.jpg",
      price: "₹85,00,000",
      location: "Gachibowli, Hyderabad",
      details: "3 BHK • 1650 Sq.ft • East Facing",
    },
    {
      id: 2,
      image: "/property2.jpg",
      price: "₹62,00,000",
      location: "Whitefield, Bangalore",
      details: "2 BHK • 1250 Sq.ft • Pool View",
    },
    {
      id: 3,
      image: "/property3.jpg",
      price: "₹1,25,00,000",
      location: "Baner, Pune",
      details: "3 BHK • 1800 Sq.ft • Luxury Tower",
    },
    {
      id: 4,
      image: "/property4.jpg",
      price: "₹45,00,000",
      location: "Wakad, Pune",
      details: "1 BHK • 750 Sq.ft • Newly Built",
    },
    {
      id: 5,
      image: "/property5.jpg",
      price: "₹98,00,000",
      location: "Thane West, Mumbai",
      details: "2 BHK • 1400 Sq.ft • Semi-Furnished",
    },
    {
      id: 6,
      image: "/property6.jpg",
      price: "₹2,50,00,000",
      location: "Jubilee Hills, Hyderabad",
      details: "4 BHK • 2600 Sq.ft • Premium Villa",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Featured Properties
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our top hand-picked properties. Premium homes, prime locations, 
          and the best deals curated specially for you.
        </p>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((p) => (
            <div 
              key={p.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img src={p.image} alt="" className="w-full h-56 object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{p.price}</h3>
                <p className="text-gray-600 mt-1">{p.location}</p>
                <p className="text-gray-500 text-sm mt-2">{p.details}</p>

                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
