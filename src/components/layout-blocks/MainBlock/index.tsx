import { IWPImage } from "@/src/types";
import React from "react";
import S from "./MainBlock.styled";
import { gatsbyImageHelper } from "@/src/helpers";

export interface Props {
  title: string;
  text: string;
  mediaType: string;
  mediaPosition: string;
  image: IWPImage;
  video: {
    mediaItemUrl: string;
    mimeType: string;
  };
}

const MainBlock: React.FC<Props> = ({
  title,
  text,
  mediaType,
  image,
  video,
  mediaPosition,
}) => {
  // create gatsby-image-data
  const imageData = gatsbyImageHelper(image);

  return (
    <S.Section>
      <S.Inner $mediaPosition={mediaPosition}>
        <S.Wrapper>
          {imageData && mediaType === "image" && (
            <S.Image image={imageData} alt={image.altText} />
          )}
          {mediaType === "video" && video && (
            <S.VideoContainer>
              <video
                controls
                controlsList="nodownload"
                playsInline
                poster={image.sourceUrl || ""}
              >
                <source src={video.mediaItemUrl} type={video.mimeType} />
              </video>
            </S.VideoContainer>
          )}
        </S.Wrapper>
        <S.Wrapper>
          {title && <S.Title>{title}</S.Title>}
          {text && <S.Text>{text}</S.Text>}
        </S.Wrapper>
      </S.Inner>
    </S.Section>
  );
};

export default MainBlock;
