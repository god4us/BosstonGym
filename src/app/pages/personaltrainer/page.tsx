"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import Head from "next/head";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

// Data pelatih
const trainers = [
  {
    id: 1,
    name: "Andi Setiawan",
    role: "Pelatih Utama",
    description: "Berpengalaman dalam membimbing klien mencapai tujuan kebugaran mereka.",
    icons: [
      { platform: "Instagram", link: "https://instagram.com/andi_setiawan", icon: <FaInstagram /> },
      { platform: "WhatsApp", link: "https://wa.me/1234567890", icon: <FaWhatsapp /> },
    ],
  },
  {
    id: 2,
    name: "Siti Rahmawati",
    role: "Ahli Gizi",
    description: "Menyediakan panduan nutrisi untuk mendukung program latihan.",
    icons: [
      { platform: "Instagram", link: "https://instagram.com/siti_rahmawati", icon: <FaInstagram /> },
      { platform: "WhatsApp", link: "https://wa.me/0987654321", icon: <FaWhatsapp /> },
    ],
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Pelatih Kebugaran",
    description: "Spesialis dalam program kebugaran kelompok dan motivasi.",
    icons: [
      { platform: "Instagram", link: "https://instagram.com/budi_santoso", icon: <FaInstagram /> },
      { platform: "WhatsApp", link: "https://wa.me/1122334455", icon: <FaWhatsapp /> },
    ],
  },
  {
    id: 4,
    name: "Diana Purnama",
    role: "Pelatih Yoga",
    description: "Mengajarkan teknik yoga untuk keseimbangan tubuh dan pikiran.",
    icons: [
      { platform: "Instagram", link: "https://instagram.com/diana_purnama", icon: <FaInstagram /> },
      { platform: "WhatsApp", link: "https://wa.me/5566778899", icon: <FaWhatsapp /> },
    ],
  },
  {
    id: 5,
    name: "Eko Prasetyo",
    role: "Pelatih Fisik",
    description: "Ahli dalam meningkatkan kekuatan dan daya tahan tubuh.",
    icons: [
      { platform: "Instagram", link: "https://instagram.com/eko_prasetyo", icon: <FaInstagram /> },
      { platform: "WhatsApp", link: "https://wa.me/9988776655", icon: <FaWhatsapp /> },
    ],
  },
];

export default function PersonalTrainerPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Apa saja manfaat memiliki personal trainer?",
      answer:
        "Personal trainer membantu Anda mencapai tujuan kebugaran dengan cepat dan aman melalui bimbingan ahli.",
    },
    {
      question: "Apakah personal trainer cocok untuk pemula?",
      answer:
        "Ya, personal trainer akan membantu pemula memahami dasar-dasar latihan dan mencegah cedera.",
    },
    {
      question: "Berapa biaya layanan personal trainer?",
      answer:
        "Biaya layanan personal trainer bervariasi tergantung pengalaman dan program yang dipilih.",
    },
  ];

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <main className="max-w-screen-xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
            <span className="block text-transparent stroke-text">Daftar</span>
            <span className="block">Personal Trainer</span>
            <span className="block text-transparent stroke-text">BosstonGym</span>
          </h2>
          <p className="text-gray-600 font-body mt-4">
            Temui pelatih-pelatih kami yang siap membimbing perjalanan kebugaran Anda!
          </p>
        </section>

        {/* Trainers Scrollable with Slide-In Effect */}
        <section className="overflow-x-auto py-6">
          <div className="flex gap-6">
            {trainers.map((trainer, idx) => (
              <div
                key={trainer.id}
                className={`flex-shrink-0 w-64 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 ${
                  hasAnimated ? "animate-slide-in" : ""
                }`}
                style={{ animationDelay: `${idx * 0.3}s` }}
              >
                <div className="w-full h-64 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url('/img/1.jpg')` }}></div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-heading font-medium text-gray-800">{trainer.name}</h3>
                  <p className="text-xs text-orange-500 font-body">{trainer.role}</p>
                  <p className="text-sm text-gray-700 mt-3 font-body">{trainer.description}</p>
                  <div className="flex gap-4 mt-6 justify-center">
                    {trainer.icons.map((icon, index) => (
                      <a
                        key={index}
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={icon.platform}
                        className="text-gray-800 hover:text-orange-500 transition transform hover:scale-110"
                      >
                        {icon.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mt-12">
          <h2 className="text-xl font-heading font-extrabold text-center text-gray-800 mb-6">
            Pertanyaan Umum
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
                  <p className="text-sm text-gray-500 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Button */}
        <div className="text-center mt-8">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition text-lg font-medium"
          >
            Hubungi Kami di WhatsApp
          </a>
        </div>
      </main>
      <Footer />

      {/* Style untuk Stroke & Animasi */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px black;
          color: transparent;
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 1s forwards;
        }
      `}</style>
    </div>
  );
}
