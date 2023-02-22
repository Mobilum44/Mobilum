<template>
  <LayoutProduct>
    <section class="page_top">
      <g-link
        class="return"
        to="/Offre/"
      >
        Retour
      </g-link>
      <!-- trouver le bon chemin pour faire un vrai bouton retour-->
      <div class="title">
        <h1>{{ $page.product.title }}</h1>
        <p>{{ $page.product.designer }}</p>
      </div>
    </section>


    <div class="gallery">
      <Caroussel :img="$page.product.caroussel" />

      <!--

        Images défilantes en fond
        <div class="text_gallery">
          <p>
            Mini galerie d'images <br />
            Inclure le nom des prescripteurs, lieu du projet, ... en même temps
            que le défilement des photos in situ
          </p>
        </div>
        -->
    </div>

    <div class="product_description">
      <div class="items">
        <h3>Caractéristiques</h3>
        <p>
          <em>Poids</em> : {{ $page.product.poids }}kg<br> 
          <em>Dimensions</em> : {{ $page.product.dimensions }}mm <br> 
        </p>
      </div>
      <div class="items">
        <p>{{ $page.product.description }}</p>
      </div>
    </div>

    <div class="other_products">
      <h2>Mettre les autres produits de la gamme ici</h2>
    </div>
  </LayoutProduct>
</template>

<page-query>
query Product ($id: ID!) {
  product: product (id: $id) {
    title
    gamme
    designer
    materiau
    caroussel
    poids
    dimensions
    traitement
    description
  }
}
</page-query>

<script>
import LayoutProduct from "@/layouts/LayoutProduct.vue";
// import Button from "@/components/Button.vue";
import Caroussel from "@/components/Caroussel.vue";

export default {
	components: {
		// Button,
		LayoutProduct,
		Caroussel,
	},
};
</script>

<style scoped>
/*-----------------------------------------------------------------
      Bouton retour
  ---------------------------------------------------------------*/
.return {
	color: black;
	text-decoration: none;
}
.return:hover {
	text-decoration: underline;
}

/*-----------------------------------------------------------------
      Zone titre
  ---------------------------------------------------------------*/
.page_top {
  margin-top : 5rem;
	padding-top: 1rem;
  display : flex;
  flex-direction : row;
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
.title,
h1 {
  margin-top : 1rem;
	padding-bottom: 1rem;
	margin-bottom: 1rem;
}

/*-----------------------------------------------------------------
      Zone galerie
  ---------------------------------------------------------------*/


/*-----------------------------------------------------------------
      Zone description
  ---------------------------------------------------------------*/
.product_description {
	display: flex;
	flex-direction: column;
	padding-top: 3vh;
	padding-bottom: 3vh;
	align-items: center;
}

.items {
	width: 60%;
	padding: 2vh;
	display: flex;
	flex-direction: column;
	align-items: center;
}

em {
	color: #1a949d;
}

.other_products {
	margin-top: 2rem;
}
</style>
