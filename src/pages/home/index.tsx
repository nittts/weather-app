import { Container, Content } from "./styles/home";
import database from "../../database";
import { useWeather } from "../../contexts/Weather";
import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/Theme";
import Header from "../../components/Header";
import CurrentWeather from "../../components/CurrentWeather";
import Forecast from "../../components/Forecast";
import Maps from "../../components/Maps";

function Home() {
  const [backgroundImg, setBackgroundImg] = useState("");
  const { weatherInfo } = useWeather();
  const { theme } = useTheme();

  function fetchBg(code: number) {
    const res = database.forEach((type) => {
      const found = type.codes.includes(code);
      if (found) {
        setBackgroundImg(type.img);
      }
    });
    return res;
  }

  useEffect(() => {
    if (weatherInfo && weatherInfo.current) {
      fetchBg(weatherInfo.current.condition.code);
    }
  }, [weatherInfo]);

  return (
    <Container bgImg={backgroundImg} dark={theme.colorMode === "dark"}>
      <Content>
        <Header />
        <CurrentWeather />
        <Forecast />
        <Maps />
      </Content>
    </Container>
  );
}

export default Home;
