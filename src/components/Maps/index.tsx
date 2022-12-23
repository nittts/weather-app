import { Container } from "./styles/maps";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import { useWeather } from "../../contexts/Weather";
import { useEffect, useState } from "react";
import { LatLngTuple } from "leaflet";

function Maps() {
  const [coords, setCoords] = useState([0, 0] as LatLngTuple);
  const [userInput, setUserInput] = useState("");
  const { weatherInfo, fetchData } = useWeather();

  const handleSubmit = async () => {
    setCoords([0, 0]);
    fetchData(userInput);
  };

  useEffect(() => {
    if (weatherInfo && weatherInfo.location) {
      if (coords.every((item) => item === 0)) {
        setCoords([weatherInfo.location.lat, weatherInfo.location.lon]);
      }
    }
  }, [weatherInfo, coords]);

  return (
    <Container>
      <MapContainer></MapContainer>
      <MapContainer center={coords} zoom={15} scrollWheelZoom={true} id="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords}>
          <Popup>Nearly accurate place where you are right now</Popup>
        </Marker>
      </MapContainer>
      <div className="info">
        <h1>
          WEATHER MAP
          <span>Scroll to look around at the map...</span>
        </h1>

        <p>Name: {weatherInfo.location?.name}</p>
        <p>Country: {weatherInfo.location?.country}</p>
        <p>Timezone: {weatherInfo.location?.tz_id}</p>

        <label htmlFor="searchCity">
          <input
            type="text"
            value={userInput}
            placeholder={"Insert City"}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
        </label>
      </div>
    </Container>
  );
}

export default Maps;
