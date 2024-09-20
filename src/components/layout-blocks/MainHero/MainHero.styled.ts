import { MainInner, MainSection } from "@/styles/global";
import { h1 } from "@/styles/typography";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Section = styled(MainSection)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  margin: 0;
`;

const Inner = styled(MainInner)`
  align-items: center;
  justify-content: center;

  .content-overlay {
    z-index: 1;
    margin: 0 20px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 32px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-button {
    width: 250px;
    height: 47px;
    border-radius: 25px;
    border: none;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    margin: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    font-family: Montserrat;
  }

  .home-button:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 745px) {
    .content-overlay {
      width: 560px;
      padding: 54px 46px;
    }

    .home-button {
      width: 308px;
      height: 47px;
      font-size: 16px;
      margin-top: 5px;
    }
  }

  @media (min-width: 1024px) {
    .content-overlay {
      width: 840px;
      padding: 62px 40px;
    }

    .home-text {
      font-size: 24px;
    }

    .ask-text {
      font-size: 20px;
      margin-top: 40px;
    }

    .home-button {
      width: 308px;
      height: 47px;
      font-size: 16px;
      margin-top: 5px;
    }

    .signature-text {
      font-size: 24px;
    }
  }
`;

const BackgroundImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &::before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const Button = styled.button``;

const TextWrapper = styled.div``;

const S = {
  Section,
  Inner,
  BackgroundImage,
  VideoContainer,
  Button,
  TextWrapper,
};

export default S;
