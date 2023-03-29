<template>
  <Layout>
    <Button
      theme="bordered"
      onclick="history.go(-1)"
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


    <div class="gallery">
      <Caroussel :img="$page.product.caroussel" />
    </div>

    <div class="product_description">
      <h3>Caractéristiques</h3>


      <div class="items">
        <p>
          Trouver pourquoi filaire marche pas
          <Filaire :img="$page.product.filaire" />
        </p>
        <p>
          <em>Materiau :</em> : {{ $page.product.materiau }}<br> 
          <em>Poids</em> : {{ $page.product.poids }}kg<br> 
          <em>Dimensions</em> : {{ $page.product.dimensions }}mm <br>
          <em>Format :</em> {{ $page.product.format }}
        </p>
      </div>
      <p>{{ $page.product.description }}</p>
    </div>

    <div class="other_products">
      <p>Mettre les autres produits de la gamme ici</p>
    </div>
  </Layout>
</template>

<page-query>
query Product ($id: ID!) {
  product: product (id: $id) {
    title
    gamme
    designer
    caroussel
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
import Caroussel from "@/components/Caroussel.vue";
import Filaire from "@/components/Filaires.vue";

export default {
	components: {
		Button,
		Layout,
		Caroussel,
    Filaire,
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

.h1_title {
  border-bottom: solid black 1px;
}


h1 {
  font-weight: 200;
  text-transform: none;
  border: none;
  color : black;
  padding : 0;
  margin : 0;
  margin-top : 1rem;
	padding-bottom: 1rem;
	margin-bottom: 1rem;
}

/*-----------------------------------------------------------------
      Zone galerie
  ---------------------------------------------------------------*/
.gallery {
  margin : 2rem 0;
}

/*-----------------------------------------------------------------
      Zone description
  ---------------------------------------------------------------*/
.product_description {
	display: flex;
	flex-direction: column;
	align-items: center;
  justify-content : center;
  gap : 2rem;

}

.items {
	width: 60%;
	display: flex;
	flex-direction: row;
  justify-content: space-between;
}

em {
	color: #1a949d;
}

/* ------------------------------------------------------------------------------------------

            RESPONSIVE TELEPHONES

--------------------------------------------------------------------------------------------*/


@media only screen and (max-width: 600px) {

.items {
  display : flex;
  flex-direction : column;
  align-items : center;
}

.items p {
  padding-top : 2rem;
}

}


</style>
