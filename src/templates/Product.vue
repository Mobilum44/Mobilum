<template>
  <Layout>
    <Button
      class="return"
      theme="bordered"
      onclick="/collection/"
    >
      Retour à la collection
    </Button>

    <section class="page_top">
      <div class="title">
        <h1 class="h1_title">
          {{ $page.product.title }}
        </h1>
        <p>{{ $page.product.designer }}</p>
      </div>
    </section>


    <section class="sub__section">
      <div class="gallery">
        <div
          v-for="(img, i) in $page.product.caroussel"
          :key="i"
        >
          <g-image :src="img" />
        </div>
        <!-- <Caroussel :img="$page.product.caroussel" /> -->
      </div>
    </section>

    
    <section class="sub__section">
      <h2>Caractéristiques</h2>

      <div class="sub__section__content">
        <div>
          <b>Trouver pourquoi filaire marche pas</b>
        </div>
        <p>
          <em>Matériau :</em> : {{ $page.product.materiau }}<br> 
          <em>Poids</em> : {{ $page.product.poids }}kg<br> 
          <em>Dimensions</em> : {{ $page.product.dimensions }}mm <br>
          <em>Format :</em> {{ $page.product.format }}
        </p>
      </div>
      <div class="sub__section__content">
        <p class="description">
          {{ $page.product.description }}
        </p>
      </div>
    </section>

    <section class="sub__section">
      <h2> Nos finitions </h2>
      <div class="sub__section__content">
        <div class="sub__finitions">
          <p class="strong">
            Couleurs naturelles
          </p>
          <div class="type">
            <div class="type__finition">
              <g-image
                class="color_square"
                alt="couleur du BFUP Mobilum"
                src="../assets/img/couleur-bfup-gris-fonce.jpg"
                center
                width="200vw"
                fit="cover"
              />
              <p>Gris foncé<br />(BCV Brut)</p>
            </div>
            <div class="type__finition">
              <g-image
                class="color_square"
                alt="couleur du BFUP Mobilum"
                src="../assets/img/couleur-bfup-blanc.jpg"
                center
                width="200vw"
                fit="cover"
              />
              <p>Blanc</p>
            </div>
          </div>
        </div>

        <div class="sub__finitions">
          <p class="strong">
            Teinté dans la masse
          </p>
          <div class="type">
            <div class="type__finition">
              <g-image
                class="color_square"
                alt="couleur du BFUP Mobilum"
                src="../assets/img/couleur-bfup-taupe.jpg"
                center
                width="200vw"
                fit="cover"
              />
              <p>Taupe</p>
            </div>
            <div class="type__finition">
              <g-image
                class="color_square"
                alt="couleur du BFUP Mobilum"
                src="../assets/img/couleur-bfup-rose.jpg"
                center
                width="200vw"
                fit="cover"
              />
              <p>Rose pastel</p>
            </div>
            <div class="type__finition">
              <g-image
                class="color_square"
                alt="couleur du BFUP Mobilum"
                src="../assets/img/couleur-bfup-bleu.jpg"
                center
                width="200vw"
                fit="cover"
              />
              <p>Bleu pastel</p>
            </div>
          </div>
        </div>
        

        <div class="sub__finitions">
          <p class="strong">
            Peinture polyuréthane
          </p>
          <div class="type">
            Tous les RAL sont possibles. Consultez-nous pour discuter de votre projet.
          </div>
        </div>
      </div>
    </section>

    <section class="sub__section">
      <h2> Dans la même gamme... </h2>
      <b>Mettre les autres produits de la gamme ici</b>
    </section>
  </Layout>
</template>

<page-query>
query Product ($id: ID!) {
  product: product (id: $id) {
    title
    gamme
    designer
    filaire
    caroussel (width: 600, quality: 100)
    materiau
    poids
    dimensions
    format
    traitement
    description
  }
}
</page-query>

<script>
import Layout from "@/layouts/LayoutAccueil.vue";
import Button from "@/components/Button.vue";
// import Caroussel from "@/components/Caroussel.vue";

export default {
/*
  props: {
    filaire: {
      type: Array,
      default: () => [],
    }
  },*/

  
	components: {
		Button,
		Layout,
		// Caroussel,
	},
};
</script>

<style scoped>
/*-----------------------------------------------------------------
      Bouton retour

.return {
	color: black;
	text-decoration: none;
}
.return:hover {
	text-decoration: underline;
}
  ---------------------------------------------------------------*/

  .return {
    height : 0;
    overflow : hidden;
    border : none;
  }

/*-----------------------------------------------------------------
      Zone titre
  ---------------------------------------------------------------*/
.page_top {
  width: 100%;
  display : flex;
  flex-direction : row;
  justify-content: center;
}

.title {
  width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.title,
p {
	margin: 0;
	padding: 0;
}

.h1_title {
  border-bottom: solid black 1px;
  text-align: center;
}


h1 {
  font-weight: 200;
  text-transform: none;
  text-align: center;
  border: none;
  color : black;
  padding : 0;
  margin : 0;
  margin-top : 1rem;
	padding-bottom: 1rem;
	margin-bottom: 1rem;
}

/*-----------------------------------------------------------------
      Zone filaire
  ---------------------------------------------------------------*/
.filaire {
  border : solid black
}

/*-----------------------------------------------------------------
      Zone galerie
  ---------------------------------------------------------------*/
.gallery {
  margin : 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
}

/*-----------------------------------------------------------------
      Sections générales
  ---------------------------------------------------------------*/
.sub__section {
  width : 80%;
}

.strong {
  font-family : montserrat;
}
.sub__section__content {
	width: 100%;
	display: flex;
	flex-direction: row;
  justify-content: space-around;
}

.description {
  margin-top : 2rem;
}

.sub__finitions{
  margin-top : 0;
  display : flex;
  flex-direction : column;
  align-items: center;
  width : 33%;
}
.type {
  width : 100%;
  padding : 1rem;
  display : flex;
  flex-direction: row;
  justify-content : center;
  gap : 1rem;
  align-items: flex-start;
}

.type__finition {
  display : flex;
  flex-direction: column;
  align-items: center;
}
.color_square{
  height : 10vh;
  width : 10vh
}
/* ------------------------------------------------------------------------------------------

            RESPONSIVE TELEPHONES

--------------------------------------------------------------------------------------------*/


@media only screen and (max-width: 950px) {
  .return {
    height : 2rem;
    overflow : hidden;
    border : solid black 1px;
  }

  .gallery {
  margin : 0;
}

.sub__section__content {
  display : flex;
  flex-direction : column;
  align-items : center;
}

.sub__section__content p {
  padding-top : 2rem;
}

}


</style>
