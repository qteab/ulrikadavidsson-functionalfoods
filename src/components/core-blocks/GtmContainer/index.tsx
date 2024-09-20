import React from "react";
import { Script } from "gatsby";
import Cookies from "js-cookie";

const GtmContainer = () => {
  const cookieValue = Cookies.get("cookieConsent");

  return (
    <>
      {cookieValue === "true" && (
        <>
          <Script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_user_data': 'granted',
              'ad_personalization': 'granted',
              'ad_storage': 'granted',
              'analytics_storage': 'granted',
              'personalization_storage': 'granted',
              'functionality_storage': 'granted',
              'security_storage': 'granted'
            });
          `}
          </Script>
          <Script>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}

                gtag('js', ${new Date()});
                gtag('config', ${process.env.GATSBY_GTM_ID});
            `}
          </Script>
          <Script>
            {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.GATSBY_GTM_ID}');
        `}
          </Script>
        </>
      )}
    </>
  );
};

export default GtmContainer;
