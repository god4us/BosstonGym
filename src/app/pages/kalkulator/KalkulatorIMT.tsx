"use client";

import { useState } from "react";

const KalkulatorIMT = () => {
  const [result, setResult] = useState<string | null>(null);

  const calculateIMT = (data: any) => {
    const { weight, height } = data;
    const imt = weight / ((height / 100) * (height / 100));
    setResult(`IMT: ${imt.toFixed(2)} (Kategori: ${imt < 18.5 ? "Kekurangan Berat Badan" : imt < 24.9 ? "Normal" : "Kelebihan Berat Badan"})`);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = { weight: 70, height: 175 };
    calculateIMT(data);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
      <h2 className="text-2xl text-gray-800 mb-6">Kalkulator IMT</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600">Berat Badan (kg)</label>
          <input
            type="number"
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan berat badan"
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

export default KalkulatorIMT;
