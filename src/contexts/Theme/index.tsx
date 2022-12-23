import { createContext, useState, useEffect, useCallback, ReactNode, useContext } from "react";
import { lightTheme, darkTheme, ITheme } from "../../styles/Theme";
import { ThemeProvider } from "styled-components";

interface IContextData {
  changeTheme: () => void;
  theme: IStateTheme;
}

interface IProviderProps {
  children: ReactNode;
}

interface IStateTheme {
  colorMode: string;
  theme: ITheme;
}

const ThemeContext = createContext({} as IContextData);

const AppThemeProvider = ({ children }: IProviderProps) => {
  const [theme, setTheme] = useState<IStateTheme>({ colorMode: "light", theme: lightTheme });

  const changeTheme = useCallback(() => {
    const UserConfig = JSON.parse(localStorage.getItem("@WeatherApp:config") || "");

    if (UserConfig.colorMode === "light") {
      setTheme({ colorMode: "dark", theme: darkTheme });
      localStorage.setItem("@WeatherApp:config", JSON.stringify({ ...UserConfig, colorMode: "dark" }));
      return;
    }

    setTheme({ colorMode: "light", theme: lightTheme });
    localStorage.setItem("@WeatherApp:config", JSON.stringify({ ...UserConfig, colorMode: "light" }));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      <ThemeProvider theme={theme.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Theme Context not found, Provider is being applied?");
  }

  return context;
}

export { useTheme, AppThemeProvider };
