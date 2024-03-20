import { atom } from "recoil";

interface TStyle {
  mode: string;
  primary: string;
  secondary: string;
  secondaryLight: string;
  textPrimary: string;
  textSecondary: string;
  clear: string;
  clearSeconday: string;
  disabled: string;
}

export const themeAtom = atom<TStyle>({
  key: "theme",
  default: {
    mode: "dark",
    primary: "#3c3c3c",
    secondary: "#dc7248",
    secondaryLight: "#dc72485c",
    textPrimary: "#ffffff",
    textSecondary: "#dc7248",
    clear: "rgba(50, 50, 50, 0.85)",
    clearSeconday: "rgba(29, 29, 29, 0.723)",
    disabled: "#4c4c4c",
  },
});
