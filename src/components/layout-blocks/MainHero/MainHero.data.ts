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
  mediaType
  backgroundVideo {
      mimeType
      mediaItemUrl
    }
  ingress
  additionalText
  button {
    target
    title
    url
  }
`;
