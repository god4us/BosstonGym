"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import Head from "next/head";

const faqData: Record<string, { question: string; answer: string }[]> = {
  umum: [
    {
      question: "Apa jam operasional Bosston Gym?",
      answer: "Bosston Gym buka setiap hari dari pukul 07.00 hingga 21.00.",
    },
    {
      question: "Apakah tersedia tempat parkir?",
      answer: "Ya, kami menyediakan tempat parkir gratis untuk semua anggota.",
    },
  ],
  membership: [
    {
      question: "Bagaimana cara mendaftar menjadi member?",
      answer: "Anda dapat mendaftar melalui website kami atau langsung ke lokasi gym.",
    },
    {
      question: "Apakah ada diskon untuk pelajar?",
      answer: "Ya, kami menawarkan diskon khusus untuk pelajar dengan menunjukkan kartu pelajar.",
    },
  ],
  fasilitas: [
    {
      question: "Apa saja fasilitas yang tersedia di Bosston Gym?",
      answer: "Kami menyediakan area gym, ruang yoga, dan ruang loker yang lengkap.",
    },
    {
      question: "Apakah tersedia pelatih pribadi?",
      answer: "Ya, Anda dapat menyewa pelatih pribadi sesuai kebutuhan Anda.",
    },
  ],
  pembayaran: [
    {
      question: "Metode pembayaran apa saja yang diterima?",
      answer: "Kami menerima pembayaran melalui kartu kredit, debit, dan transfer bank.",
    },
    {
      question: "Bisakah saya membayar secara bulanan?",
      answer: "Tentu saja, kami menyediakan opsi pembayaran bulanan untuk semua paket membership.",
    },
  ],
};

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof faqData>("umum");
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [showCTA, setShowCTA] = useState(false);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // Menunggu 20 detik sebelum menampilkan CTA
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, 20000); // 20 detik

    // Bersihkan timeout jika komponen tidak lagi aktif
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <main className="max-w-screen-xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-wide">
            Pusat Bantuan
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu Anda. Temukan jawaban dari pertanyaan Anda di bawah ini atau pilih kategori untuk informasi lebih spesifik.
          </p>
        </section>

        {/* Kategori FAQ */}
        <section className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Umum", key: "umum", icon: "💬" },
              { label: "Membership", key: "membership", icon: "🪪" },
              { label: "Fasilitas", key: "fasilitas", icon: "🏋️" },
              { label: "Pembayaran", key: "pembayaran", icon: "💳" },
            ].map((item) => (
              <button
                key={item.key}
                className={`flex flex-col items-center p-6 w-40 h-40 border rounded-lg shadow-md transition-all transform ${
                  activeCategory === item.key
                    ? "bg-orange-500 text-white scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:shadow-lg"
                }`}
                onClick={() => setActiveCategory(item.key)}
              >
                <span className="text-4xl mb-3">{item.icon}</span>
                <span className="text-lg font-normal">{item.label}</span> {/* Ganti font-semibold menjadi font-normal */}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-xl font-heading font-extrabold text-center text-gray-800 mb-6">
            Pertanyaan Umum
          </h2>
          <div className="space-y-4">
            {faqData[activeCategory].map((faq, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-800">{faq.question}</h3>
                  <span className="text-sm font-semibold text-gray-500">{activeFAQ === index ? "−" : "+"}</span>
                </div>
                {activeFAQ === index && (
                  <p className="text-sm text-gray-500">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        {showCTA && (
          <section
            className="text-center mt-12 opacity-0 transform transition-opacity duration-1000"
            style={{
              opacity: showCTA ? 1 : 0,
              transform: showCTA ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Tidak menemukan jawaban Anda?
            </h3>
            <p className="text-gray-500 mb-6">
              Hubungi tim kami langsung untuk bantuan lebih lanjut.
            </p>
            <a
              href="/pages/hubungikami"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition transform hover:scale-105"
            >
              Hubungi Kami
            </a>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
