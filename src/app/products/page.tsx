"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = {
  cookies: [
    {
      name: "Coconut Cookie",
      price: "140",
      weight: "200",
      image: "/placeholder-cookie.jpg"
    },
    {
      name: "Butter Cookie",
      price: "140",
      weight: "200",
      image: "/placeholder-cookie.jpg"
    },
    {
      name: "Oats Aata Cookie",
      price: "140",
      weight: "200",
      image: "/placeholder-cookie.jpg"
    },
    {
      name: "Cranberry Oats Cookie",
      price: "240",
      weight: "200",
      image: "/placeholder-cookie.jpg"
    },
    {
      name: "Mocha Cookie",
      price: "180",
      weight: "200",
      image: "/placeholder-cookie.jpg"
    },
    {
      name: "Peanut Butter Cookie",
      price: "190",
      weight: "200",
      image: "/placeholder-cookie.jpg"
    },
    {
      name: "Choco Chip Cookie",
      price: "150",
      weight: "200",
      image: "/placeholder-cookie.jpg"
    }
  ],
  muffins: [
    {
      name: "Chocolate Muffin",
      price: "30",
      bulk_price: "180",
      bulk_quantity: "6",
      image: "/placeholder-muffin.jpg"
    },
    {
      name: "Tutti Frutti Muffin",
      price: "30",
      bulk_price: "180",
      bulk_quantity: "6",
      image: "/placeholder-muffin.jpg"
    },
    {
      name: "Vanilla Muffin",
      price: "20",
      bulk_price: "120",
      bulk_quantity: "6",
      image: "/placeholder-muffin.jpg"
    }
  ],
  munchies: [
    {
      name: "Methi Munchie",
      price: "110",
      weight: "200",
      image: "/placeholder-munchie.jpg"
    },
    {
      name: "Ajwain Munchie",
      price: "110",
      weight: "200",
      image: "/placeholder-munchie.jpg"
    },
    {
      name: "Masala Munchie",
      price: "110",
      weight: "200",
      image: "/placeholder-munchie.jpg"
    }
  ]
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white px-4 sm:px-8 lg:px-24 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="relative w-full bg-[#BFF9EA] rounded-2xl px-6 sm:px-12 py-12 sm:py-16 mb-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#252525] mb-4">
            Our Menu
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
            Discover our delightful selection of handcrafted cookies, freshly baked muffins, and savory munchies.
          </p>
        </motion.div>
      </section>

      {/* Product Sections */}
      {Object.entries(products).map(([category, items]) => (
        <section key={category} className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#252525] mb-8 capitalize">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#252525] mb-2">{item.name}</h3>
                {'bulk_price' in item ? (
                  <div className="space-y-1">
                    <p className="text-gray-600">₹{item.price}/- per piece</p>
                    <p className="text-gray-600">₹{item.bulk_price}/- for {item.bulk_quantity} pieces</p>
                  </div>
                ) : (
                  <p className="text-gray-600">₹{item.price}/- for {item.weight}gm</p>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}