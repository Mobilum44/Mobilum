<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.collection.title }}
    </h1>

    <div class="posts">
      <div v-for="edge in $page.collection.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Collection ($id: ID!) {
  collection (id: $id) {
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
