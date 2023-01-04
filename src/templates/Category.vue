<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.category.title }}
    </h1>

    <div class="posts">
      <div v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Category ($id: ID!) {
  category (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Product {
            title
            cover_image
            path
          }
        }
      }
    }
  }
}
</page-query>
