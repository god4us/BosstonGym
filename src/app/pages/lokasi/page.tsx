"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Map from "../../components/map"; // Import komponen Map
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function LokasiPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Lokasi Kami</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informasi Kontak */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <FaEnvelope className="text-orange-500 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-sm text-gray-600">
                  <a
                    href="mailto:info@gymanda.com"
                    className="text-orange-500 hover:underline"
                  >
                    bosstongym@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <FaPhone className="text-orange-500 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Telepon</h3>
                <p className="text-sm text-gray-600">
                  <a
                    href="tel:+6285223237272"
                    className="text-orange-500 hover:underline"
                  >
                    0852-2323-7272
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <FaMapMarkerAlt className="text-orange-500 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Kantor</h3>
                <p className="text-sm text-gray-600">
                  Jl. Ciganitri Bandung , Ruko Perumahan Garden City No.12-14
                </p>
              </div>
            </div>
          </div>

          {/* Peta dengan Google Maps */}
          <div className="bg-gray-200 flex items-center justify-center rounded-lg shadow-md h-96">
            <Map />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
