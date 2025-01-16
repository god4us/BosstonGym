// src/app/pages/hubungikami/page.tsx
"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function HubungiKamiPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Kontak Kami
        </h1>
        <p className="text-gray-600 mb-8">
          Kami siap membantu Anda dengan pertanyaan apapun.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nama
                </label>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pesan
                </label>
                <textarea
                  placeholder="Tulis pesan Anda..."
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  rows={5}
                ></textarea>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreement"
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="agreement"
                  className="ml-2 text-sm text-gray-600"
                >
                  Saya setuju dengan syarat
                </label>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-600 transition"
              >
                Kirim
              </button>
            </form>
          </div>

          {/* Kontak Informasi */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-orange-500 text-xl" />
              <div>
                <h3 className="text-sm font-medium text-gray-800">Email</h3>
                <p className="text-sm text-gray-600">
                  Hubungi kami di:{" "}
                  <a
                    href="mailto:bosstongym@gmail.com"
                    className="text-orange-500 hover:underline"
                  >
                    bosstongym@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhone className="text-orange-500 text-xl" />
              <div>
                <h3 className="text-sm font-medium text-gray-800">Telepon</h3>
                <p className="text-sm text-gray-600">
                  Hubungi kami di:{" "}
                  <a
                    href="tel:+6285223237272"
                    className="text-orange-500 hover:underline"
                  >
                    0852-2323-7272
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl" />
              <div>
                <h3 className="text-sm font-medium text-gray-800">Kantor</h3>
                <p className="text-sm text-gray-600">
                Jl. Ciganitri Bandung , Ruko Perumahan Garden City No.12-14
                </p>
                <a
                  href="#"
                  className="text-orange-500 hover:underline text-sm"
                >
                  Dapatkan Petunjuk →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
