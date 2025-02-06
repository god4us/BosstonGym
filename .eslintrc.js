module.exports = {
    extends: "next/core-web-vitals",
    rules: {
      "@typescript-eslint/no-explicit-any": "off",         // Nonaktifkan error penggunaan 'any'
      "@typescript-eslint/no-unused-vars": "off",          // Nonaktifkan error variabel tidak terpakai
      "@next/next/no-img-element": "off",                  // Nonaktifkan peringatan penggunaan <img>
      "@next/next/no-html-link-for-pages": "off",          // Nonaktifkan error penggunaan <a> tanpa <Link>
      "prefer-const": "off",                               // Nonaktifkan saran penggunaan const
      "@next/next/no-page-custom-font": "off"              // Nonaktifkan peringatan custom font di luar _document.js
    }
  };
  