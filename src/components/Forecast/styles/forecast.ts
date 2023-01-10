import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: flex-start;
      height: 100vh;
      width: 100%;
      box-sizing: border-box;
      padding-top: 5%;
      gap: 5%;

      .day-weather {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        height: 35%;
        width: 100%;
      }

      h1 {
        color: ${theme.accentDark};
        font-size: 1.5em;
        font-family: "Open Sans", sans-serif;
      }

      .forecast {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 45%;
        gap: 5%;
      }

      @media screen and (max-width: 900px) {
        margin-top: 15%;
        height: auto;

        .day-weather {
          justify-content: flex-start;
          overflow-x: scroll;
          height: 50vh;
        }

        h1 {
          text-align: center;
        }

        .forecast {
          margin-top: 5%;
          flex-flow: column nowrap;
          justify-content: space-between;
          height: 100vh;
        }
      }
    `;
  }}
`;

const HourCards = styled.div<{ maxTemp: number; hourTemp: number }>`
  ${({ theme, maxTemp, hourTemp }) => {
    return css`
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: flex-start;

      height: 75%;
      width: 25%;
      position: relative;
      border-bottom: 0.2em solid ${theme.accentLight};

      h2 {
        font-family: "Ubuntu", sans-serif;
        font-size: 0.7em;
        color: ${theme.accentLight};
      }

      p {
        font-family: "Ubuntu", sans-serif;
        text-align: center;
        font-size: 1em;
        color: ${theme.accentDark};
      }

      img {
        width: 100%;
        height: 25%;
        object-fit: contain;
      }

      span {
        font-size: 0.6em;
        font-family: "Ubuntu", sans-serif;
        color: ${theme.primary};
        text-align: center;
        margin: 10% 0;
      }

      ::before {
        position: absolute;
        content: "";
        background-color: ${theme.accentDark};
        width: 10%;
        border-radius: 9999px;
        height: 2%;
        bottom: ${hourTemp - maxTemp + 45}%;
        left: 43%;
        display: block;
      }

      ::after {
        content: "";
        background-color: transparent;
        width: 5%;
        height: 60%;
        border-left: 0.1em dashed ${theme.accentDark};
        display: block;
      }

      @media screen and (max-width: 900px) {
        width: 50%;
        padding: 0 1%;
      }
    `;
  }}
`;

const Card = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-flow: column nowrap;
      height: 75%;
      width: max-content;
      padding: 2%;
      font-family: "Ubuntu", sans-serif;

      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(9px);
      -webkit-backdrop-filter: blur(9px);
      border-radius: 10px;
      box-shadow: inset 0px 0px 10px 10px rgba(0, 0, 0, 0.05);

      h2 {
        text-transform: uppercase;
        font-weight: 700;
        color: ${theme.primary};
      }

      img {
        object-fit: contain;
        width: 75%;
        height: 35%;
      }

      p {
        font-size: 3em;
      }

      p:nth-of-type(1) {
        color: ${theme.accentLight};
      }

      p:nth-of-type(2) {
        color: ${theme.tertiary};
      }
    `;
  }}
`;
export { Container, Card, HourCards };
