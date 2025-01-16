"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa"; // Menambahkan icon untuk input

const RegistrationMembership = ({ onBack }: { onBack: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPhone, setConfirmPhone] = useState("");
  const [gender, setGender] = useState<"Pria" | "Wanita" | "Lainnya">("Pria");
  const [contactTime, setContactTime] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<"1 Bulan" | "3 Bulan" | "6 Bulan" | "1 Tahun">("1 Bulan");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pendaftaran berhasil!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 to-gray-100">
      <div className="flex-grow max-w-screen-xl mx-auto py-12 px-6">
        <div className="max-w-md mx-auto py-12 px-6 bg-white rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Registrasi Membership</h2>
          <form onSubmit={handleSubmit}>
            {/* Nama Lengkap */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm text-gray-700 font-medium mb-2">Nama Lengkap</label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 shadow-sm"
                  required
                  placeholder="Masukkan nama lengkap"
                />
                <FaUser className="absolute top-3 left-3 text-gray-400" />
              </div>
            </div>

            {/* Gender */}
            <div className="mb-6">
              <label className="block text-sm text-gray-700 font-medium mb-2">Jenis Kelamin</label>
              <div className="flex gap-6">
                {["Pria", "Wanita", "Lainnya"].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={option}
                      checked={gender === option}
                      onChange={() => setGender(option as "Pria" | "Wanita" | "Lainnya")}
                      className="form-radio text-orange-500"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Nomor Handphone */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm text-gray-700 font-medium mb-2">Nomor Handphone</label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 shadow-sm"
                  required
                  placeholder="Masukkan nomor handphone"
                />
                <FaPhone className="absolute top-3 left-3 text-gray-400" />
              </div>
            </div>

            {/* Konfirmasi Nomor Handphone */}
            {phone && (
              <div className="mb-6">
                <label htmlFor="confirmPhone" className="block text-sm text-gray-700 font-medium mb-2">Konfirmasi Nomor Handphone</label>
                <div className="relative">
                  <input
                    id="confirmPhone"
                    type="tel"
                    value={confirmPhone}
                    onChange={(e) => setConfirmPhone(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 shadow-sm"
                    required
                    placeholder="Konfirmasi nomor handphone"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm text-gray-700 font-medium mb-2">Email</label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 shadow-sm"
                  required
                  placeholder="Masukkan email Anda"
                />
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              </div>
            </div>

            {/* Preferensi Waktu Kontak */}
            <div className="mb-6">
              <label htmlFor="contactTime" className="block text-sm text-gray-700 font-medium mb-2">Preferensi Waktu Kontak</label>
              <select
                id="contactTime"
                value={contactTime}
                onChange={(e) => setContactTime(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 shadow-sm"
              >
                <option value="">Pilih waktu</option>
                <option value="Pagi">Pagi (08:00 - 11:00)</option>
                <option value="Siang">Siang (12:00 - 15:00)</option>
                <option value="Sore">Sore (16:00 - 18:00)</option>
              </select>
            </div>

            {/* Pilihan Paket */}
            <div className="mb-6">
              <label htmlFor="package" className="block text-sm text-gray-700 font-medium mb-2">Pilih Paket</label>
              <div className="flex gap-6">
                {["1 Bulan", "3 Bulan", "6 Bulan", "1 Tahun"].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={option}
                      checked={selectedPackage === option}
                      onChange={() => setSelectedPackage(option as "1 Bulan" | "3 Bulan" | "6 Bulan" | "1 Tahun")}
                      className="form-radio text-orange-500"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Tombol Daftar */}
            <div className="text-center mb-6">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-8 rounded-xl shadow-md hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Daftar
              </button>
            </div>
          </form>

          {/* Tombol Kembali ke Paket */}
          <div className="mt-6 text-center">
            <button
              onClick={onBack}
              className="text-blue-500 font-medium hover:underline focus:outline-none"
            >
              Kembali ke Paket Membership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationMembership;
