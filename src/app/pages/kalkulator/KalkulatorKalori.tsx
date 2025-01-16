"use client";

import { useState } from "react";

const KalkulatorKalori = () => {
  const [result, setResult] = useState<string | null>(null);

  const calculateCalories = (data: any) => {
    const { age, weight, height, gender, activityLevel, goal } = data;
    const BMR =
      gender === "pria"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;
    const dailyCalories =
      BMR * (1.2 + (activityLevel - 1) * 0.175);
    setResult(`${Math.round(dailyCalories)} kalori/hari`);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      age: 25,
      weight: 70,
      height: 175,
      gender: "pria",
      activityLevel: 3,
      goal: "maintain",
    };
    calculateCalories(data);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
      <h2 className="text-2xl text-gray-800 mb-6">Kalkulator Kalori</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600">Umur</label>
          <input
            type="number"
            className="border rounded-lg w-full p-3 text-gray-700"
            placeholder="Masukkan umur"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
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
        </div>
        <div>
          <label className="block text-gray-600">Jenis Kelamin</label>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="gender" value="pria" className="mr-2" />
              Pria
            </label>
            <label>
              <input type="radio" name="gender" value="wanita" className="mr-2" />
              Wanita
            </label>
          </div>
        </div>
        <div>
          <label className="block text-gray-600">Tingkat Aktivitas Olahraga</label>
          <select className="border rounded-lg w-full p-3 text-gray-700">
            <option value="1">Sedikit atau tidak sama sekali</option>
            <option value="2">Olahraga ringan 1-3 kali per minggu</option>
            <option value="3">Olahraga sedang 3-5 kali per minggu</option>
            <option value="4">Latihan fisik berat 5-7 kali per minggu</option>
            <option value="5">Latihan fisik sangat berat setiap hari</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600">Sasaran Nutrisi</label>
          <select className="border rounded-lg w-full p-3 text-gray-700">
            <option value="maintain">Mempertahankan berat badan</option>
            <option value="lose-light">Penurunan berat badan ringan</option>
            <option value="lose-medium">Penurunan berat badan sedang</option>
            <option value="lose-heavy">Penurunan berat badan berat</option>
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

export default KalkulatorKalori;
