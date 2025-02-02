"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function StepFive({ data }: { data: any }) {
  const router = useRouter();
  const [showLoginButton, setShowLoginButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoginButton(true);
    }, 15000); // Tombol login akan muncul setelah 15 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <div className="max-w-md mx-auto py-12 px-8 bg-white rounded-3xl shadow-lg">
        
        {/* Ucapan Selamat */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Selamat, <span className="text-orange-500">{data.firstName} {data.lastName}</span>! <br />
          Anda kini resmi menjadi <span className="text-green-600">Member BosstonGym</span>
        </h2>

        {/* Kartu Member */}
        <div className="flex flex-col items-center">
          <img
            src="/img/1.jpg"
            alt="Kartu Member BosstonGym"
            className="w-72 h-44 rounded-lg shadow-md object-cover"
          />
          <p className="text-sm text-gray-600 mt-2 text-center">
            Ambil kartu member Anda di kasir BosstonGym. <br />
            Gunakan kartu ini sebagai <b>bukti keanggotaan</b> dan untuk <b>tapping masuk ke gym</b> setiap kali berkunjung.
          </p>
        </div>

        {/* Informasi Login */}
        <div className="mt-6 p-4 border rounded-xl bg-gray-100 text-center">
          <p className="text-md text-gray-800">
            Akun Anda telah dibuat untuk login ke <span className="font-bold">SelfService-BosstonGym</span>.
          </p>
          <p className="text-md text-gray-700 mt-2">Silakan login menggunakan email Anda.</p>
          <p className="text-md text-orange-500 font-semibold mt-2">
            Password sementara: <span className="bg-gray-200 px-4 py-1 rounded">{data.email.slice(0, 4)}1234</span>
          </p>
          <p className="text-sm text-red-500 mt-2">
            Segera ganti password Anda setelah login
          </p>
        </div>

        {/* Tombol Login Muncul setelah 15 Detik */}
        <div className="mt-6 flex justify-center">
          {showLoginButton && (
            <button
              onClick={() => router.push("/login")}
              className="bg-orange-500 text-white py-3 px-6 rounded-xl shadow-md hover:bg-orange-600 transition-all"
            >
              Login ke SelfService-BosstonGym
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
