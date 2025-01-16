"use client";

import { useState } from "react";

const KalkulatorLemak = () => {
  const [result, setResult] = useState<string | null>(null);

  const calculateBodyFat = (data: any) => {
    const { waist, hip, neck, height, weight, gender } = data;
    const bodyFat =
      495 /
        (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) -
      450;
    setResult(`${Math.round(bodyFat)}% lemak tubuh`);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      waist: 80,
      hip: 90,
      neck: 40,
      height: 170,
      weight: 70,
      gender: "pria",
    };
    calculateBodyFat(data);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
      <h2 className="text-2xl text-gray-800 mb-6">Kalkulator Lemak Tubuh</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600">Lingkar Pinggang (cm)</label>
          <input
            type="number"
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan lingkar pinggang"
          />
        </div>
        <div>
          <label className="block text-gray-600">Lingkar Pinggul (cm)</label>
          <input
            type="number"
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan lingkar pinggul"
          />
        </div>
        <div>
          <label className="block text-gray-600">Lingkar Leher (cm)</label>
          <input
            type="number"
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan lingkar leher"
          />
        </div>
        <div>
          <label className="block text-gray-600">Tinggi Badan (cm)</label>
          <input
            type="number"
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan tinggi badan"
          />
        </div>
        <div>
          <label className="block text-gray-600">Berat Badan (kg)</label>
          <input
            type="number"
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan berat badan"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-all"
        >
          Hitung
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 text-gray-800 rounded-lg">
          <p>Hasil:</p>
          <p className="font-medium">{result}</p>
        </div>
      )}
    </div>
  );
};

export default KalkulatorLemak;
