import { createContext, useState, useEffect, useCallback, ReactNode, useContext } from "react";
import { fetchByLang, weatherAPI } from "../../services/api";

interface IContextData {
  weatherInfo: any;
  fetchData: (query: string) => Promise<{} | undefined>;
}

interface IProviderProps {
  children: ReactNode;
}

const WeatherContext = createContext({} as IContextData);

const WeatherProvider = ({ children }: IProviderProps) => {
  const [weatherInfo, setWeatherInfo] = useState({});

  const fetchData = useCallback(
    async (query: string) => {
      const UserConfig = localStorage.getItem("@WeatherApp:config");

      if (UserConfig) {
        const user = JSON.parse(UserConfig);

        await weatherAPI.get(`/forecast.json?q=${query}&lang=${user.lang}`).then((res) => {
          setWeatherInfo(res.data);
        });

        return weatherInfo;
      }
    },
    [weatherInfo]
  );

  useEffect(() => {
    fetchData("auto:ip");
  }, []);

  return <WeatherContext.Provider value={{ weatherInfo, fetchData }}>{children}</WeatherContext.Provider>;
};

function useWeather() {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error("Weather Context not found, Provider is being applied?");
  }

  return context;
}

export { useWeather, WeatherProvider };
