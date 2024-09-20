import { IWPImage, IWPLink } from "@/src/types";
import { graphql, useStaticQuery } from "gatsby";

export type IHeaderData = {
  wp: {
    siteSettings: {
      siteSettings: {
        header: {
          links: {
            link: IWPLink;
          };
          logo: IWPImage;
        };
      };
    };
  };
};

const useHeaderData = () => {
  const { wp }: IHeaderData = useStaticQuery(
    graphql`
      {
        wp {
          siteSettings {
            siteSettings {
              header {
                links {
                  link {
                    target
                    title
                    url
                  }
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
  return wp.siteSettings.siteSettings.header;
};
export default useHeaderData;
