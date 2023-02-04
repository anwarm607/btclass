import { ThemeProvider } from "styled-components";

const themesObj = {
  colors: {
    btnColor: "#FFFDF9",
    btnBackground: "purple",
  },
  darkColors: {
    btnColor: "#fff",
    btnBackground: "#000",
  },
};

const Theme = ({ children, theme }) => (
  <ThemeProvider
    theme={theme === "dark" ? themesObj.darkColors : themesObj.colors}
  >
    {children}
  </ThemeProvider>
);
export default Theme;
