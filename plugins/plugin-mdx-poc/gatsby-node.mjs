export const onPreInit = () => {
  console.log("onPreInit is running.");
};

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query MyQuery {
      allMdx {
        nodes {
          id
          internal {
            contentFilePath
          }
          parent {
            ... on File {
              id
              name
              base
              relativePath
              extension
            }
          }
        }
      }
    }
  `);

  if (result.errors) { reject(reporter.panicOnBuild('Error while running GraphQL query.')); }
  // console.log("query", result.data.allMdx.nodes);


  result.data.allMdx.nodes.forEach((node) => {
    // console.log(node);
    // console.log("path", node.parent.relativePath.replace(`.${node.parent.extension}`, ''));
    // console.log("component", node.internal.contentFilePath);
    createPage({
      path: node.parent.relativePath.replace(`.${node.parent.extension}`, ''),
      component: node.internal.contentFilePath,
      context: { id: node.id }
    });
  });

};