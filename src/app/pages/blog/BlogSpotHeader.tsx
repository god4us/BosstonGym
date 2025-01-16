"use client";
// src/app/pages/blog/BlogSpotHeader.tsx
const BlogSpotHeader = () => (
  <header className="text-center mb-12 mt-20">
    {/* Judul dengan efek stroke */}
    <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
      <span className="block text-transparent stroke-text">BlogSpot</span>
      <span className="block">BosstonGym</span>
    </h1>
    
    {/* Deskripsi */}
    <p className="text-gray-600 font-body mt-4">
      Temukan tips dan informasi seputar kebugaran
    </p>
    
    {/* Style untuk stroke efek */}
    <style jsx>{`
      .stroke-text {
        -webkit-text-stroke: 1px black; /* Menyesuaikan ketebalan stroke */
        color: transparent;
      }
    `}</style>
  </header>
);

export default BlogSpotHeader;
