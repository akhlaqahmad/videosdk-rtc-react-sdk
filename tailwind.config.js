const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  mode: "jit",
  theme: {
    colors: {
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      indigo: colors.indigo,
      slate: colors.slate,
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      green: colors.green,
      red: colors.red,
      pink: colors.pink,
    },
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
        sans: [
          "lato",
          "BlinkMacSystemFont",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: ["Source Code Pro", "Menlo", "monospace"],
      },

      colors: {
        // New Design Token System
        // Surfaces
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-muted": "rgb(var(--surface-muted) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        
        // Brand colors
        brand: {
          50: "rgb(var(--brand-50) / <alpha-value>)",
          100: "rgb(var(--brand-100) / <alpha-value>)",
          200: "rgb(var(--brand-200) / <alpha-value>)",
          300: "rgb(var(--brand-300) / <alpha-value>)",
          400: "rgb(var(--brand-400) / <alpha-value>)",
          500: "rgb(var(--brand-500) / <alpha-value>)",
          600: "rgb(var(--brand-600) / <alpha-value>)",
          700: "rgb(var(--brand-700) / <alpha-value>)",
          800: "rgb(var(--brand-800) / <alpha-value>)",
          900: "rgb(var(--brand-900) / <alpha-value>)",
        },
        
        // Accent colors
        accent: {
          50: "rgb(var(--accent-50) / <alpha-value>)",
          100: "rgb(var(--accent-100) / <alpha-value>)",
          200: "rgb(var(--accent-200) / <alpha-value>)",
          300: "rgb(var(--accent-300) / <alpha-value>)",
          400: "rgb(var(--accent-400) / <alpha-value>)",
          500: "rgb(var(--accent-500) / <alpha-value>)",
          600: "rgb(var(--accent-600) / <alpha-value>)",
          700: "rgb(var(--accent-700) / <alpha-value>)",
          800: "rgb(var(--accent-800) / <alpha-value>)",
          900: "rgb(var(--accent-900) / <alpha-value>)",
        },
        
        // Neutral colors
        neutral: {
          50: "rgb(var(--neutral-50) / <alpha-value>)",
          100: "rgb(var(--neutral-100) / <alpha-value>)",
          200: "rgb(var(--neutral-200) / <alpha-value>)",
          300: "rgb(var(--neutral-300) / <alpha-value>)",
          400: "rgb(var(--neutral-400) / <alpha-value>)",
          500: "rgb(var(--neutral-500) / <alpha-value>)",
          600: "rgb(var(--neutral-600) / <alpha-value>)",
          700: "rgb(var(--neutral-700) / <alpha-value>)",
          800: "rgb(var(--neutral-800) / <alpha-value>)",
          900: "rgb(var(--neutral-900) / <alpha-value>)",
        },
        
        // Text colors
        "text-primary": "rgb(var(--text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted) / <alpha-value>)",
        "text-inverse": "rgb(var(--text-inverse) / <alpha-value>)",
        
        // Interactive elements
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--primary-foreground) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        focus: "rgb(var(--focus) / <alpha-value>)",
        
        // Legacy support - keeping existing tokens
        surface2: "rgb(var(--surface-2) / <alpha-value>)",
        primary100: "rgb(var(--primary-100) / <alpha-value>)",
        primary200: "rgb(var(--primary-200) / <alpha-value>)",
        neutral100: "rgb(var(--neutral-100) / <alpha-value>)",
        neutral200: "rgb(var(--neutral-200) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        textmuted: "rgb(var(--text-muted) / <alpha-value>)",
        
        // Existing color scales for backward compatibility
        gray: {
          50: "#555555",
          100: "#FFFFFF",
          150: "#3f4046",
          200: "#EFEFEF",
          250: "#3F4346",
          300: "#DADADA",
          350: "#344154",
          400: "#818181",
          450: "#455A64",
          500: "#6F767E",
          600: "#404B53",
          650: "#202427",
          700: "#232830", //"#26282C", //"#2B3034",
          750: "#1A1C22",
          800: "#050A0E",
          850: "#26282C",
          900: "#95959E",

        },
        orange: {
          250: "#FF5810",
          350: "#FF5D5D",
        },
        yellow: {
          150: "#FF900C",
        },
        purple: {
          350: "#5568FE",
          550: "#596BFF",
          600: "#586FEA",
          650: "#2B3480",
          700: "#4F63D2",
          750: "#6246FB",
          300: "#4658BB",
        },
        red: { 
          150: "#D32F2F",
          250: "#FF6262",
          650: "#FF5D5D"
         },
        pink: {
          150: "#EC4899",
          250: "#FFB5B5",
          750: "#2c1a22",
        },
        green: {
          150: "#3BA55D",
          250: "#40A954",
          350: "#34A85333",
          450: "#34A85380",
          550: "#87E5A2",
          650: "#96F3D24D",
          750: "#A3FEE3",
        },
        blue: {
          350: "#76d9e6",
        },
        
        customGray: {
          100: "#252A34",
          150: "#31353B",
          200: "#1E1E1E",
          250: "#B4B4B4",
          300: "#454545",
          350: "#2B303499",
          400: "#282828",
          500: "#848484",
          600: "#C4C4C4",
          700: "#272727",
          800: "#343434",
          850: "#9E9DA6",
          900: "#373C43",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
