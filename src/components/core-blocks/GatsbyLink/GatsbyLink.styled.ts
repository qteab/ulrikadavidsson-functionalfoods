import styled from "styled-components";
import { GatsbyLinkStyledProps } from ".";
import { Link } from "gatsby";
import { PrimaryButtonCss, SecondaryButtonCss } from "@/styles/typography";

type Style = {
  $style: GatsbyLinkStyledProps;
};

const ExternalLink = styled.a<Style>`
  ${({ $style }) => $style === "primary" && PrimaryButtonCss}
  ${({ $style }) => $style === "secondary" && SecondaryButtonCss}
`;

const InternalLink = styled(Link)<Style>`
  ${({ $style }) => $style === "primary" && PrimaryButtonCss}
  ${({ $style }) => $style === "secondary" && SecondaryButtonCss}
`;

const S = {
  ExternalLink,
  InternalLink,
};

export default S;
