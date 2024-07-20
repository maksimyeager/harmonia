module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "0 15px",
        screens: {
          DEFAULT: "1110px",
        },
      },
    },
  },
  plugins: [],
};
