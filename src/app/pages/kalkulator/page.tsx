"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import Head from "next/head";
import KalkulatorKalori from "./KalkulatorKalori";
import KalkulatorProtein from "./KalkulatorProtein";
import KalkulatorLemak from "./KalkulatorLemak";
import KalkulatorIMT from "./KalkulatorIMT";

type CalculatorType = "kalori" | "protein" | "lemak" | "imt";

export default function Kalkulator() {
  const [selectedCalculator, setSelectedCalculator] = useState<CalculatorType>("kalori");

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <main className="max-w-screen-lg mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Pilih Kalkulator</h1>

        {/* Pilihan Kalkulator */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { label: "Kalkulator Kalori", key: "kalori", icon: "🍔" },
            { label: "Kalkulator Protein", key: "protein", icon: "🥩" },
            { label: "Kalkulator Lemak Tubuh", key: "lemak", icon: "💪" },
            { label: "Kalkulator IMT", key: "imt", icon: "📊" },
          ].map((item) => (
            <button
              key={item.key}
              className={`flex flex-col items-center p-6 w-40 h-40 border rounded-lg shadow-md transition-transform duration-300 ${
                selectedCalculator === item.key
                  ? "bg-orange-500 text-white scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:shadow-lg"
              }`}
              onClick={() => setSelectedCalculator(item.key as CalculatorType)}
              aria-label={`Pilih ${item.label}`}
            >
              <span className="text-4xl mb-3">{item.icon}</span>
              <span className="text-lg">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Tampilkan Kalkulator yang Dipilih */}
        <div className="transition-opacity duration-500 ease-in-out">
          {selectedCalculator === "kalori" && <KalkulatorKalori />}
          {selectedCalculator === "protein" && <KalkulatorProtein />}
          {selectedCalculator === "lemak" && <KalkulatorLemak />}
          {selectedCalculator === "imt" && <KalkulatorIMT />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
