import { ImageDataLike } from "gatsby-plugin-image";

export type IWPImage = {
  sourceUrl?: string;
  altText: string;
  mimeType?: string;
  gatsbyImage?: ImageDataLike;
  localFile?: {
    childImageSharp: {
      gatsbyImageData: ImageDataLike;
    };
  };
};

export type IWPLink = {
  title: string;
  target: string;
  url: string;
};
