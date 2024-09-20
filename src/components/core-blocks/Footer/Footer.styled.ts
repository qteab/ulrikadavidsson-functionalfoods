import { MainInner } from "@/styles/global";
import styled from "styled-components";

const Footer = styled.footer`
  padding: 50px 0;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

const Inner = styled(MainInner)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const S = {
  Footer,
  Inner,
};

export default S;
