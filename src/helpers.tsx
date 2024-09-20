import React from "react";
import { IWPImage } from "./types";
import { getImage } from "gatsby-plugin-image";

export const nlToBr = (text: string) =>
  (text || "").split("\n").map((l, index) => (
    <React.Fragment key={index}>
      {l}
      <br />
    </React.Fragment>
  ));

export const gatsbyImageHelper = (image: IWPImage) => {
  const imageData = image.localFile?.childImageSharp?.gatsbyImageData
    ? getImage(image.localFile.childImageSharp.gatsbyImageData)
    : null;

  return imageData;
};
