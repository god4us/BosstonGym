"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaClock } from "react-icons/fa"; // Import ikon jam dari react-icons

export default function JamOperasional() {
  const schedule = [
    { day: "Senin - Jumat", time: "07.00 - 21.00 WIB" },
    { day: "Sabtu", time: "07.00 - 19.00 WIB" },
    { day: "Minggu", time: "07.00 - 14.00 WIB" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-screen-lg mx-auto px-6 py-12">
        {/* Judul dengan efek stroke */}
        <header className="text-center mb-12 mt-20">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
            <span className="block text-transparent stroke-text">Jadwal Operasional</span>
            <span className="block">BosstonGym</span>
          </h1>
          <p className="text-gray-600 font-body mt-4">
            ( Apabila ada hari libur di luar jadwal, informasi akan diumumkan sehari sebelumnya. )
          </p>
        </header>

        {/* Jadwal Operasional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h2 className="text-xl font-medium text-gray-800 flex items-center gap-2">
                <FaClock className="text-orange-500" /> {item.day}
              </h2>
              <p className="text-gray-600 mt-2">{item.time}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />

      {/* Style untuk stroke efek */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px black; /* Menyesuaikan ketebalan stroke */
          color: transparent;
        }
      `}</style>
    </div>
  );
}
