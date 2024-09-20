import * as React from "react";
import { ThemeProvider } from "styled-components";
import Body from "@/components/core-blocks/Body";
import CookieConsent from "@/components/core-blocks/CookieConsent";
import Footer from "@/components/core-blocks/Footer";
import Header from "@/components/core-blocks/Header";
import Main from "@/components/core-blocks/Main";
import Seo, { SEOProps } from "@/components/core-blocks/Seo";
import Flexible, { IFlexible } from "@/src/components/core-blocks/Flexible";
import GlobalStyle from "@/styles/global";
import defaultTheme from "@/styles/themes/default.theme";
import GtmContainer from "@/components/core-blocks/GtmContainer";

export type IPageTemplate = {
  pageContext: {
    flexible: IFlexible;
    seo: SEOProps;
  };
};

const PageTemplate: React.FC<IPageTemplate> = ({ pageContext }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Body>
        <Header />
        <Main>
          <Flexible components={pageContext.flexible.components} />
          <Footer />
          <CookieConsent />
        </Main>
      </Body>
    </ThemeProvider>
  );
};

export default PageTemplate;

export function Head({ pageContext }: IPageTemplate) {
  return (
    <>
      <GtmContainer />
      <html lang="sv" />
      <Seo {...pageContext.seo} lang="sv" />
    </>
  );
}
