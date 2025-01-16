module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'], // Font untuk heading
        body: ['Roboto', 'sans-serif'],    // Font untuk teks body
      },
    },
  },
  plugins: [],
};
