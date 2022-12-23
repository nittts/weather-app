import { Container } from "./styles/currentWeather";
import { FaCloud } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useWeather } from "../../contexts/Weather";

function CurrentWeather() {
  const [date, setDate] = useState<Date>(new Date());
  const { weatherInfo } = useWeather();
  const weekdayDict = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    const date = new Date();
    setDate(date);
  }, []);

  return (
    <Container>
      <div className="top-left">
        <h2>
          {weekdayDict[date.getDay()]}
          <span>{date.getFullYear()}</span>
        </h2>
        <p>
          {date.getHours()}:{date.getMinutes()}
        </p>
      </div>
      <div className="bottom-left">
        <p>
          {weatherInfo.current?.condition.text} <img src={weatherInfo.current?.condition.icon} alt="" />
        </p>
        <h2>
          {weatherInfo.location?.name} <span>{weatherInfo.current?.temp_c}°</span>
        </h2>
      </div>
      <div className="right">
        <div>
          <p>
            <span>Sunrise</span>
            {weatherInfo.forecast?.forecastday[0].astro?.sunrise}
          </p>
          <p>
            <span>Sunset</span>
            {weatherInfo.forecast?.forecastday[0].astro?.sunset}
          </p>
          <p>
            <span>Humidity</span>
            {weatherInfo.current?.humidity}%
          </p>
          <p>
            <span>UV Index</span>
            {weatherInfo.current?.uv}
          </p>
          <p>
            <span>Feels like</span>
            {weatherInfo.current?.feelslike_c}°
          </p>
          <p>
            <span>Chances of Rain</span>
            {weatherInfo.forecast?.forecastday[0].day?.daily_chance_of_rain}%
          </p>
          <div className="bottom">
            <h2>Today:</h2>
            <p>
              {weatherInfo.current?.condition?.text} currently. With temperatures raising from
              {weatherInfo.forecast?.forecastday[0].day?.mintemp_c}° celsius(
              {weatherInfo.forecast?.forecastday[0].day?.mintemp_f}F°) , up to{" "}
              {weatherInfo.forecast?.forecastday[0].day?.maxtemp_c}° celsius(
              {weatherInfo.forecast?.forecastday[0].day?.maxtemp_f}F°) , with an average of{" "}
              {weatherInfo.forecast?.forecastday[0].day?.avgtemp_c}° celsius(
              {weatherInfo.forecast?.forecastday[0].day?.avgtemp_f}F°).
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CurrentWeather;
