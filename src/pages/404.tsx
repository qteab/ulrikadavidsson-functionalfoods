import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import Body from "@/components/core-blocks/Body";
import CookieConsent from "@/components/core-blocks/CookieConsent";
import Footer from "@/components/core-blocks/Footer";
import Header from "@/components/core-blocks/Header";
import Main from "@/components/core-blocks/Main";
import GlobalStyle, { MainInner } from "@/styles/global";
import defaultTheme from "@/styles/themes/default.theme";
import GtmContainer from "@/components/core-blocks/GtmContainer";
import { Paragraph, PrimaryButtonCss, h1 } from "@/styles/typography";
import { Link } from "gatsby";
import GatsbyLink from "@/components/core-blocks/GatsbyLink";

const Inner = styled(MainInner)`
  padding-block: 350px;
  gap: 16px;
`;

const Title = styled(h1)`
  text-align: center;
`;

const Text = styled(Paragraph)`
  text-align: center;
`;

const NotFoundPage = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Body>
      <Header />
      <Main>
        <Inner>
          <Title>404</Title>
          <Text>Det verkar som att sidan du letar efter inte finns.</Text>
          <GatsbyLink
            style="primary"
            link={{ title: "Gå till startsidan", url: "/", target: "" }}
          />
        </Inner>
        <Footer />
        <CookieConsent />
      </Main>
    </Body>
  </ThemeProvider>
);

export default NotFoundPage;

export function Head() {
  return (
    <>
      <GtmContainer />
      <html lang="sv" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
