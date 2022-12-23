import { Container, Navigation } from "./styles/header";
import { SiSitepoint } from "react-icons/si";
import { useTheme } from "../../contexts/Theme";
import { ImSun } from "react-icons/im";
import { RiMoonFill } from "react-icons/ri";

function Header() {
  const { theme, changeTheme } = useTheme();
  const goTo = (x: number, y: number) => {
    window.scrollTo({
      top: (x * window.innerHeight) / 100,
      left: (y * window.innerWidth) / 100,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <h1>
        Meteo <SiSitepoint />
      </h1>
      <Navigation>
        <li onClick={() => goTo(0, 0)}>Weather</li>
        <li onClick={() => goTo(200, 0)}>Maps</li>
        <li onClick={() => goTo(100, 0)}>Forecast</li>
      </Navigation>
      <button onClick={changeTheme}>{theme.colorMode === "light" ? <RiMoonFill /> : <ImSun />}</button>
    </Container>
  );
}

export default Header;
