import { atom } from "recoil";

interface TStyle {
  mode: string;
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  clear: string;
  clearSeconday: string;
  disabled: string;
}

export const darkTheme = {
  mode: "dark",
  primary: "#3c3c3c",
  secondary: "#dc7248",
  secondaryLight: "#dc72485c",
  textPrimary: "#ffffff",
  textSecondary: "#dc7248",
  clear: "rgba(50, 50, 50, 0.85)",
  clearSeconday: "rgba(29, 29, 29, 0.723)",
  disabled: "#4c4c4c",
};

export const lightTheme = {
  mode: "light",
  primary: "#828282",
  secondary: "#c0eefc",
  secondaryLight: "#c0eefca6",
  textPrimary: "#000000",
  textSecondary: "#f4f4f4",
  clear: "rgba(208, 208, 208, 0.9)",
  clearSeconday: "rgba(122, 253, 253, 0.381)",
  disabled: "#4c4c4c",
};

export const themeAtom = atom<TStyle>({
  key: "theme",
  default: darkTheme,
});
