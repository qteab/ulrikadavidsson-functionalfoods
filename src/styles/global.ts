import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const MainSection = styled.section`
  width: 100%;
`;

export const MainInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 1440px;
    padding: 0 70px;
  }
`;

export default GlobalStyle;
