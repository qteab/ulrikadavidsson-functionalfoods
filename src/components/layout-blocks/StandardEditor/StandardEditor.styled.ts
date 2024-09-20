import { MainInner, MainSection } from "@/styles/global";
import { Wysiwyg } from "@/styles/typography";
import styled from "styled-components";

type WidthProps = {
  $width: string;
};

const Section = styled(MainSection)``;

const Inner = styled(MainInner)``;

const Content = styled(Wysiwyg)<WidthProps>`
  max-width: ${({ $width }) => $width};
  margin: 0 auto;
`;

const S = {
  Section,
  Inner,
  Content,
};

export default S;
