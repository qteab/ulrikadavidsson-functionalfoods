import {
  ParagraphBig,
  PrimaryButtonCss,
  Wysiwyg,
  h3,
} from "@/styles/typography";
import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const FadeInMobile = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${FadeIn} 0.2s forwards;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    transform: none;
    top: initial;
    padding: 16px;
    border-radius: 0;
    animation: ${FadeInMobile} 0.2s forwards;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
  z-index: 999;
`;

const Title = styled(h3)`
  margin-bottom: 8px;
  text-align: center;
`;

const SubTitle = styled(ParagraphBig)`
  margin-bottom: 32px;
`;

const Text = styled(Wysiwyg)`
  margin: 0 0 32px 0;
  a {
    transition: color 0.2s ease-in-out;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const Button = styled.div`
  ${PrimaryButtonCss};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const OpenCookieConsent = styled.button`
  border: none;
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  z-index: 1000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.colors.white};
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
  }
`;

const S = {
  Container,
  Overlay,
  Title,
  SubTitle,
  Text,
  ButtonsWrapper,
  Button,
  OpenCookieConsent,
};

export default S;
