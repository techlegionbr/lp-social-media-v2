import { breakFonts, breakpoints } from "./breakpoints";

export const theme = {
  colors: {
    alert: {
      main: "#E1A72C",
      light: "#F1B927"
    },
    danger: {
      main: "#e73434",
      light: ""
    },
    primary: {
      main: "#1c0233",
      light: "#200636",
    },
    secondary: {
      main: "#0061FF",
      light: "#8C54E8",
    },
    third: {
      main: "#00DBFF",
      light: "#027283",
    },
    light: {
      main: "#EFE4EE",
      light: "#F0F0F0",
    },
    success: {
      main: "#42f31e",
      light: "",
    },
  },
  limits: {
    content: "900px",
  },
  breakpoints,
  font: {
    family: {
      Poppins: "'Poppins', sans-serif",
      Roboto: "'Roboto', sans-serif",
    },
    size: breakFonts.lg
  },
};

