import React from "react";
import { Link } from "gatsby";
import { IWPLink } from "@/src/types";
import S from "./GatsbyLink.styled";

export type GatsbyLinkStyledProps = "primary" | "secondary";

type GatsbyLinkProps = {
  link: IWPLink;
  style: GatsbyLinkStyledProps;
};

const GatsbyLink: React.FC<GatsbyLinkProps> = ({
  link: { title, target, url },
  style,
}) => {
  if (url.startsWith("http") || target === "_blank") {
    return (
      <S.ExternalLink $style={style} href={url} target={target}>
        {title}
      </S.ExternalLink>
    );
  }

  return (
    <S.InternalLink to={url} $style={style}>
      {title}
    </S.InternalLink>
  );
};

export default GatsbyLink;
