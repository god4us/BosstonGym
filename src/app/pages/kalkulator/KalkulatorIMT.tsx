"use client";

import { useState } from "react";

const KalkulatorIMT = () => {
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const calculateIMT = (weight: number, height: number) => {
    const imt = weight / ((height / 100) * (height / 100));
    let category = "";

    if (imt < 18.5) {
      category = "Kekurangan Berat Badan";
    } else if (imt < 24.9) {
      category = "Normal";
    } else if (imt < 29.9) {
      category = "Kelebihan Berat Badan";
    } else {
      category = "Obesitas";
    }

    setResult(`IMT: ${imt.toFixed(2)} (Kategori: ${category})`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      calculateIMT(weight, height);
    } else {
      setResult("Silakan isi berat badan dan tinggi badan dengan benar.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
      <h2 className="text-2xl text-gray-800 mb-6">Kalkulator IMT</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600">Berat Badan (kg)</label>
          <input
            type="number"
            value={weight || ""}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan berat badan"
            min="1"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Tinggi Badan (cm)</label>
          <input
            type="number"
            value={height || ""}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan tinggi badan"
            min="1"
            required
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
