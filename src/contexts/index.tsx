import { ReactNode, useEffect } from "react";
import { AppThemeProvider } from "./Theme";
import { WeatherProvider } from "./Weather";

interface IProviderProps {
  children: ReactNode;
}

function Providers({ children }: IProviderProps) {
  useEffect(() => {
    const data = {
      colorMode: "light",
      lang: "en",
    };

    localStorage.setItem("@WeatherApp:config", JSON.stringify(data));

    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("@WeatherApp:config");
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        localStorage.removeItem("@WeatherApp:config");
      });
    };
  }, []);

  return (
    <AppThemeProvider>
      <WeatherProvider>{children}</WeatherProvider>
    </AppThemeProvider>
  );
}

export default Providers;
