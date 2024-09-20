const path = require("path");
const fetchPages = require("./node/fetch-pages");

// Fetch and generate corresponding pages w/ component imports
module.exports.createPages = async (gatsbyUtilities) => {
  // Fetch all pages graphql data.
  const pagesData = await fetchPages(gatsbyUtilities);

  // Build out gatsby pages
  Promise.all(
    pagesData.map(async (page) => {
      // create gatsby page out of the template file
      return gatsbyUtilities.actions.createPage({
        path: page.uri,
        component: path.resolve(`./src/templates/page.tsx`),
        context: {
          ...page,
          lastmoddate: page.modified,
        },
      });
    })
  );
};
