import { IWPImage } from "@/src/types";
import React from "react";
import S from "./MainHero.styled";
import { gatsbyImageHelper } from "@/src/helpers";

export interface Props {
  title: string;
  mediaType: string;
  backgroundImage: IWPImage;
  backgroundVideo: {
    mediaItemUrl: string;
    mimeType: string;
  };
}

const MainHero: React.FC<Props> = ({
  title,
  mediaType,
  backgroundImage,
  backgroundVideo,
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
      <S.Inner>{title && <S.Title>{title}</S.Title>}</S.Inner>
    </S.Section>
  );
};

export default MainHero;
