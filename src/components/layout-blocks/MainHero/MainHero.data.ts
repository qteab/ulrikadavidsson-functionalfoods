module.exports = () => `
  backgroundImage {
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
  }
  title
  mediaType
  backgroundVideo {
      mimeType
      mediaItemUrl
    }
`;
