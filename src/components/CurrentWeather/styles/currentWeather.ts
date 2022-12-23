import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0px 0px;
      grid-template-areas:
        "top-left right"
        "bottom-left right";

      width: 100%;

      height: 90vh;

      .right {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-area: right;

        > div {
          display: grid;
          align-items: flex-end;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 20% 20% 20% 40%;
          gap: 0px 0px;
          grid-template-areas:
            ". ."
            ". ."
            ". ."
            "bottom bottom";
          width: 75%;
          height: 90%;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(9px);
          -webkit-backdrop-filter: blur(9px);
          border-radius: 10px;
          align-items: center;
          justify-items: center;
          padding: 0% 5%;
          box-sizing: border-box;

          p {
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-content: center;
            font-size: 2.5em;
            width: 100%;
            height: 50%;
            font-family: "Open Sans", sans-serif;
            text-transform: uppercase;
            color: #fff;

            span {
              font-size: 0.4em;
            }
          }

          .bottom {
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-content: center;
            width: 100%;
            height: 100%;
            border-top: 0.2em solid ${theme.tertiary};
            font-family: "Ubuntu", sans-serif;
            font-weight: 100;
            color: #fff;

            grid-area: bottom;

            p {
              height: 50%;
              margin: 5% 0%;
              text-align: left;
              vertical-align: top;
              text-transform: none;
              font-size: 1em;
            }

            button {
              display: flex;
              align-items: center;
              justify-content: space-evenly;
              width: 35%;
              background-color: transparent;
              color: #fff;
              border: none;
              text-transform: uppercase;
              font-size: 1em;
              text-decoration: underline;
              text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

              :hover {
                cursor: pointer;
                color: #fff;
                text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7);
              }
            }
          }
        }
      }

      .bottom-left {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: center;

        p {
          color: #fff;
          text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          width: 100%;

          font-size: 2em;

          img {
            height: 150%;
            width: auto;
          }
        }

        h2 {
          text-shadow: 0px 0px 50px rgba(0, 0, 0, 0.55);
          color: #fff;
          font-family: "Open Sans", sans-serif;
          font-size: 5em;

          span {
            text-shadow: 0px 0px 50px rgba(0, 0, 0, 0.99);
          }
        }

        grid-area: bottom-left;
      }

      .top-left {
        padding: 10% 0%;
        color: #fff;

        h2 {
          text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          font-family: "Open Sans", sans-serif;
          font-size: 2.5em;

          span {
            margin-left: 0.5em;
            font-size: 0.5em;
          }
        }
        p {
          text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          font-family: "Ubuntu", sans-serif;
          padding: 1% 0%;
          font-size: 3.5em;
        }

        grid-area: top-left;
      }

      @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-template-areas:
          "top-left"
          "bottom-left"
          "right";

        .bottom-left,
        .bottom {
          height: 25%;
        }

        .bottom-left {
          font-size: 0.4em;
        }

        .right {
          align-items: flex-start;
          justify-content: center;
          font-size: 0.7em;

          width: 100%;
          height: 50vh;

          > div {
            width: 90%;
          }
        }
      }
    `;
  }}
`;

export { Container };
