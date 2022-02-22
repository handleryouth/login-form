module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-pattern": "url('/bg-intro-desktop.png')",
        "mobile-pattern": "url('/bg-intro-mobile.png')",
      },
    },
  },
  variants: {
    backgroundColor: ["disabled"],
  },
  plugins: [],
};
