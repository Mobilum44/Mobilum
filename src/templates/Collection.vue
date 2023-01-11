<template>
  <Layout>
    <h1>
      {{ $page.collection.title }}
    </h1>
    <div class="collection_order">
      <g-link
        v-for="edge in $page.collection.belongsTo.edges"
        :to="edge.node.path"
        :key="edge.node.id"
      >
        <div class="image_cover">
          <g-image
            alt="photo d'un Obrac"
            v-if="edge.node.cover_image"
            :src="edge.node.cover_image"
          />
          <p>
            {{ edge.node.title }}
          </p>
        </div>
      </g-link>
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

<style scoped>
/*---------------------------------------------------------
    Paramètres de la galerie - généralités
  ---------------------------------------------------------*/

.collection_order {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}

/*---------------------------------------------------------
    Paramètres de la galerie - position de base
  ---------------------------------------------------------*/
.image_cover {
  position: relative;
  justify-self: center;
  height: 200px;
  width: 200px;
  background-color: #1a949d;
}

.image_cover > img {
  height: 100%;
  width: 100%;
  opacity: 1;
  transition: all 0.3s ease-in-out;
}

.image_cover p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: 0;
  opacity: 0;

  font-family: "Bebas Neue";
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 2px;
  color: white;
  transition: all 0.5s ease-in-out;
}

/*---------------------------------------------------------
    Paramètres de la galerie - position selection
  ---------------------------------------------------------*/

.image_cover:hover p {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.image_cover:hover > img {
  opacity: 0.3;
  transition: all 0.3s ease-in-out;
}
</style>
