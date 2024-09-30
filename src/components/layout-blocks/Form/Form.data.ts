module.exports = () => `
   backgroundImage {
    sourceUrl
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
`;
