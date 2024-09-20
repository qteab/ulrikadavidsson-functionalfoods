import { IWPLink } from "@/src/types";
import { graphql, useStaticQuery } from "gatsby";

export type ICookieConsentData = {
  wp: {
    siteSettings: {
      siteSettings: {
        cookie: {
          title: string;
          subTitle: string;
          text: string;
        };
      };
    };
  };
};

const useCookieConsentData = () => {
  const { wp }: ICookieConsentData = useStaticQuery(graphql`
    {
      wp {
        siteSettings {
          siteSettings {
            cookie {
              title
              subTitle
              text
            }
          }
        }
      }
    }
  `);

  return wp.siteSettings.siteSettings.cookie;
};

export default useCookieConsentData;
