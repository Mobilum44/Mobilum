// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  templates: {
    Product: "/produit/:title",
    Collection: "/collection/:id"
  },

  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Product",
        path: "content/products/*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          collection: {
            typeName: "Collection",
            create: true
          }
        }
      }
    }
  ]
};
