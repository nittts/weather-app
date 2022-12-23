import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 10vh;
      gap: 8%;
      position: relative;

      h1 {
        color: #fff;
        display: flex;
        align-items: center;
        font-size: 2em;
        font-family: "Open Sans", sans-serif;
        text-transform: uppercase;
        font-weight: 700;
        filter: drop-shadow(1px 2px 5px rgba(0, 0, 0, 0.5));

        svg {
          font-size: 1.1em;
        }
      }

      button {
        right: 0;
        top: 35%;
        position: absolute;
        background-color: transparent;
        border: 0;
        font-size: 2em;
        color: #fff;

        :hover {
          cursor: pointer;
          color: ${theme.accentLight};
        }
      }

      @media screen and (max-width: 900px) {
        flex-wrap: wrap;
        height: auto;
        h1 {
          width: 70%;
        }

        button {
          right: 1%;
          top: 10%;
        }
      }
    `;
  }}
`;

const Navigation = styled.nav`
  ${({ theme }) => {
    return css`
      display: flex;
      list-style-type: none;
      gap: 5%;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      font-size: 1em;
      transition: 0.2s all;
      width: 40%;

      li {
        position: relative;
        text-transform: uppercase;
        font-weight: 700;
        width: max-content;

        ::after {
          position: absolute;
          bottom: -25%;
          right: 100%;
          content: " ";
          display: block;
          background-color: transparent;
          width: 100%;
          height: 10%;

          transition: 0.2s all;
        }

        &:hover {
          filter: drop-shadow(1px 2px 5px rgba(0, 0, 0, 0.5));
          color: ${theme.accentMedium};
          cursor: pointer;

          &::after {
            background-color: ${theme.accentMedium};
            right: 0%;
          }
        }
      }
    `;
  }}
`;

export { Container, Navigation };
