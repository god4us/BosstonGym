"use client";

import { use } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { FaArrowLeft } from "react-icons/fa"; // Import ikon panah kiri
import promotions from "../promotions.json"; // Data dari file promotions.json

export default function PromotionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // Unwrap params Promise menggunakan React.use()

  const promo = promotions.find((item) => item.id.toString() === id);

  if (!promo) {
    return (
      <div>
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="mb-6">
              <img src="/img/logo.png" alt="Not Found" className="w-24 h-24 mx-auto mb-4" />
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Promosi Tidak Ditemukan</h1>
            <p className="text-lg text-gray-500 mb-6">Sepertinya promosi yang Anda cari sudah tidak tersedia. Jangan khawatir, kami memiliki banyak promo menarik lainnya!</p>
            <a href="/pages/promosi">
              <button className="flex items-center justify-center bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-all">
                <FaArrowLeft className="w-5 h-5 mr-2" />
                Halaman Promosi
              </button>
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-screen-lg mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <a href="/pages/promosi">
            <button className="flex items-center space-x-2 text-orange-500 mb-4 hover:text-orange-600 transition-all">
              <FaArrowLeft className="w-5 h-5" />
              <span className="sr-only">Back to Promotions</span> {/* Menyembunyikan teks untuk aksesibilitas */}
            </button>
          </a>
          <h1 className="text-4xl font-bold text-orange-500 mb-4">{promo.title}</h1>

          {/* Gambar Promo */}
          <div
            className="w-full h-96 bg-cover bg-center rounded-lg mb-6"
            style={{
              backgroundImage: `url(${promo.image || "/images/default-promo.jpg"})`,
            }}
          ></div>

          {/* Deskripsi Promo */}
          <p className="text-gray-700 mb-4">{promo.description}</p>
          <p className="text-sm text-gray-500 mb-6">{promo.duration}</p>

          {/* Share and Copy Link */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`Check out this promotion: ${promo.title} - ${window.location.href}`)}`, "_blank")}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all"
            >
              Share to WhatsApp
            </button>
            <button
              onClick={() => {navigator.clipboard.writeText(window.location.href); alert("Link copied to clipboard!");}}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-all"
            >
              Copy Link
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
