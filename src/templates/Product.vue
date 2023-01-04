<template>
  <Layout>
    <div class="product_body">
      <Button theme="transparent" to="/contact/">Retour</Button>
      <div class="product_sheet">
        <div class="title_zone">
          <h1>
            {{ $page.product.title }}
          </h1>
          <p>{{ $page.product.designer }}</p>
        </div>
        <g-image
          class="Obrac"
          alt="Cover image"
          v-if="$page.product.illustration_image"
          :src="$page.product.illustration_image"
        />
        <p>Mini galerie d'images</p>
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
        <div class="other_products">
          <h2>Mettre les autres produits de la gamme ici</h2>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Product ($id: ID!) {
  product: product (id: $id) {
    title
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
import Button from "@/components/Button.vue";

export default {
  components: {
    Button
  }
};
</script>

<style scoped>
.product_body {
  margin: 3rem;
  padding: 2rem;
  padding-bottom: 0rem;
  padding-top: 0rem;
}

.product_sheet {
  border: #1a949d;
  border-style: double;
  padding: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title_zone {
  border: #1a949d solid 1px;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: O;
}

.title_zone {
}
.title_zone h1,
p {
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.product_description {
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.items {
  width: 50%;
}
.Obrac {
  width: 500px;
  margin-top: 2rem;
}
em {
  color: #1a949d;
}

.other_products {
  margin-top: 2rem;
}
</style>
