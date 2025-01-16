"use client";

import { useState } from "react";
import { FaDumbbell, FaLock, FaShower, FaCar, FaRunning, FaBed, FaHeart, FaMedkit, FaBicycle, FaCogs } from "react-icons/fa"; // Mengganti FaGym dengan FaRunning

const BenefitMember = () => {
  const [isOpen, setIsOpen] = useState(true); // Popup langsung terbuka
  const [selectedTab, setSelectedTab] = useState<"Fasilitas" | "Alat Gym">("Fasilitas");

  const closePopup = () => setIsOpen(false);

  // Data untuk fasilitas dengan ikon dan note
  const fasilitas = [
    { id: 1, icon: <FaShower />, name: "Shower", note: "Tersedia air panas" },
    { id: 2, icon: <FaCar />, name: "Parkir", note: "" },
    { id: 3, icon: <FaRunning />, name: "Gym Floor", note: "" },  // Menggunakan FaRunning
    { id: 4, icon: <FaLock />, name: "Locker", note: "" },
    { id: 5, icon: <FaMedkit />, name: "Toilet", note: "" },
    { id: 6, icon: <FaBed />, name: "Lounge", note: "" },
    { id: 7, icon: <FaHeart />, name: "Body Weight & Composition Scale", note: "" },
  ];

  // Data untuk alat gym dengan ikon dan note
  const alatGym = [
    { id: 1, icon: <FaDumbbell />, name: "Smith Machine", note: "(Leg, Chest, Dip Chin, dll.)" },
    { id: 2, icon: <FaDumbbell />, name: "Free Weight", note: "(Dumbbell, Kettlebell, Plates)" },
    { id: 3, icon: <FaBicycle />, name: "Cardio", note: "(Treadmill, Sepeda Statis)" },
    { id: 4, icon: <FaCogs />, name: "Lifting Bar", note: "(Olympic Bar, EZ Curl Bar)" },
    { id: 5, icon: <FaBed />, name: "Mattress", note: "(Yoga mat anti-slip)" },
    { id: 6, icon: <FaDumbbell />, name: "Lain-lain", note: "(Streps, pembersih sepatu, lap, dll.)" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
          onClick={closePopup} // Tutup popup jika klik area luar modal
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg w-4/5 md:w-96 relative max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Menghentikan event click agar tidak tertutup saat klik di dalam modal
          >
            {/* Tombol tutup di kanan atas */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 text-xl font-semibold hover:text-gray-800"
            >
              ×
            </button>

            {/* Judul */}
            <h2 className="text-xl font-medium text-gray-800 text-center mb-6">Benefit Membership</h2>

            {/* Tab Pilihan Fasilitas atau Alat Gym */}
            <div className="flex justify-center gap-6 mb-6">
              <button
                onClick={() => setSelectedTab("Fasilitas")}
                className={`px-6 py-2 text-md font-medium rounded-full transition-all ${
                  selectedTab === "Fasilitas"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Fasilitas
              </button>
              <button
                onClick={() => setSelectedTab("Alat Gym")}
                className={`px-6 py-2 text-md font-medium rounded-full transition-all ${
                  selectedTab === "Alat Gym"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Alat Gym
              </button>
            </div>

            {/* Konten berdasarkan tab yang dipilih */}
            <div className="overflow-y-auto h-[50vh] space-y-6">
              {selectedTab === "Fasilitas" &&
                fasilitas.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 border-b border-gray-300 py-2">
                    <div className="text-xl text-orange-500">{item.icon}</div>
                    <div className="flex flex-col text-sm text-gray-800">
                      <div>{item.name}</div>
                      {item.note && <div className="text-xs text-gray-500">{item.note}</div>}
                    </div>
                  </div>
                ))}
              {selectedTab === "Alat Gym" &&
                alatGym.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 border-b border-gray-300 py-2">
                    <div className="text-xl text-orange-500">{item.icon}</div>
                    <div className="flex flex-col text-sm text-gray-800">
                      <div>{item.name}</div>
                      {item.note && <div className="text-xs text-gray-500">{item.note}</div>}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BenefitMember;
