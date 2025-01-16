"use client";

import { useState } from "react";

export default function UploadPromosi() {
  const [promoData, setPromoData] = useState({
    id: "",
    title: "",
    description: "",
    duration: "",
    image: null as File | null,
  });

  // Menentukan tipe parameter 'e' untuk input teks
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPromoData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Menentukan tipe parameter 'e' untuk input file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setPromoData((prevData) => ({ ...prevData, image: file }));
  };

  // Menentukan tipe parameter 'e' untuk submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Promosi Data Submitted:", promoData);
    alert("Promosi berhasil diupload!");
    // Reset form
    setPromoData({ id: "", title: "", description: "", duration: "", image: null });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-800 text-center">Upload Promosi</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">ID</label>
            <input
              type="text"
              name="id"
              value={promoData.id}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Title</label>
            <input
              type="text"
              name="title"
              value={promoData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Description</label>
            <textarea
              name="description"
              value={promoData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm text-gray-600">Duration</label>
            <input
              type="text"
              name="duration"
              value={promoData.duration}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Upload Image</label>
            <input type="file" onChange={handleFileChange} className="w-full" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Upload Promosi
          </button>
        </form>
      </div>
    </div>
  );
}
