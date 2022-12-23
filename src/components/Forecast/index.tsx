import { useWeather } from "../../contexts/Weather";
import { Card, Container, HourCards } from "./styles/forecast";
import Wave from "../../assets/wave.svg";

function Forecast() {
  const { weatherInfo } = useWeather();

  return (
    <Container>
      <div className="day-weather">
        {weatherInfo &&
          weatherInfo.forecast?.forecastday[0].hour.map((hour: any) => {
            return (
              <HourCards hourTemp={hour.temp_c} maxTemp={weatherInfo.forecast?.forecastday[0].day.maxtemp_c}>
                <h2>{hour.time.slice(-5)}</h2>
                <p>{hour.temp_c}°</p>
                <img src={hour.condition.icon} alt="" />
                <span>{hour.condition.text}</span>
              </HourCards>
            );
          })}
      </div>
      <h1>NEXT THREE DAYS FORECAST</h1>
      <div className="forecast">
        {weatherInfo &&
          weatherInfo.forecast?.forecastday.map((day: any) => {
            return (
              <Card>
                <h2>{day.date.replace(/-/gi, "/")}</h2>
                <img src={day.day.condition.icon} alt="" />
                <p>{day.day.maxtemp_c}°</p>
                <p>{day.day.mintemp_c}°</p>
              </Card>
            );
          })}
      </div>
    </Container>
  );
}

export default Forecast;
