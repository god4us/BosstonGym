// src/app/pages/blog/page.tsx

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogSpotHeader from "./BlogSpotHeader";
import BlogCardGrid from "./BlogCardGrid"; // Impor komponen BlogCardGrid

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <BlogSpotHeader />
        <BlogCardGrid /> {/* Tambahkan komponen BlogCardGrid */}
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
