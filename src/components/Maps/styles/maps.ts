import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100%;
      gap: 5%;

      #map {
        height: 50%;
        width: 30%;
        border-radius: 10px;
        box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.25);
      }

      .info {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        flex-flow: column nowrap;

        width: 30%;
        height: 50%;

        h1 {
          display: flex;
          align-items: flex-start;
          justify-content: space-evenly;
          flex-flow: column nowrap;
          font-size: 3em;
          font-family: "Ubuntu", sans-serif;
          font-weight: 100;
          color: ${theme.primary};

          span {
            font-size: 0.3em;
            font-family: "Ubuntu", sans-serif;
            margin: 5% 0;
            color: ${theme.accentLight};
          }
        }

        p {
          font-family: "Open Sans", sans-serif;
          color: ${theme.primary};
        }

        input {
          background-color: transparent;
          border: 0.2em solid ${theme.tertiary};
          border-radius: 4px;
          outline: 0;
          padding: 2%;
          color: ${theme.primary};

          &::placeholder {
            color: ${theme.primary};
            opacity: 1;
          }
        }
      }

      @media screen and (max-width: 900px) {
        margin-top: 15vh;
        flex-flow: column nowrap;

        #map {
          width: 90%;
        }

        .info {
          width: 100%;
          align-items: center;

          h1 {
            align-items: center;
            text-align: center;
          }
        }
      }
    `;
  }}
`;

export { Container };
