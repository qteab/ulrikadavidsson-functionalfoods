import { IWPImage, IWPLink } from "@/src/types";
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
  additionalText: string;
  button: IWPLink;
}

const MainHero: React.FC<Props> = ({
  mediaType,
  backgroundImage,
  backgroundVideo,
  ingress,
  additionalText,
  button,
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
          {button && (
            <S.Button
              className="home-button"
              to={button.url}
              target={button.target}
            >
              {button.title}
            </S.Button>
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
