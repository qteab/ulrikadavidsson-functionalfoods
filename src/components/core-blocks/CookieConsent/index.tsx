import Cookies from "js-cookie";
import React, { useEffect } from "react";

import S from "./CookieConsent.styled";
import useCookieConsentData from "./useCookieConsentData";
import Paperclip from "@/assets/paperclip.svg";
import { type } from "os";

const CookieConsent = () => {
  const { title, subTitle, text } = useCookieConsentData();
  const [isOpen, setIsOpen] = React.useState(false);

  const cookieValue = Cookies.get("cookieConsent");

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    //check if we are on the same page as the link in the cookie consent
    const currentUri = window.location.href;
    const textArr = text.split(" ");
    const hrefIndex = textArr.findIndex((word) => word.includes("href"));
    const href = textArr[hrefIndex].split('"')[1];

    //if we are on the same page as the link in the cookie consent, close the cookie consent
    if (currentUri.includes(href)) {
      setIsOpen(false);
    } else {
      setTimeout(() => {
        setIsOpen(cookieValue !== "true" && cookieValue !== "declined");
      }, 1200);
    }
  }, [cookieValue]);

  const enableAnalytics = () => {
    //set cookie consent to true
    Cookies.set("cookieConsent", "true"),
      {
        sameSite: "lax",
        secure: "true",
        expires: 28,
      };
    setIsOpen(false);
    //reload page to load analytics
    if (typeof window !== "undefined") window.location.reload();
  };

  const disableAnalytics = () => {
    if (typeof window === "undefined") return;

    //remove all cookies
    const cookies = Cookies.get();
    for (const cookie in cookies) {
      Cookies.remove(cookie, { path: "", domain: window.location.hostname });
    }
    //close cookie consent
    setIsOpen(false);
    //set cookie consent to declined
    Cookies.set("cookieConsent", "declined"),
      {
        sameSite: "lax",
        secure: "true",
        expires: 1,
      };
    //reload page to remove analytics
    window.location.reload();
  };

  return isOpen ? (
    <>
      <S.Overlay />
      <S.Container>
        {title && <S.Title>{title}</S.Title>}
        {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
        {text && <S.Text dangerouslySetInnerHTML={{ __html: text }} />}
        <S.ButtonsWrapper>
          <S.Button onClick={disableAnalytics}>Endast nödvändiga</S.Button>
          <S.Button onClick={enableAnalytics}>Acceptera alla</S.Button>
        </S.ButtonsWrapper>
      </S.Container>
    </>
  ) : (
    <S.OpenCookieConsent
      onClick={() => setIsOpen(true)}
      aria-label="change cookie concent"
    >
      <Paperclip>
        <title>Cookies</title>
        <desc>Klicka för att ändra ditt cookie-medgivande</desc>
      </Paperclip>
    </S.OpenCookieConsent>
  );
};

export default CookieConsent;
