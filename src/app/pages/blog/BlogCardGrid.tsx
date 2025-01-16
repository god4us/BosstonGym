"use client";

import Link from "next/link";
import { useState } from "react";
import data from "./data.json"; // Pastikan path ke file JSON benar

// Array filter kategori yang digunakan
const filters = ["Lihat Semua", "Tips Latihan", "Tips Nutrisi", "Event", "Berita"];

export default function BlogSpot() {
  const [activeFilter, setActiveFilter] = useState("Lihat Semua");
  const [itemsToShow, setItemsToShow] = useState(9);
  const [loading, setLoading] = useState(false); // State untuk loading indikator

  // Filter data berdasarkan kategori aktif
  const filteredData =
    activeFilter === "Lihat Semua"
      ? data // Tampilkan semua data jika "Lihat Semua" dipilih
      : data.filter((blog) => blog.category === activeFilter); // Filter berdasarkan kategori aktif

  // Data yang akan ditampilkan berdasarkan jumlah item yang harus ditampilkan
  const displayedData = filteredData.slice(0, itemsToShow);

  // Handler untuk tombol "Lihat Selengkapnya"
  const handleLoadMore = () => {
    setLoading(true); // Tampilkan loading
    setTimeout(() => {
      setItemsToShow((prev) => prev + 6); // Tambah jumlah item yang ditampilkan
      setLoading(false); // Sembunyikan loading setelah data ditambahkan
    }, 1000); // Simulasi waktu loading
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 font-body">
      {/* Tombol Filter */}
      <div className="flex gap-4 justify-center mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setItemsToShow(9); // Reset jumlah item saat filter berubah
            }}
            className={`px-4 py-2 rounded text-sm ${
              activeFilter === filter
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            } hover:bg-orange-400 hover:text-white transition`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid Card Blog */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedData.map((blog, index) => (
          <div
            key={`${blog.id}-${index}`}  // Menggunakan kombinasi id dan index untuk memastikan key unik
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <span className="text-xs text-gray-500 uppercase">
                {blog.category}
              </span>
              <h3 className="text-lg font-medium truncate">{blog.title}</h3>
              <p className="text-sm text-gray-700 truncate">{blog.intro}</p>
              <Link href={`/pages/blog/${blog.id}`}>
                <button className="mt-2 text-orange-500 hover:text-orange-600 font-medium">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Indikator Loading */}
      {loading && (
        <div className="flex justify-center mt-6">
          <div className="text-orange-500 font-bold animate-pulse">Loading...</div>
        </div>
      )}

      {/* Tombol "Lihat Selengkapnya" */}
      {!loading && itemsToShow < filteredData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition font-body"
          >
            Lihat Selengkapnya
          </button>
        </div>
      )}
    </div>
  );
}
