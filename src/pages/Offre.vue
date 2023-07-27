<template>
  <!--mobilier urbain, Ammenagement(hook + signaletique), grands comptes, Nos réalisations sur mesure
  Supprimer sav -->
  <Layout>
    <template #slot_image>
      <section class="slot_image">
        <h1>Nos collections</h1>
      </section>
    </template>
    

    <div class="sub__section">
      <div class="collection">
        <g-link
          class="items_styling shadow"
          :to="edge.node.path"
          v-for="(edge, i) in $page.allCollection.edges"
          :key="edge.node.id"
        >
          <g-image
            class="items__img"
            alt="Sablage pour signalétique MOBILUM"
            src="@/assets/img/gaetan-sablage.jpg"
            v-if="i === 0"
            center
          />
          <g-image
            class="items__img"
            alt="SNCF Gare Auxerre"
            src="@/assets/img/hook-cover-image.JPG"
            v-else-if="i === 1"
            center
          />
          <g-image
            class="items__img"
            alt="banc Mobilum sur le tram d'Angers"
            src="@/assets/img/angers_tram.jpg"
            v-else
            center
          />
          <p>
            {{ edge.node.title }}
          </p>
        </g-link>

        <g-link
          class="items_styling shadow"
          to="/Exceptionnels/"
        >
          <g-image
            class="items__img"
            alt="SNCF Gare Auxerre"
            src="@/assets/img/SNCF_auxerre.png"
            center
          />
          <p>
            Dossiers d'exception
          </p>
        </g-link>
      </div>
    </div>

    <p class="referencement">
      Découvrez notre nouvelle collection de mobilier urbain en BFUP, alliant esthétisme et durabilité.
      Des bancs, tables et jardinières conçus en BFUP pour embellir et aménager
      vos espaces publics de manière moderne et résistante.
    </p>
    <!--
    <Defilant />
--->
  </Layout>
</template>

<page-query>
query Collections {allCollection{edges{node{title, path}}}}
</page-query>

<script>
/* import Defilant from "@/components/Villes.vue";

export default {
  components: {
    Defilant
  },
*/

  metaInfo: {
    title: "Notre offre"
  }
//};
</script>

<style scoped>
.slot_image {
    background : url("../../images/produits/vasco-de-gama-paris-saclay.jpg") center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.sub__section {
  display: flex;
  align-items : flex-start;
  justify-content: center;
  margin-top : 3rem;
}

.collection {
  margin-top : 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 2rem;
}

.items_styling {
  border-radius: 4px;
  justify-self: center;
  position: relative;
  height: 300px;
  width: 300px;
  background-color: rgba(250, 250, 250, 0.25);
}

.items_styling > .items__img {
  border-radius: 4px;
  width : 100%;
  height : 100%;
  object-fit: cover;
  opacity: 1;
  transition: all 0.3s ease-in-out;
}

.items_styling p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: 0;
  opacity: 0;

  font-family: "Bebas Neue";
  font-size: 1.5rem;
  text-decoration: none;
  text-align: center;
  letter-spacing: 2px;
  color: white;
  transition: all 0.5s ease-in-out;
}

.items_styling:hover p {
  text-shadow: #0a2647 1px 0 10px;
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.items_styling:hover > img {
  opacity: 0.3;
  transition: all 0.3s ease-in-out;
}


@media only screen and (max-width: 950px) {
  .collection {
    display : flex;
    flex-direction : column;
    align-items: center;
    justify-content: flex-start;
    margin-top : 0;
  }

  .items_styling {
    height : 20rem;
    width : 20rem;
  }
  .items_styling p {
  opacity : 1;
  }
}

</style>
