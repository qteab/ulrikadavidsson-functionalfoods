import { MainInner, MainSection } from "@/styles/global";
import { h2, Paragraph } from "@/styles/typography";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

type MediaProps = {
  $mediaPosition: string;
};

const Section = styled(MainSection)``;

const Inner = styled(MainInner)<MediaProps>`
  gap: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: ${({ $mediaPosition }) =>
      $mediaPosition === "left" ? "row" : "row-reverse"};
    gap: 48px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled(h2)`
  margin-bottom: 20px;
`;

const Text = styled(Paragraph)``;

const Image = styled(GatsbyImage)`
  width: 100%;
`;

const VideoContainer = styled.div`
  width: 100%;

  video {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
`;

const S = {
  Section,
  Inner,
  Wrapper,
  Title,
  Text,
  Image,
  VideoContainer,
};

export default S;
