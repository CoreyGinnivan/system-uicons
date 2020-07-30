module.exports = {
  purge: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      mono: [
        "Roboto Mono, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
      ],
    },
  },
  variants: {
    scale: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "focus-within"],
  },
  plugins: [
    // Some useful comment
  ],
};
