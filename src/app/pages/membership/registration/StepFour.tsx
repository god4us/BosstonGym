"use client";

import { useEffect, useState } from "react";
import { FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";

export default function StepFour({ onNext, onBack, paymentMethod, step, total }: { onNext: () => void; onBack: () => void; paymentMethod: string; step: number; total: number }) {
  const [countdown, setCountdown] = useState(3600); // Waktu mundur selama 1 jam (3600 detik)
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    if (countdown > 0 && !isPaid) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      alert("Waktu pembayaran habis. Silakan lakukan pendaftaran ulang.");
      onBack();
    }
  }, [countdown, isPaid, onBack]);

  // Simulasi pembayaran berhasil dalam 20 detik
  useEffect(() => {
    const paymentTimer = setTimeout(() => {
      setIsPaid(true);
    }, 20000); // Simulasi pembayaran sukses dalam 20 detik
    return () => clearTimeout(paymentTimer);
  }, []);

  // Format waktu mundur (jam:menit:detik)
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <div className="max-w-md mx-auto py-12 px-8 bg-white rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Pembayaran</h2>

        {/* Countdown Timer */}
        <div className="text-center text-lg font-semibold text-red-500 mb-4">
          {isPaid ? (
            <div className="text-green-500 flex items-center justify-center gap-2 text-xl">
              <FaCheckCircle className="text-2xl" />
              Pembayaran Berhasil!
            </div>
          ) : (
            <>Selesaikan pembayaran sebelum <span className="font-bold">{formatTime(countdown)}</span></>
          )}
        </div>

        {/* Total Pembayaran */}
        <div className="bg-gray-100 p-4 rounded-xl text-center mb-6">
          <p className="text-lg font-semibold text-gray-800 flex items-center justify-center gap-2">
            <FaMoneyBillWave className="text-green-600 text-2xl" /> 
            Total yang harus dibayar :
          </p>
          <p className="text-2xl font-bold text-orange-500 mt-2">
            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total)}
          </p>
        </div>

        {/* Instruksi Pembayaran */}
        <p className="text-md text-gray-700 text-center mb-4">
          Silakan lakukan pembayaran melalui <strong>{paymentMethod}</strong> sesuai dengan detail di bawah ini:
        </p>

        {/* QRIS atau Nomor Rekening BCA */}
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl">
          {paymentMethod === "QRIS" ? (
            <>
              <img src="/img/1.jpg" alt="QRIS Pembayaran" className="w-48 h-48 rounded-md shadow-md" />
              <p className="text-sm text-gray-700 mt-2">Scan QRIS untuk melakukan pembayaran.</p>
            </>
          ) : (
            <>
              <p className="text-lg font-semibold">Bank BCA</p>
              <p className="text-md font-bold text-gray-900">123 456 7890</p>
              <p className="text-sm text-gray-600">a.n. BosstonGym</p>
              <img src="/img/1.jpg" alt="Bukti Pembayaran" className="w-48 h-48 rounded-md shadow-md mt-4" />
            </>
          )}
        </div>

        {/* Tombol Navigasi */}
        <div className="flex justify-between mt-6">
          <button onClick={onBack} className="text-blue-500 hover:underline">Kembali</button>
          <button
            onClick={onNext}
            disabled={!isPaid}
            className={`bg-orange-500 text-white py-3 px-8 rounded-xl shadow-md transition-all ${
              !isPaid ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
            }`}
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
}
