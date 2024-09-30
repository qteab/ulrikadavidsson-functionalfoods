import Body from "@/components/core-blocks/Body";
import CookieConsent from "@/components/core-blocks/CookieConsent";
import Footer from "@/components/core-blocks/Footer";
import Header from "@/components/core-blocks/Header";
import Main from "@/components/core-blocks/Main";
import GlobalStyle from "@/styles/global";
import defaultTheme from "@/styles/themes/default.theme";
import React from "react";
import { ThemeProvider } from "styled-components";

const Recept = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Body>
        <Header />
        <Main>
          RECEPT
          <CookieConsent />
        </Main>
        {/* <Footer /> */}
      </Body>
    </ThemeProvider>
  );
};

export default Recept;
