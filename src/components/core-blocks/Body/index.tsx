import * as React from "react";

import S from "./Body.styled";
import Cookies from "js-cookie";

const Body: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const cookieValue = Cookies.get("cookieConsent");

  return (
    <S.Body>
      {cookieValue === "true" && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GATSBY_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      )}
      {children}
    </S.Body>
  );
};

export default Body;
