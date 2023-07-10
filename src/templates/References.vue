<template>
  <Layout>
    <h1> {{ $page.references.title }} </h1>
    <div class="sub__section wide">
      <div class="sub__section__content">
        <p>Partie texte + infos</p>
      </div>
      <div class="sub__section__content">
        Partie images AutoSlide
      </div>
    </div>
  </Layout>
</template>

<!--
<page-query>
    query References ($id: ID!) {
      references: references (id: $id) {
        title
        chef_projet
        gamme
        caroussel
        description
      }
    }
</page-query>
-->

<script>
import Layout from "@/layouts/LayoutAccueil.vue";

export default {
	components: {
		Layout,
	},
};
</script>


