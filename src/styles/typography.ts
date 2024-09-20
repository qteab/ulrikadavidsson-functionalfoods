import styled, { css } from "styled-components";

export const h1Css = css`
  font-family: sans-serif;
  font-size: 50px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 32px;
  }
`;

export const h1 = styled.h1`
  ${h1Css}
`;

export const h2Css = css`
  font-family: sans-serif;
  font-size: 46px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 30px;
  }
`;

export const h2 = styled.h2`
  ${h2Css}
`;

export const h3Css = css`
  font-family: sans-serif;
  font-size: 32px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 26px;
  }
`;

export const h3 = styled.h3`
  ${h3Css}
`;

export const h4Css = css`
  font-family: sans-serif;
  font-size: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 18px;
  }
`;

export const h4 = styled.h4`
  ${h4Css}
`;

export const h5Css = css`
  font-family: sans-serif;
  font-size: 18px;
`;

export const h5 = styled.h5`
  ${h5Css}
`;

export const h6Css = css`
  font-family: sans-serif;
  font-size: 14px;
`;

export const h6 = styled.h6`
  ${h6Css}
`;

export const ParagraphCss = css`
  font-family: sans-serif;
  font-size: 18px;
`;

export const Paragraph = styled.p`
  ${ParagraphCss}
`;

export const ParagraphBigCss = css`
  font-family: sans-serif;
  font-size: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;

export const ParagraphBig = styled.p`
  ${ParagraphBigCss}
`;

export const ParagraphSmallCss = css`
  font-family: sans-serif;
  font-size: 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
  }
`;

export const ParagraphSmall = styled.p`
  ${ParagraphSmallCss}
`;

export const DetailsBigCss = css`
  font-family: sans-serif;
  font-size: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;

export const DetailsBig = styled.p`
  ${DetailsBigCss}
`;

export const DetailsSmallCss = css`
  font-family: sans-serif;
  font-size: 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
  }
`;

export const DetailsSmall = styled.p`
  ${DetailsSmallCss}
`;

export const PrimaryButtonCss = css`
  ${ParagraphCss};
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const SecondaryButtonCss = css`
  ${PrimaryButtonCss};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const WysiwygCss = css`
  p {
    ${ParagraphCss}
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 10px;
  }
  h1 {
    ${h1Css}
  }
  h2 {
    ${h2Css}
  }
  h3 {
    ${h3Css}
  }
  h4 {
    ${h4Css}
  }
  h5 {
    ${h5Css}
  }
  h6 {
    ${h6Css}
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    ${ParagraphCss}
    margin-bottom: 10px;
    margin-left: 40px;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    transition: border-bottom 0.2s ease-in-out;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    ${ParagraphCss}
    margin: 0;
    padding: 0;
    border-left: 4px solid ${({ theme }) => theme.colors.black};
    padding-left: 20px;
  }

  strong {
    font-family: sans-serif;
  }

  em {
    font: sans-serif italic;
  }
`;

export const Wysiwyg = styled.div`
  ${WysiwygCss}
`;
