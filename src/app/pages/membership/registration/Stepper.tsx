"use client";

const steps = [
  "Profil",
  "Pilih Membership",
  "Detail Pendaftaran",
  "Pembayaran",
  "Selesai",
];

export default function Stepper({ step }: { step: number }) {
  return (
    <div className="w-full max-w-md px-6 py-4 bg-white rounded-lg shadow-md flex justify-center gap-4">
      {steps.map((label, index) => (
        <div key={index} className="flex flex-col items-center w-1/5">
          {/* Lingkaran untuk menunjukkan nomor langkah */}
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold transition-all ${
              index + 1 === step
                ? "bg-orange-500 text-white scale-110 shadow-lg" // Langkah aktif memiliki warna oranye, lebih besar, dan bayangan
                : index + 1 < step
                ? "bg-green-500 text-white" // Langkah yang sudah selesai berwarna hijau
                : "bg-gray-300 text-gray-700" // Langkah yang belum dicapai berwarna abu-abu
            }`}
          >
            {index + 1}
          </div>

          {/* Label hanya ditampilkan pada langkah yang sedang aktif */}
          {index + 1 === step && (
            <span className="mt-2 text-xs font-semibold text-gray-800 text-center leading-tight truncate w-20">
              {label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
