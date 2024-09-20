import { MainInner, MainSection } from "@/styles/global";
import { h1 } from "@/styles/typography";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Section = styled(MainSection)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 570px;
  position: relative;
  padding-top: 110px;
  margin: 60px 0 100px 0;
`;

const Inner = styled(MainInner)``;

const Title = styled(h1)`
  color: ${({ theme }) => theme.colors.white};
  max-width: 500px;
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

const S = {
  Section,
  Inner,
  Title,
  BackgroundImage,
  VideoContainer,
};

export default S;
