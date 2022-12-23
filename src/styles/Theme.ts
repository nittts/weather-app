const darkTheme = {
  primary: "#FFF",
  secondary: "#1e1e1e",
  tertiary: "#f0f0f0",
  accentLight: "#229AEF",
  accentMedium: "#6E9fc1",
  accentDark: "#26638f",
};

const lightTheme = {
  primary: "#1e1e1e",
  secondary: "#FFF",
  tertiary: "#f0f0f0",
  accentLight: "#26638f",
  accentMedium: "#6E9fc1",
  accentDark: "#229AEF",
};

// font-family: "Open Sans", sans-serif;
// font-family: "Ubuntu", sans-serif;

export type ITheme = {
  [key: string]: string;
};

export { darkTheme, lightTheme };
