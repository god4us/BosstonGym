"use client";

import { useState, useEffect } from "react";
import Stepper from "./Stepper";

// Definisi struktur data untuk paket membership
interface MembershipOption {
  price: string;
  duration: string;
  months: number;
}

interface MembershipData {
  [key: string]: {
    [key: string]: MembershipOption[];
  };
}

// Daftar harga membership berdasarkan jenis kelamin dan status (Umum/Pelajar)
const membershipPrices: MembershipData = {
  Pria: {
    Umum: [
      { price: "Rp 295.000", duration: "1 Bulan", months: 1 },
      { price: "Rp 725.000", duration: "3 Bulan", months: 3 },
      { price: "Rp 1.170.000", duration: "6 Bulan", months: 6 },
      { price: "Rp 1.740.000", duration: "1 Tahun", months: 12 },
    ],
    Pelajar: [
      { price: "Rp 235.000", duration: "1 Bulan", months: 1 },
      { price: "Rp 555.000", duration: "3 Bulan", months: 3 },
      { price: "Rp 810.000", duration: "6 Bulan", months: 6 },
      { price: "Rp 1.020.000", duration: "1 Tahun", months: 12 },
    ],
  },
  Wanita: {
    Umum: [
      { price: "Rp 245.000", duration: "1 Bulan", months: 1 },
      { price: "Rp 585.000", duration: "3 Bulan", months: 3 },
      { price: "Rp 870.000", duration: "6 Bulan", months: 6 },
      { price: "Rp 1.140.000", duration: "1 Tahun", months: 12 },
    ],
    Pelajar: [
      { price: "Rp 225.000", duration: "1 Bulan", months: 1 },
      { price: "Rp 525.000", duration: "3 Bulan", months: 3 },
      { price: "Rp 750.000", duration: "6 Bulan", months: 6 },
      { price: "Rp 950.000", duration: "1 Tahun", months: 12 },
    ],
  },
};

export default function StepTwo({
  data,
  onNext,
  onBack,
  step,
}: {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  step: number;
}) {
  const [selectedPackage, setSelectedPackage] = useState<MembershipOption | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");

  const membershipType = data.isStudent ? "Pelajar" : "Umum";
  const availablePackages = membershipPrices[data.gender]?.[membershipType] || [];

  // Menghitung tanggal berakhir membership berdasarkan tanggal mulai dan durasi paket
  useEffect(() => {
    if (startDate && selectedPackage) {
      const end = new Date(startDate);
      end.setMonth(end.getMonth() + selectedPackage.months);
      setEndDate(end.toISOString().split("T")[0]);
    } else {
      setEndDate("");
    }
  }, [startDate, selectedPackage]);

  const minStartDate = new Date().toISOString().split("T")[0];

  // Validasi sebelum melanjutkan ke langkah berikutnya
  const handleNext = () => {
    if (!selectedPackage || !startDate) {
      setError("Pilih paket dan tanggal mulai terlebih dahulu!");
      return;
    }

    // Menghapus format mata uang untuk mendapatkan angka total harga
    const totalPrice = parseInt(selectedPackage.price.replace(/\D/g, ""), 10);

    // Mengirim data yang dipilih ke langkah berikutnya
    onNext({
      membership: selectedPackage,
      startDate,
      endDate,
      total: totalPrice,
    });
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <div className="max-w-md mx-auto py-12 px-8 bg-white rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Pilih Membership</h2>

        {/* Pilihan Paket Membership */}
        <div className="mb-6">
          <label className="block text-sm text-gray-700 font-medium mb-2">Pilih Paket Membership</label>
          {availablePackages.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedPackage(option)}
              className={`block w-full text-left p-4 border rounded-xl mb-2 transition-all ${
                selectedPackage === option ? "bg-orange-500 text-white scale-105" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {option.duration} - {option.price}
            </button>
          ))}
        </div>

        {/* Input Tanggal Mulai Membership */}
        <div className="mb-6">
          <label className="block text-sm text-gray-700 font-medium mb-2">Mulai Member</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            min={minStartDate}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 text-gray-800 shadow-sm"
          />
        </div>

        {/* Estimasi Masa Berlaku Membership */}
        {endDate && (
          <div className="mb-6">
            <label className="block text-sm text-gray-700 font-medium mb-2">Masa Berlaku Hingga</label>
            <input
              type="text"
              value={endDate}
              readOnly
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl bg-gray-100 text-gray-800 shadow-sm"
            />
          </div>
        )}

        {/* Pesan Error */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Tombol Navigasi */}
        <div className="flex justify-between">
          <button onClick={onBack} className="text-blue-500 hover:underline">Kembali</button>
          <button
            onClick={handleNext}
            className="bg-orange-500 text-white py-3 px-8 rounded-xl shadow-md hover:bg-orange-600 transition-all"
          >
            Lanjut
          </button>
        </div>
      </div>
    </div>
  );
}
