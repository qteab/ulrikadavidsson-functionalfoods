import * as React from "react";

export interface SEOProps {
  metaDesc: string;
  opengraphTitle: string;
  opengraphAuthor: string;
  lang: string;
  title: string;
  meta: Array<{ name: string; content: string }>;
  focuskw: string;
  opengraphImage: {
    sourceUrl: string;
  };
  twitterImage: {
    sourceUrl: string;
  };
  twitterTitle: string;
  twitterDescription: string;
}

const Seo: React.FC<SEOProps> = ({
  metaDesc = "",
  title = "",
  opengraphTitle = "",
  opengraphAuthor = "",
  lang = "en",
  meta = [],
  focuskw = "",
  opengraphImage,
  twitterImage,
  twitterTitle = "",
  twitterDescription = "",
}: SEOProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDesc} />
      <meta name="author" content={opengraphAuthor} />
      <meta name="lang" content={lang} />
      <meta name="keywords" content={focuskw} />
      {meta.map((m) => (
        <meta name={m.name} content={m.content} />
      ))}
      <meta property="og:title" content={opengraphTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang} />

      <meta
        property="og:image"
        content={opengraphImage?.sourceUrl?.toString() || ""}
      />

      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={twitterTitle} />
      <meta property="twitter:description" content={twitterDescription} />
      <meta
        property="twitter:image"
        content={twitterImage?.sourceUrl?.toString() || ""}
      />
      <meta property="twitter:image:alt" content={twitterTitle} />
      <meta property="twitter:creator" content={opengraphAuthor} />
      <meta property="twitter:site" content={opengraphAuthor} />
    </>
  );
};

export default Seo;
