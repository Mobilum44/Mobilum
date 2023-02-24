<template>
  <Layout>
    <section class="page_top">
      <g-link
        class="return"
        onclick="history.go(-1)"
      >
        Retour
      </g-link>


      <div class="title">
        <h1>{{ $page.product.title }}</h1>
        <p>{{ $page.product.designer }}</p>
      </div>
    </section>


    <div class="gallery">
      <Caroussel :img="$page.product.caroussel" />
    </div>

    <div class="product_description">
      <h3>Caractéristiques</h3>
      <div class="items">
        <g-image
          v-if="edge.node.cover_image"
          alt="photo mobilier urbain"
          :src="edge.node.cover_image"
        />
        <p> Ajouter filaires + dimensions </p>
        <p>
          <em>Materiau :</em> : {{ $page.product.materiau }}kg<br> 
          <em>Poids</em> : {{ $page.product.poids }}kg<br> 
          <em>Dimensions</em> : {{ $page.product.dimensions }}mm <br>
          Monobloc/ multibloc
        </p>
      </div>
      <div class="items">
        <p>{{ $page.product.description }}</p>
      </div>
    </div>

    <div class="other_products">
      <h2>Mettre les autres produits de la gamme ici</h2>
    </div>
  </Layout>
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
import Layout from "@/layouts/Default.vue";
// import Button from "@/components/Button.vue";
import Caroussel from "@/components/Caroussel.vue";

export default {
	components: {
		// Button,
		Layout,
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
	align-items: center;
}

.items {
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

em {
	color: #1a949d;
}

</style>
