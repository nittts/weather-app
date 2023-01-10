import { useWeather } from "../../contexts/Weather";
import { Container } from "./styles/requestLocation.styles";

interface IProps {
  setLocationAvailable: React.Dispatch<React.SetStateAction<boolean>>;
}

function RequestLocation({ setLocationAvailable }: IProps) {
  const { fetchData } = useWeather();

  const setLocation = () => {
    let location = JSON.parse(localStorage.getItem("@WeatherApp:location") || "[]") || [];

    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted") {
        setLocationAvailable(true);
      }

      if (result.state === "prompt") {
        navigator.geolocation.getCurrentPosition((result: GeolocationPosition) => {
          location = [result.coords.latitude, result.coords.longitude];

          localStorage.setItem("@WeatherApp:location", JSON.stringify(location));
        });
      }
    });

    fetchData(location.join());
  };

  return (
    <Container>
      <button onClick={setLocation}>Request Location</button>
    </Container>
  );
}

export default RequestLocation;
