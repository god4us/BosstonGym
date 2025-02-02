"use client";

import { useState } from "react";

const KalkulatorProtein = () => {
  const [weight, setWeight] = useState<number>(0);
  const [goal, setGoal] = useState<string>("maintain");
  const [result, setResult] = useState<string | null>(null);

  const calculateProtein = (weight: number, goal: string) => {
    let proteinRequirement = 0;

    if (goal === "lose") {
      proteinRequirement = weight * 1.5;
    } else if (goal === "gain") {
      proteinRequirement = weight * 2.2;
    } else {
      proteinRequirement = weight * 1.8;
    }

    setResult(`${proteinRequirement.toFixed(2)} gram protein/hari`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (weight > 0) {
      calculateProtein(weight, goal);
    } else {
      setResult("Silakan masukkan berat badan yang valid.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
      <h2 className="text-2xl text-gray-800 mb-6">Kalkulator Protein</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600">Berat Badan (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan berat badan"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Sasaran Nutrisi</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="border rounded-lg w-full p-3 text-gray-700"
          >
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
