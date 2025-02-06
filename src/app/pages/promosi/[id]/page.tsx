"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import promotions from "../promotions.json";
import { useParams } from "next/navigation";

export default function PromotionDetailPage() {
  const params = useParams();
  const id = params?.id as string; // Pastikan id bertipe string

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
            <p className="text-lg text-gray-500 mb-6">Sepertinya promosi yang Anda cari tidak tersedia.</p>
            <Link href="/pages/promosi">
              <button className="flex items-center justify-center bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-all">
                <FaArrowLeft className="w-5 h-5 mr-2" />
                Kembali ke Halaman Promosi
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link berhasil disalin ke clipboard!");
    } catch (err) {
      alert("Gagal menyalin link. Silakan coba lagi.");
    }
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-screen-lg mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <Link href="/pages/promosi">
            <button className="flex items-center text-orange-500 mb-4 hover:text-orange-600 transition-all" aria-label="Kembali ke daftar promosi">
              <FaArrowLeft className="w-5 h-5 mr-2" />
              Kembali ke Promosi
            </button>
          </Link>

          <h1 className="text-4xl font-bold text-orange-500 mb-4">{promo.title}</h1>

          <div
            className="w-full h-96 bg-cover bg-center rounded-lg mb-6"
            style={{
              backgroundImage: `url(${promo.image || "/images/default-promo.jpg"})`,
            }}
            aria-label={promo.title}
          ></div>

          <p className="text-gray-700 mb-4">{promo.description}</p>
          <p className="text-sm text-gray-500 mb-6">{promo.duration}</p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/?text=${encodeURIComponent(`Lihat promosi ini: ${promo.title} - ${window.location.href}`)}`,
                  "_blank"
                )
              }
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all"
              aria-label="Bagikan ke WhatsApp"
            >
              Bagikan ke WhatsApp
            </button>

            <button
              onClick={handleCopyLink}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-all"
              aria-label="Salin link promosi"
            >
              Salin Link
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
