<template>
  <!--mobilier urbain, Ammenagement(hook + signaletique), grands comptes, Nos réalisations sur mesure
  Supprimer sav -->
  <Layout>
    <h1>Notre offre</h1>
    <div class="body_offer">
      <div class="collection">
        <g-link
          class="items_styling"
          :to="edge.node.path"
          v-for="edge in $page.allCollection.edges"
          :key="edge.node.id"
        >
          {{ edge.node.title }}
        </g-link>
        <g-link class="items_styling" to="/Grands-comptes/"
          >Grands comptes</g-link
        >
        <g-link class="items_styling" to="/Sur-mesure/">
          Réalisations sur mesure
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Collections {allCollection{edges{node{title, path}}}}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Notre offre"
  }
};
</script>

<style scoped>
.body_offer {
  display: flex;
  justify-content: center;
}
.collection {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
}

.items_styling {
  border: solid 1px #1a949d;
  justify-self: center;

  height: 200px;
  width: 100%;

  text-decoration: none;
  color: #1a949d;

  background-image: url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000")
    center center no-repeat;
}
</style>
