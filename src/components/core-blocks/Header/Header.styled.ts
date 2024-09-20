import { MainInner } from "@/styles/global";
import styled from "styled-components";

type HeaderProps = {
  $scrolled: boolean;
};

const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  padding: 24px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ $scrolled }) =>
    $scrolled && "box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3)"};
  z-index: 100;
`;

const Inner = styled(MainInner)`
  flex-direction: row;
  justify-content: space-between;
`;

const S = {
  Header,
  Inner,
};

export default S;
