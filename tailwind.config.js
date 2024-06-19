export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#f3f7ff",
        task: "#fdffff",
        "subtask-1": "#65c9d7",
        "subtask-2": "#5980c3",
        "subtask-3": "#cb80bf",
        "subtask-4": "#856cbb",
        "subtask-5": "#d5bd68",
      },
    },
  },
  safelist: ["subtask-1", "subtask-2", "subtask-3", "subtask-4", "subtask-5"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3490DC", // Blue
          secondary: "#848283", // Grey
          "base-100": "#FFFFFF", // White
          "base-200": "#f5f8fd", // White-2
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
