<template>
  <LayoutProduct>
    <!-- SUPPRIMER toute l'architecture, pour avoir juste 1 sous catégorie 
    MISE EN PAGE : image de fond, défilant avec texte sur le coté (inspi xiaomi
    
    En dessous du bandeau plein : infos techniques et reste de la gamme
    
        -->

    <template #slot_titre>
      <section class="page_top">
        <g-link class="return" to="/Offre/">Retour</g-link>
        <!-- trouver le bon chemin pour faire un vrai bouton retour-->
        <div class="contenu">
          <h1>{{ $page.product.title }}</h1>
          <p>{{ $page.product.designer }}</p>
        </div>
      </section>
    </template>

    <template #slot_bandeau>
      <div class="gallery">
        <div class="image_gallery">
          <g-image
            class="img"
            alt="Cover image"
            v-if="$page.product.illustration_image"
            :src="$page.product.illustration_image"
          />
        </div>

        <!-- Images défilantes en fond -->
        <div class="text_gallery">
          <p>
            Mini galerie d'images <br />
            Inclure le nom des prescripteurs, lieu du projet, ... en même temps
            que le défilement des photos in situ
          </p>
        </div>
      </div>
    </template>
    <!-----
        <div class="product_description">
          <div class="items">
            <h3>Caractéristiques</h3>
            <p>
              <em>Matériau</em> : {{ $page.product.materiau }}<br />
              <em>Poids</em> : {{ $page.product.poids }}<br />
              <em>Dimensions</em> : {{ $page.product.dimensions }} <br />
              <em>Traitement</em> : {{ $page.product.traitement }}
            </p>
          </div>
          <div class="items">
            <h3>Description</h3>
            <p>{{ $page.product.description }}</p>
          </div>
        </div>
        -->
    <div class="other_products">
      <p>Infos de base sur le produit (mesures, etc)</p>
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
    illustration_image
    materiau
    poids
    dimensions
    traitement
    description
  }
}
</page-query>

<script>
import LayoutProduct from "@/layouts/LayoutProduct.vue";
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
    LayoutProduct
  }
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
  padding-top: 1rem;
  padding-left: 10rem;
  padding-right: 10rem;
}

.contenu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contenu,
p {
  margin: 0;
  padding: 0;
}
.contenu,
h1 {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

/*-----------------------------------------------------------------
      Zone galerie
  ---------------------------------------------------------------*/
.image_gallery {
  width: 100%;
  height: 100vh;
}
.image_gallery > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/*
.items {
  width: 50%;
}

em {
  color: #1a949d;
} */

.other_products {
  margin-top: 2rem;
}
</style>
