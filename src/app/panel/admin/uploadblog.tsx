"use client";

import { useState } from "react";

export default function UploadBlog() {
  const [blogData, setBlogData] = useState({
    id: "",
    category: "",
    title: "",
    image: null as File | null,
    intro: "",
    paragraph1: "",
    quote: "",
    paragraph2: "",
    conclusion: "",
  });

  // Menentukan tipe parameter 'e' untuk input teks
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Menentukan tipe parameter 'e' untuk input file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setBlogData((prevData) => ({ ...prevData, image: file }));
  };

  // Menentukan tipe parameter 'e' untuk submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Blog Data Submitted:", blogData);
    alert("Blog berhasil diupload!");
    // Reset form
    setBlogData({
      id: "",
      category: "",
      title: "",
      image: null,
      intro: "",
      paragraph1: "",
      quote: "",
      paragraph2: "",
      conclusion: "",
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Upload Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">ID</label>
          <input
            type="text"
            name="id"
            value={blogData.id}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Category</label>
          <input
            type="text"
            name="category"
            value={blogData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Title</label>
          <input
            type="text"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Upload Image</label>
          <input type="file" onChange={handleFileChange} className="w-full" />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Intro</label>
          <textarea
            name="intro"
            value={blogData.intro}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm text-gray-600">Paragraph 1</label>
          <textarea
            name="paragraph1"
            value={blogData.paragraph1}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm text-gray-600">Quote</label>
          <textarea
            name="quote"
            value={blogData.quote}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm text-gray-600">Paragraph 2</label>
          <textarea
            name="paragraph2"
            value={blogData.paragraph2}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm text-gray-600">Conclusion</label>
          <textarea
            name="conclusion"
            value={blogData.conclusion}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
          Upload Blog
        </button>
      </form>
    </div>
  );
}
