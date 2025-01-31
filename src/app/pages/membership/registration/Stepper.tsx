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
          {/* Lingkaran Step */}
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold transition-all ${
              index + 1 === step
                ? "bg-orange-500 text-white scale-110 shadow-lg"
                : index + 1 < step
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {index + 1}
          </div>

          {/* Label hanya tampil di step aktif dengan gaya lebih elegan */}
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
