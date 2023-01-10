import styled, { css } from "styled-components";

interface Props {
  bgImg: string;
  dark: boolean;
}

const Container = styled.div<Props>`
  ${({ bgImg, dark }) => {
    return css`
      display: flex;
      align-items: flex-start;
      justify-content: center;

      width: 100vw;

      &::before {
        content: " ";
        z-index: -1;
        position: absolute;
        width: 100vw;
        height: 100%;

        background: ${dark
          ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImg})`
          : `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgImg})`};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(4px);
      }
    `;
  }}
`;

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  width: 95%;
  min-height: auto;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export { Container, Content };
