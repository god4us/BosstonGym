"use client";

import { useState } from "react";

const KalkulatorProtein = () => {
  const [result, setResult] = useState<string | null>(null);

  const calculateProtein = (data: any) => {
    const { weight, goal } = data;
    const proteinRequirement = goal === "lose" ? weight * 1.5 : weight * 2;
    setResult(`${proteinRequirement} gram protein/hari`);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = { weight: 70, goal: "maintain" };
    calculateProtein(data);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
      <h2 className="text-2xl text-gray-800 mb-6">Kalkulator Protein</h2>
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
          <label className="block text-gray-600">Sasaran Nutrisi</label>
          <select className="border rounded-lg w-full p-3 text-gray-700">
            <option value="maintain">Mempertahankan berat badan</option>
            <option value="lose">Menurunkan berat badan</option>
            <option value="gain">Menambah berat badan</option>
          </select>
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

export default KalkulatorProtein;
