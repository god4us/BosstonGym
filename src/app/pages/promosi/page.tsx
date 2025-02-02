"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import promotions from "./promotions.json"; // Data dari file promotions.json

const PromotionsPage = () => {
  const [visiblePromotions, setVisiblePromotions] = useState(6); // Awalnya tampilkan 6 promo

  // Fungsi untuk load more promos
  const loadMorePromotions = () => {
    setVisiblePromotions((prev) => prev + 3); // Menambah 3 promo lagi
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-6 py-12">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
            <span className="block text-transparent stroke-text">Promo</span>
            <span className="block">BosstonGym</span>
          </h1>
          <p className="text-gray-600 font-body mt-4">
            Temukan promo menarik untuk mendukung perjalanan kebugaran Anda!
          </p>
        </section>

        {/* Promotions Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {promotions.slice(0, visiblePromotions).map((promo, index) => (
            <div
              key={promo.id}
              className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div
                className="w-full h-64 bg-cover bg-center aspect-video"
                style={{
                  backgroundImage: `url(${promo.image || "/images/default-promo.jpg"})`,
                }}
                aria-label={promo.title}
              ></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{promo.title}</h3>
                <p className="text-xs text-gray-500 uppercase">{promo.duration}</p>
                <p className="text-sm text-gray-700 truncate">{promo.description}</p>
                
                <Link href={`/pages/promosi/${promo.id}`}>
                  <button className="mt-2 text-orange-500 hover:text-orange-600 font-medium transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Load More Button */}
        {visiblePromotions < promotions.length && (
          <div className="text-center mt-6">
            <button
              onClick={loadMorePromotions}
              className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition font-body"
            >
              Lihat Selengkapnya
            </button>
          </div>
        )}
      </main>
      <Footer />

      {/* Style untuk stroke */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px black;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default PromotionsPage;
