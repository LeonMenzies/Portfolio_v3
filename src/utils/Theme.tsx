export const theme = (mode: string) => {
  return mode === "dark"
    ? {
        background: "#171717",
        primary: "#6c799a",
        secondary: "#6c799a",
        textPrimary: "#ffffff",
        textSecondary: "#6c799a",
        clear: "rgba(50, 50, 50, 0.8)",
        clearSeconday: "rgba(29, 29, 29, 0.723)",
        disabled: "#4c4c4c",
        darkRed: "#700000",
      }
    : {
        background: "#6c799a",
        primary: "#6c799a",
        secondary: "#6c799a",
        textPrimary: "#6c799a",
        textSecondary: "#ffffff",
        clear: "rgba(50, 50, 50, 0.8)",
        clearSeconday: "rgba(50, 50, 50, 0.8)",
        disabled: "#4c4c4c",
        darkRed: "#700000",
      };
};
