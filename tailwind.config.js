/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors for light mode
        border: "hsl(210, 10%, 80%)", // Example value for border
        input: "hsl(210, 8%, 85%)", // Example value for input background
        ring: "hsl(210, 90%, 55%)", // Example value for ring
        background: "hsl(0, 0%, 98%)", // Example value for background
        foreground: "hsl(210, 5%, 10%)", // Example value for text foreground

        // Primary colors for light mode
        primary: {
          DEFAULT: "hsl(210, 100%, 50%)", // Example for primary background
          foreground: "hsl(0, 0%, 100%)", // Example for primary foreground text
        },

        // Secondary colors for light mode
        secondary: {
          DEFAULT: "hsl(340, 100%, 50%)", // Example for secondary background
          foreground: "hsl(0, 0%, 100%)", // Example for secondary foreground text
        },

        // Muted colors
        muted: {
          DEFAULT: "hsl(210, 10%, 90%)", // Example for muted background
          foreground: "hsl(210, 5%, 30%)", // Example for muted foreground
        },

        // Accent colors
        accent: {
          DEFAULT: "hsl(210, 100%, 60%)", // Example for accent background
          foreground: "hsl(0, 0%, 100%)", // Example for accent foreground text
        },

        // Card colors for light mode
        card: {
          DEFAULT: "hsl(210, 5%, 95%)", // Example card background
          foreground: "hsl(210, 5%, 20%)", // Example card foreground
        },

        // Define dark mode colors
        "card-dark": "#1e1e1e", // Dark mode card background color
        "card-foreground-dark": "#ffffff", // Dark mode card text color
        "primary-dark": "#1a73e8", // Dark mode primary color
        "primary-foreground-dark": "#ffffff", // Dark mode primary text color
        "secondary-dark": "#ff5722", // Dark mode secondary color
        "secondary-foreground-dark": "#ffffff", // Dark mode secondary text color
        "input-dark": "#333333", // Dark mode input background color
        "border-dark": "#444444", // Dark mode border color
        "ring-dark": "#007aff", // Dark mode ring color
        "background-dark": "#121212", // Dark mode background color
        "foreground-dark": "#e0e0e0", // Dark mode text foreground color

        // Muted dark mode colors
        "muted-dark": "#2c2c2c", // Dark mode muted background
        "muted-foreground-dark": "#999999", // Dark mode muted foreground
      },
    },
  },
  plugins: [],
}

