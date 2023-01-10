import { useState } from "react";
import Home from "./pages/home";
import RequestLocation from "./components/RequestLocation";
import { Global } from "./styles/GlobalStyles";

function App() {
  const [locationAvailable, setLocationAvailable] = useState(false);

  return (
    <div className="App">
      <Global />
      {locationAvailable ? <Home /> : <RequestLocation setLocationAvailable={setLocationAvailable} />}
    </div>
  );
}

export default App;
