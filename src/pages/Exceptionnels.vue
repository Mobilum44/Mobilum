<template>
  <Layout>
    <div class="sub__section">
      <Button
        theme="bordered"
        to="/Offre/"  
      >
        Retour à l'offre
      </Button>

      <h1> Nos dossiers d'exception </h1>
    </div>
    <section class="sub__section">
      <div class="chapeau">
        <p>Nos projets sont trop exceptionnels !</p>
      </div>
    </section>

    <div class="sub__section__market">
      <ul>
        <li
          v-for="edge in $page.references.edges"
          :key="edge.node.id"
          class="card"
        >
          <g-link :to="edge.node.path">
            <CarteMarches>
              <template #img__marche>
                <g-image :src="edge.node.cover_image" />
              </template>

              <template #titre__marche>
                <h3> {{ edge.node.title }}</h3>
              </template>

              <template #texte__marche>
                <p>
                  {{ edge.node.cover_text }}
                </p>
                <!-- <Button
                    theme="transparent"
                    to="/Project/"
                  >
                    Découvrir
                  </Button>-->
              </template>
            </CarteMarches>
          </g-link>
        </li>
      </ul>
    </div>

    <p class="referencement">
      Plongez dans notre portfolio de projets en BFUP d'exception, en termes de taille, de
      prestige et d'exigence technique.<br /><br />
      <!-- De la participation à des projets monumentaux pour des espaces emblématiques, aux tables de pique-nique
impressionnantes conçues pour accueillir de grandes foules, notre expertise en mobilier urbain en BFUP garantit des
réalisations exceptionnelles qui inspirent et marquent les esprits. <br /><br /> -->
      Chaque projet est réalisé sur mesure pour répondre aux demandes spécifiques de chaque site et s'intégrer
      harmonieusement dans son environnement. Nous sommes fiers de contribuer à la création de lieux publics uniques,
      alliant fonctionnalité, durabilité et design. <br /><br />
      Nous nous engageons à continuer à innover et à repousser les limites pour façonner les espaces publics de demain,
      en créant des projets de mobiliers urbains en BFUP qui captivent les regards et améliorent la vie quotidienne des
      citadins.
    </p>
  </Layout>
</template>

<page-query>
query {
  references: allReference {
    edges {
      node {
        id
        title
        cover_image
        cover_text
        path
      }
    }
  }
}
</page-query>

<script>
import Layout from "@/layouts/LayoutAccueil.vue";
import CarteMarches from "@/components/CarteMarches.vue";
import Button from "@/components/Button.vue";

export default {
  components: {
    Layout,
    CarteMarches,
    Button,
  },

  metaInfo: {
    title: "Grands comptes et sur-mesure"
  }
};
</script>

<style scoped>
h2 {
  border : 0;
}

.chapeau {
  width : 70%;
}

.sub__section__market {
  width : 100%;
  border : solid pink;
  margin-top : 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 2rem;
}
.card {
  border : solid blue;
}
.sub__section__content {
  gap : 1rem;
  margin-bottom : 1rem;
}
</style>
