"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FeatureCards = () => {
  const router = useRouter();
  
  // Gambar blog dan promo, jika data diambil dari API atau JSON
  const blogImages = [
    "/img/1.jpg", 
    "/img/2.jpg", 
    "/img/3.jpg", 
    "/img/4.jpg", 
    "/img/5.jpg" // Menambah gambar
  ];

  const promoImages = [
    "/img/6.jpg", 
    "/img/7.jpg", 
    "/img/8.jpg", 
    "/img/9.jpg", 
    "/img/10.jpg" // Menambah gambar
  ];

  const [blogImageIndex, setBlogImageIndex] = useState(0);
  const [promoImageIndex, setPromoImageIndex] = useState(0);

  // Mengatur interval untuk gambar blog dan promo secara terpisah
  useEffect(() => {
    const blogTimer = setInterval(() => {
      setBlogImageIndex((prev) => (prev + 1) % blogImages.length);
    }, 4500); // Setiap 4.5 detik gambar blog berganti

    const promoTimer = setInterval(() => {
      setPromoImageIndex((prev) => (prev + 1) % promoImages.length);
    }, 5500); // Setiap 5.5 detik gambar promo berganti

    return () => {
      clearInterval(blogTimer);
      clearInterval(promoTimer);
    };
  }, [blogImages.length, promoImages.length]);

  const features = [
    {
      title: "Blog",
      description: "Temukan informasi terbaru seputar kesehatan dan kebugaran.",
      images: blogImages, // Menggunakan array gambar blog
      link: "/pages/blog",
    },
    {
      title: "Membership",
      description: "Gabung bersama kami dan nikmati berbagai fasilitas eksklusif.",
      image: "/img/12.jpg",
      link: "/pages/membership",
    },
    {
      title: "Promosi",
      description: "Manfaatkan penawaran menarik untuk perjalanan kebugaran Anda.",
      images: promoImages, // Menggunakan array gambar promo
      link: "/pages/promosi",
    },
    {
      title: "Personal Trainer",
      description: "Dapatkan bimbingan pribadi untuk mencapai tujuan Anda.",
      image: "/img/10.jpg",
      link: "/pages/personal-trainer",
    },
    {
      title: "Fasilitas",
      description: "Jelajahi fasilitas kami yang lengkap dan modern.",
      image: "/img/20.jpg",
      link: "/pages/facility",
    },
  ];

  const cardsPerPage = 3;
  const [currentIndex, setCurrentIndex] = useState(cardsPerPage);

  const extendedFeatures = [
    ...features.slice(-cardsPerPage),
    ...features,
    ...features.slice(0, cardsPerPage),
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= features.length + cardsPerPage) {
      setCurrentIndex(cardsPerPage);
    } else if (currentIndex < cardsPerPage) {
      setCurrentIndex(features.length + cardsPerPage - 1);
    }
  };

  return (
    <section className="relative w-full px-8 py-12 bg-gray-100 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / cardsPerPage}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedFeatures.map((feature, index) => (
          <div
            key={index}
            className="relative group w-full flex-shrink-0 px-4 cursor-pointer"
            style={{ width: `calc(100% / ${cardsPerPage})` }}
            onClick={() => router.push(feature.link)}
          >
            <div
              className="overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 h-[300px] bg-cover bg-center group-hover:scale-105"
              style={{
                backgroundImage: `url(${feature.images ? feature.images[blogImageIndex] : feature.image})`, // Menampilkan gambar sesuai index
              }}
            >
              {/* Container untuk Judul dan Deskripsi */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent group-hover:opacity-80 transition-opacity duration-500">
                {/* Judul yang bergerak ke atas saat hover */}
                <h3 className="font-heading text-lg font-bold text-white group-hover:translate-y-8 group-hover:text-orange-500 transition-all duration-300 ease-in-out">
                  {feature.title}
                </h3>

                {/* Deskripsi yang hilang saat hover */}
                <p className="font-body text-sm text-gray-200 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300 ease-in-out">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-200"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-200"
      >
        <FaChevronRight />
      </button>
    </section>
  );
};

export default FeatureCards;
