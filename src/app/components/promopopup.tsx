"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi halaman
import promotions from "../pages/promosi/promotions.json"; // Data promo dari file JSON

const PromoPopup = () => {
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0); // Index promo yang sedang tampil
  const [showPromo, setShowPromo] = useState(true); // Kontrol untuk menampilkan/menghilangkan popup
  const router = useRouter(); // Router instance untuk navigasi

  // Fungsi untuk menampilkan promo berikutnya
  useEffect(() => {
    if (showPromo) {
      const timer = setTimeout(() => {
        setCurrentPromoIndex((prevIndex) => (prevIndex + 1) % promotions.length); // Update promo index
      }, 20000); // Interval 20 detik untuk promo berikutnya

      return () => clearTimeout(timer); // Bersihkan timer ketika komponen di-unmount
    }
  }, [showPromo, currentPromoIndex]);

  const handleClosePromo = (e: React.MouseEvent) => {
    e.stopPropagation(); // Mencegah event klik mengarah ke gambar
    setShowPromo(false); // Menutup popup promosi
    setTimeout(() => setShowPromo(true), 10000); // Setelah 20 detik, tampilkan promo lagi
  };

  const handleClickImage = () => {
    // Navigasi ke halaman detail promo
    router.push(`/pages/promosi/${promotions[currentPromoIndex].id}`);
  };

  return (
    showPromo && (
      <div className="fixed bottom-4 right-4 z-50">
        {/* Gambar Promo kecil di pojok kanan bawah */}
        <div className="relative w-32 h-32 cursor-pointer">
          <img
            src={promotions[currentPromoIndex].image || "/images/default-promo.jpg"} // Gambar promo atau default jika tidak ada
            alt={promotions[currentPromoIndex].title}
            className="w-full h-full object-cover rounded-lg"
            onClick={handleClickImage} // Klik gambar untuk pergi ke halaman promo
          />

          {/* Tombol Close (×) */}
          <button
            onClick={handleClosePromo}
            className="absolute top-0 right-0 text-white text-3xl font-bold bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
          >
            ×
          </button>
        </div>
      </div>
    )
  );
};

export default PromoPopup;
