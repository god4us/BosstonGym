"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // ✅ Gunakan Image dari next/image
import promotions from "../pages/promosi/promotions.json";

const PromoPopup = () => {
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [showPromo, setShowPromo] = useState(true);
  const router = useRouter();

  // ⏱️ Timer untuk mengganti promo setiap 20 detik
  useEffect(() => {
    if (showPromo) {
      const timer = setTimeout(() => {
        setCurrentPromoIndex((prevIndex) => (prevIndex + 1) % promotions.length);
      }, 20000); 
      return () => clearTimeout(timer);
    }
  }, [showPromo, currentPromoIndex]);

  const handleClosePromo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPromo(false);
    setTimeout(() => setShowPromo(true), 20000); // ✅ Konsisten dengan timer 20 detik
  };

  const handleClickImage = () => {
    router.push(`/pages/promosi/${promotions[currentPromoIndex]?.id}`);
  };

  return (
    showPromo && (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="relative w-32 h-32 cursor-pointer">
          <Image
            src={promotions[currentPromoIndex]?.image || "/images/default-promo.jpg"} // ✅ Optimasi gambar
            alt={promotions[currentPromoIndex]?.title || "Promo BosstonGym"}
            fill
            className="object-cover rounded-lg"
            onClick={handleClickImage}
          />

          {/* Tombol Close */}
          <button
            onClick={handleClosePromo}
            className="absolute top-0 right-0 text-white text-2xl font-bold bg-gray-800 bg-opacity-70 p-1 rounded-full hover:bg-opacity-90 transition"
            aria-label="Close Promo"
          >
            ×
          </button>
        </div>
      </div>
    )
  );
};

export default PromoPopup;
