export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#f3f7ff",
        task: "#fdffff",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3490DC", // blue
          secondary: "#848283", // grey
          "base-100": "#FFFFFF", // White background
          success: "#38C172", // Green
          error: "#E3342F", // Bright red for error messages
        },
      },
    ],
    darkTheme: "dark",
    base: false,
    styled: true,
  },
};
