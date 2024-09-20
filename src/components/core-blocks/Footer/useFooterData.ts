import { IWPImage, IWPLink } from "@/src/types";
import { graphql, useStaticQuery } from "gatsby";

export type IFooterData = {
  wp: {
    siteSettings: {
      siteSettings: {
        footer: {
          link: IWPLink;
          logo: IWPImage;
        };
      };
    };
  };
};

const useFooterData = () => {
  const { wp }: IFooterData = useStaticQuery(
    graphql`
      {
        wp {
          siteSettings {
            siteSettings {
              footer {
                link {
                  target
                  title
                  url
                }
                logo {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED)
                    }
                  }
                  altText
                }
              }
            }
          }
        }
      }
    `
  );
  return wp.siteSettings.siteSettings.footer;
};
export default useFooterData;
