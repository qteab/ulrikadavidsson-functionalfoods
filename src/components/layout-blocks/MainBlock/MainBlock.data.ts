module.exports = () => `
  image {
    localFile {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          quality: 100
        )
      }
    }
    altText
    sourceUrl
  }
  title
  text
  mediaType
  mediaPosition
  video {
      mimeType
      mediaItemUrl
    }
`;
