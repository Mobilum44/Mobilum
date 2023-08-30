<template>
  <!--mobilier urbain, Ammenagement(hook + signaletique), grands comptes, Nos réalisations sur mesure
  Supprimer sav -->
  <Layout>
    <template #slot_image>
      <section class="slot_image">
        <h1>Nos collections</h1>
      </section>
    </template>
    <p> Changer l'ordre : MU / sur mesure / signalétique / hook </p>

    <b> Le border pour rendre tout ca responsive </b>
    <p>
      Pour le hook : phrase d'intro <br />
      QUalité \ esthétisme \personnalisation font du hook u nproduit phre sur le marché des habillages des coffrets techniques<br />
      Rajouter : 1485 et 1675
    </p>

    <p>
      Pour la signalt"ique <br />
      \diSTINQU2 \résisistant \ ultra personalisable font de nos totems des pièces uniques dans ce domaine <br />
      Dé"tails en plus sur chaque page de totem
    </p>

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
          to="/exceptionnels"
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

      <div class="collection__descriptions">
        <p> Une gamme complète de MU à votre disposition </p>
        <p> Nous savons répondre présents </p>
        <p> Démarquez vous</p>
        <p> Une valeur sure </p>
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
    background : url("../assets/img/fond-plage-collection.jpg") center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.sub__section {
  display: flex;
  align-items : flex-start;
  justify-content: center;
  gap : 4rem;
  margin-top : 3rem;
}

/*------------------------------------------------------------------------------------------
        Images des collections
-------------------------------------------------------------------------------------------*/
.collection {
  display : flex;
  flex-direction : column;
  gap : 2rem;
}

.items_styling {
  border-radius: 4px;
  justify-self: center;
  position: relative;
  height: 300px;
  width: 300px;
  /*
  background-color: rgba(250, 250, 250, 0.25); */
  background-color : #1A949D;
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

/*------------------------------------------------------------------------------------------
        Description des collections
-------------------------------------------------------------------------------------------*/
.collection__descriptions {
  height : 1300px;
  display : flex;
  flex-direction : column;
  justify-content: space-around;
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
