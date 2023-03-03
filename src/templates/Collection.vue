<template>
  <LayoutAccueil>
    <div class="title">
      <h1>
        {{ $page.collection.title }}
      </h1>
      <g-link
        class="return"
        onclick="history.go(-1)"
      >
        Retour
      </g-link>
    </div>

    <div class="collection_order">
      <g-link
        v-for="edge in $page.collection.belongsTo.edges"
        :key="edge.node.id"
        :to="edge.node.path"
      >
        <div class="image_cover">
          <g-image
            v-if="edge.node.cover_image"
            alt="photo mobilier urbain"
            :src="edge.node.cover_image"
          />
          <p>
            {{ edge.node.title }}
          </p>
        </div>
      </g-link>
    </div>
  </LayoutAccueil>
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

.title {
  display : flex;
  flex-direction : row;
  justify-content: space-between;
  align-items : flex-end;
  margin-bottom : 3rem;
  padding-bottom: 1rem;
  border-bottom : black solid 1px;
}

 h1 {
  text-align: left;
  font-weight: 200;
  text-transform: none;
  border: none;
  color : black;
  padding : 0;
  margin : 0;
}
/*---------------------------------------------------------
    Paramètres de la galerie - généralités
  ---------------------------------------------------------*/

.collection_order {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
}

/*---------------------------------------------------------
    Paramètres de la galerie - position de base
  ---------------------------------------------------------*/
.image_cover {
  border-radius: 7px;
  border : solid white;

  position: relative;
  justify-self: center;
  height: 225px;
  width: 225px;

  background-color: #1a949d;
  /*box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;*/
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
.image_cover:hover {
    border-radius: 4px;
  border : 0px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      transition: all 0.3s ease-in-out;
}
.image_cover:hover p {
  opacity: 1;
  transition: all 0.5s ease-in-out;

}


.image_cover:hover > img {

  opacity: 0.3;
  transition: all 0.3s ease-in-out;
}
</style>
