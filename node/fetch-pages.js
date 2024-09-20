const getComponents = require("./get-components");

// Fetch all wordpress pages w/ all component fragments
const fetchPages = async ({ graphql }) => {
  const graphqlResult = await graphql(`
    query GetAllPagesWithComponents {
      allWpPage {
        nodes {
          id
          modified
          title
          databaseId
          nodeType
          slug
          uri
          seo {
            focuskw
            metaDesc
            title
            opengraphTitle
            opengraphAuthor
            opengraphImage {
              sourceUrl
            }
            twitterTitle
            twitterDescription
            twitterImage {
              sourceUrl
            }
          }
          flexible {
            components {
              ${getComponents()}
            }
          }
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    console.error(graphqlResult.errors);
    throw new Error("GraphQL query failed");
  }

  return graphqlResult.data.allWpPage.nodes;
};

module.exports = fetchPages;
