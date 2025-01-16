"use client";

import { useState, useEffect } from "react";

export default function TaglineSection() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true); // Tampilkan tombol setelah 5 detik
    }, 5000);

    return () => clearTimeout(timer); // Hapus timer ketika komponen unmount
  }, []);

  return (
    <section
      className="relative h-screen bg-cover bg-center text-white font-body"
      style={{
        backgroundImage: "url('/img/2.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Tagline Content */}
      <div className="relative z-10 flex items-center h-full justify-start pl-10 md:pl-20">
        <div className="text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-body font-extrabold leading-tight">
            <span className="block text-transparent stroke-text">POWER</span>
            <span className="block">NEVER STOPS</span>
            <span className="block">
              AT <span className="text-transparent stroke-text">BOSSTONGYM</span>
            </span>
          </h1>

          {/* Call to Action */}
          {showButton && (
            <div className="mt-6 opacity-0 animate-fade-in">
              <a
                href="/pages/membership"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-body font-normal rounded-full shadow-lg transition-all transform hover:scale-105"
              >
                Join Membership
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Outline Text Effect */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 0.1px white; /* Stroke lebih tipis */
          color: transparent;
        }

        /* Animasi fade-in */
        .animate-fade-in {
          animation: fadeIn 1s forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
