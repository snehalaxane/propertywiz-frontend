"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arjun Mehta",
    location: "Mumbai",
    text: "PropertyWiz helped me understand the true value of my home. The process was smooth, and the advice was spot-on!",
    img: "/client1.jpg",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    text: "Accurate valuations and excellent customer service. I highly recommend PropertyWiz for anyone looking to invest smartly.",
    img: "/client2.jpg",
  },
  {
    name: "Rahul Verma",
    location: "Pune",
    text: "Professional and reliable. Their insights helped me make informed decisions for my properties.",
    img: "/client3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-2">
           Trusted by homeowners and investors alike. Hear what they have to say about our services.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-2xl p-8 w-[320px] border border-gray-200 relative"
          >
            {/* Floating Animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white"
              />
            </motion.div>

            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.location}</p>

              {/* Stars */}
              <div className="flex justify-center mt-3 text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-700 mt-4">{t.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}



