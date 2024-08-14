
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: "class",
//   theme: {
//     container: {
//       center: true,
//       padding: "1rem",
//     },
//     colors: {
//       current: "currentColor",
//       transparent: "transparent",
//       white: "#FFFFFF",
//       black: "#090E34",
//       dark: "#1D2144",
//       primary: {
//         DEFAULT: "#4A6CF7",
//         light: "#AEAEAE",
//         dark: "#2676d9",
//       },
//       secondary: {
//         DEFAULT: "#FFA500",
//         light: "#FFB732",
//         dark: "#CC8400",
//       },
//       yellow: "#FBB040",
//       "body-color": "#959CB1",
//       gray: {
//         50: "#F9FAFB",
//         100: "#F3F4F6",
//         200: "#E5E7EB",
//         300: "#D1D5DB",
//         400: "#9CA3AF",
//         500: "#6B7280",
//         600: "#4B5563",
//         700: "#374151",
//         800: "#1F2937",
//         900: "#111827",
//       },
//       blue: {
//         50: "#EFF6FF",
//         100: "#DBEAFE",
//         200: "#BFDBFE",
//         300: "#93C5FD",
//         400: "#60A5FA",
//         500: "#3B82F6",
//         600: "#2563EB",
//         700: "#1D4ED8",
//         800: "#1E40AF",
//         900: "#1E3A8A",
//       },
//       red: {
//         50: "#FEF2F2",
//         100: "#FEE2E2",
//         200: "#FECACA",
//         300: "#FCA5A5",
//         400: "#F87171",
//         500: "#EF4444",
//         600: "#DC2626",
//         700: "#B91C1C",
//         800: "#991B1B",
//         900: "#7F1D1D",
//       },
//     },
//     screens: {
//       xs: "400px", // Adjusted for smaller devices
//       sm: "640px", // Standard small screen breakpoint
//       md: "768px", // Tablet screen size
//       lg: "1024px", // Standard desktop size
//       xl: "1280px", // Larger desktop
//       "2xl": "1536px", // Ultra-large screens
//     },
//     extend: {
//       boxShadow: {
//         signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
//         one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
//         sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
//         card: "0 4px 6px rgba(0, 0, 0, 0.1)", // New box shadow for cards
//       },
//       borderRadius: {
//         xl: "1rem",
//         "2xl": "1.5rem",
//         "3xl": "2rem",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#090E34",
      dark: "#1D2144",
      primary: "#4A6CF7",
      yellow: "#FBB040",
      "body-color": "#959CB1",
    },
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};



