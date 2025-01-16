"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa"; // Import ikon FaArrowLeft
import { use } from "react";
import data from "../data.json"; // Pastikan path ke JSON benar

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // Unwrap params Promise menggunakan use()

  // Cari data blog berdasarkan ID
  const blog = data.find((item) => item.id.toString() === id);

  // Validasi jika blog tidak ditemukan
  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="mb-6">
              <img src="/img/logo.png" alt="Not Found" className="w-24 h-24 mx-auto mb-4" />
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Blog Tidak Ditemukan</h1>
            <p className="text-lg text-gray-500 mb-6">Sepertinya Blog/Artikel yang Anda cari sudah tidak tersedia. Jangan khawatir, kami memiliki banyak promo menarik lainnya!</p>
            <a href="/pages/blog">
              <button className="flex items-center justify-center bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-all">
                <FaArrowLeft className="w-5 h-5 mr-2" />
                Halaman Blogspot
              </button>
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Filter berita terkait berdasarkan kategori yang sama, kecuali berita saat ini
  const relatedBlogs = data
    .filter((item) => item.category === blog.category && item.id.toString() !== id)
    .slice(0, 3); // Ambil maksimal 3 berita

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <div className="flex-grow px-6 py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto">

          {/* Card Utama */}
          <div className="bg-white rounded-lg shadow-lg p-6">

          <a href="/pages/blog">
            <button className="flex items-center space-x-2 text-orange-500 mb-4 hover:text-orange-600 transition-all">
              <FaArrowLeft className="w-5 h-5" />
              <span className="sr-only">Back to Blospot</span> {/* Menyembunyikan teks untuk aksesibilitas */}
            </button>
          </a>
            {/* Judul */}
            <h1 className="text-4xl font-heading font-extrabold mb-6 text-center text-orange-600">{blog.title}</h1>

            {/* Pembuka */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800">Introduction</h2>
              <p className="text-gray-700 font-body leading-relaxed">{blog.intro}</p>
            </section>

            {/* Gambar */}
            <img
              src={blog.image || "/img/default.jpg"} // Gambar default jika tidak ada
              alt={blog.title}
              className="rounded-lg mb-8 w-full object-cover aspect-square" // Menggunakan aspect-square untuk gambar persegi
            />

            {/* Isi Paragraf 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800">Isi Paragraf 1</h2>
              <p className="text-gray-700 font-body leading-relaxed">{blog.paragraph1}</p>
            </section>

            {/* Kutipan */}
            {blog.quote && (
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-orange-700 my-8 bg-gray-200 bg-opacity-70 p-4">
                {blog.quote}
              </blockquote>
            )}

            {/* Isi Paragraf 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800">Isi Paragraf 2</h2>
              <p className="text-gray-700 font-body leading-relaxed">{blog.paragraph2}</p>
            </section>

            {/* Kesimpulan */}
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800">Conclusion</h2>
              <p className="text-gray-700 font-body leading-relaxed">{blog.conclusion}</p>
            </section>

            {/* Informasi Kategori */}
            <div className="text-sm text-white bg-black px-3 py-1 rounded-lg w-fit hover:bg-orange-600 transition">
              {blog.category}
            </div>
          </div>
        </div>
      </div>

      {/* Berita Terkait */}
      {relatedBlogs.length > 0 && (
        <div className="bg-gray-100 px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6 text-gray-800">Berita Terkait</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <div
                  key={relatedBlog.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={relatedBlog.image || "/img/default.jpg"}
                    alt={relatedBlog.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-heading font-semibold truncate">{relatedBlog.title}</h3>
                    <p className="text-sm text-gray-700 font-body truncate">{relatedBlog.intro}</p>
                    <Link href={`/pages/blog/${relatedBlog.id}`}>
                      <button className="mt-2 text-orange-500 hover:text-orange-600 font-body font-normal">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
