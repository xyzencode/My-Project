import tailwindcss from 'tailwindcss';

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      width: {
        '500': '500px',
      },
      colors: {
        primary: "#0070f3",
        secondary: "#ff0080"
      }
    }
  },
  plugins: [tailwindcss],
};

export default config;