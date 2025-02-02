"use client";

import { useState } from "react";
import Stepper from "./Stepper";

export default function StepThree({
  data,
  onBack,
  onNext,
  step,
}: {
  data: any;
  onBack: () => void;
  onNext: (paymentMethod: string) => void;
  step: number;
}) {
  const [paymentMethod, setPaymentMethod] = useState<"BCA" | "QRIS" | "">("");
  const [error, setError] = useState("");

  // Fungsi untuk mengonfirmasi pendaftaran
  const handleConfirm = () => {
    if (!paymentMethod) {
      setError("Silakan pilih metode pembayaran");
      return;
    }
    onNext(paymentMethod); // Mengirim metode pembayaran yang dipilih ke langkah berikutnya
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <div className="max-w-md mx-auto py-12 px-8 bg-white rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Konfirmasi Pendaftaran
        </h2>

        {/* Menampilkan detail pendaftaran */}
        <div className="mb-6 p-4 border rounded-xl bg-gray-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Detail Pendaftaran
          </h3>
          <p>
            <strong>Nama:</strong> {data.firstName} {data.lastName}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Nomor WhatsApp:</strong> {data.whatsapp}
          </p>
          <p>
            <strong>Jenis Kelamin:</strong> {data.gender}
          </p>
          <p>
            <strong>Status:</strong> {data.isStudent ? "Pelajar" : "Umum"}
          </p>
          <p>
            <strong>Paket:</strong> {data.membership?.duration} -{" "}
            {data.membership?.price}
          </p>
          <p>
            <strong>Mulai:</strong> {data.startDate}
          </p>
          <p>
            <strong>Berakhir:</strong> {data.endDate}
          </p>
        </div>

        {/* Pilihan Metode Pembayaran */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Metode Pembayaran
          </h3>
          <div className="flex flex-col gap-3">
            {["BCA", "QRIS"].map((method) => (
              <label
                key={method}
                className="flex items-center gap-2 border p-3 rounded-xl cursor-pointer"
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value as "BCA" | "QRIS");
                    setError(""); // Menghapus pesan error saat memilih metode pembayaran
                  }}
                  className="form-radio text-orange-500"
                />
                {method}
              </label>
            ))}
          </div>
          {/* Menampilkan pesan error jika metode pembayaran tidak dipilih */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Tombol Navigasi untuk kembali atau melanjutkan */}
        <div className="flex justify-between">
          <button onClick={onBack} className="text-blue-500 hover:underline">
            Kembali
          </button>
          <button
            onClick={handleConfirm}
            disabled={!paymentMethod} // Menonaktifkan tombol jika metode pembayaran belum dipilih
            className={`bg-orange-500 text-white py-3 px-8 rounded-xl shadow-md transition-all ${
              !paymentMethod ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
            }`}
          >
            Konfirmasi & Bayar
          </button>
        </div>
      </div>
    </div>
  );
}
