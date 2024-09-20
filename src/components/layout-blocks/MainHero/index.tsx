import { IWPImage } from "@/src/types";
import React from "react";
import S from "./MainHero.styled";
import { gatsbyImageHelper } from "@/src/helpers";
import { Wysiwyg } from "@/styles/typography";

export interface Props {
  mediaType: string;
  backgroundImage: IWPImage;
  backgroundVideo: {
    mediaItemUrl: string;
    mimeType: string;
  };
  ingress: string;
  buttonText: string;
  additionalText: string;
}

const MainHero: React.FC<Props> = ({
  mediaType,
  backgroundImage,
  backgroundVideo,
  ingress,
  buttonText,
  additionalText,
}) => {
  // create gatsby-image-data
  const backgroundImageData = gatsbyImageHelper(backgroundImage);

  return (
    <S.Section>
      {backgroundImageData && mediaType === "image" && (
        <S.BackgroundImage
          image={backgroundImageData}
          alt={backgroundImage.altText}
        />
      )}
      {mediaType === "video" && backgroundVideo && (
        <S.VideoContainer>
          <video autoPlay loop muted playsInline>
            <source
              src={backgroundVideo.mediaItemUrl}
              type={backgroundVideo.mimeType}
            />
          </video>
        </S.VideoContainer>
      )}
      <S.Inner>
        <div className="content-overlay">
          {ingress && <Wysiwyg dangerouslySetInnerHTML={{ __html: ingress }} />}
          {buttonText && (
            <S.Button className="home-button">{buttonText}</S.Button>
          )}
          {additionalText && (
            <Wysiwyg dangerouslySetInnerHTML={{ __html: additionalText }} />
          )}
        </div>
      </S.Inner>
    </S.Section>
  );
};

export default MainHero;
