export const theme = (mode: string) => {
  return mode === "dark"
    ? {
        primary: "#3c3c3c",
        secondary: "#dc7248",
        textPrimary: "#ffffff",
        textSecondary: "#6c799a",
        clear: "rgba(50, 50, 50, 0.8)",
        clearSeconday: "rgba(29, 29, 29, 0.723)",
        disabled: "#4c4c4c",
        darkRed: "#700000",
      }
    : {
        primary: "#0048ff",
        secondary: "#6c799a",
        textPrimary: "#000000",
        textSecondary: "#ffffff",
        clear: "rgba(208, 208, 208, 0.8)",
        clearSeconday: "rgba(50, 50, 50, 0.8)",
        disabled: "#4c4c4c",
        darkRed: "#700000",
      };
};
