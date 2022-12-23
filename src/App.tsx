import { useEffect } from "react";
import { useWeather } from "./contexts/Weather";
import Home from "./pages/home";
import { Global } from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <Global />
      <Home />
    </div>
  );
}

export default App;
