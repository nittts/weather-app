import { useWeather } from "../../contexts/Weather";
import { Container } from "./styles/requestLocation.styles";

interface IProps {
  setLocationAvailable: React.Dispatch<React.SetStateAction<boolean>>;
}

function RequestLocation({ setLocationAvailable }: IProps) {
  const { fetchData } = useWeather();

  const setLocation = () => {
    let location = JSON.parse(localStorage.getItem("@WeatherApp:location") || "[]") || [];

    navigator.permissions.query({ name: "geolocation" }).then((_) => {
      navigator.geolocation.getCurrentPosition(
        (result: GeolocationPosition) => {
          location = [result.coords.latitude, result.coords.longitude];
        },
        (err) => {
          console.log(err);
        },
        { maximumAge: 60000, timeout: 1000, enableHighAccuracy: true }
      );
    });

    setLocationAvailable(true);
    fetchData(location.join() || "auto:ip");
  };

  return (
    <Container>
      <button onClick={setLocation}>Request Location</button>
    </Container>
  );
}

export default RequestLocation;
