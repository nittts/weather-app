import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      background-color: ${theme.secondary};

      button {
        padding: 1em;
        background-color: transparent;
        border: 0.2em solid ${theme.primary};
        border-radius: 8px;
        font-size: 1em;

        :hover {
          background-color: ${theme.primary};
          color: ${theme.secondary};
          cursor: pointer;
        }
      }
    `;
  }}
`;

export { Container };
