"use client";

import { useState } from "react";

const KalkulatorLemak = () => {
  const [waist, setWaist] = useState<number | null>(null);
  const [hip, setHip] = useState<number | null>(null);
  const [neck, setNeck] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [gender, setGender] = useState<string>("pria");
  const [result, setResult] = useState<string | null>(null);

  const calculateBodyFat = () => {
    if (waist !== null && neck !== null && height !== null && weight !== null) {
      let bodyFat = 0;

      if (gender === "pria") {
        bodyFat =
          495 /
            (1.0324 -
              0.19077 * Math.log10(waist - neck) +
              0.15456 * Math.log10(height)) -
          450;
      } else if (gender === "wanita" && hip !== null) {
        bodyFat =
          495 /
            (1.29579 -
              0.35004 * Math.log10(waist + hip - neck) +
              0.221 * Math.log10(height)) -
          450;
      } else {
        setResult("Silakan isi semua data dengan benar.");
        return;
      }

      setResult(`${Math.round(bodyFat)}% lemak tubuh`);
    } else {
      setResult("Silakan isi semua data dengan benar.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBodyFat();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
      <h2 className="text-2xl text-gray-800 mb-6">Kalkulator Lemak Tubuh</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600">Jenis Kelamin</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="pria"
                checked={gender === "pria"}
                onChange={() => setGender("pria")}
                className="mr-2"
              />
              Pria
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="wanita"
                checked={gender === "wanita"}
                onChange={() => setGender("wanita")}
                className="mr-2"
              />
              Wanita
            </label>
          </div>
        </div>
        <div>
          <label className="block text-gray-600">Lingkar Pinggang (cm)</label>
          <input
            type="number"
            value={waist || ""}
            onChange={(e) => setWaist(parseFloat(e.target.value))}
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan lingkar pinggang"
            required
          />
        </div>
        {gender === "wanita" && (
          <div>
            <label className="block text-gray-600">Lingkar Pinggul (cm)</label>
            <input
              type="number"
              value={hip || ""}
              onChange={(e) => setHip(parseFloat(e.target.value))}
              className="border rounded-lg w-full p-3 text-gray-700"
              placeholder="Masukkan lingkar pinggul"
              required={gender === "wanita"}
            />
          </div>
        )}
        <div>
          <label className="block text-gray-600">Lingkar Leher (cm)</label>
          <input
            type="number"
            value={neck || ""}
            onChange={(e) => setNeck(parseFloat(e.target.value))}
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan lingkar leher"
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
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Berat Badan (kg)</label>
          <input
            type="number"
            value={weight || ""}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan berat badan"
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

export default KalkulatorLemak;
