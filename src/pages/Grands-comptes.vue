<template>
  <Layout>
    <h1> Nos dossiers d'exception </h1>

    <h2> Les grands comptes </h2>
    <div class="section__exception">
      <h3> La SNCF </h3>
      <p> On a refait l'intérieur des gares</p>
    </div>

    <div class="section__exception">
      <h3> Paris Saclay </h3>
      <p> Projet tolerie forezienne </p>
    </div>

    <div class="section__exception">
      <h3> Le Grand Paris </h3>
      <p> Projet monumental du renouvellement des gares</p>
    </div>


    <h2> Les sur-mesure </h2>

    <div class="section__exception">
      <h3> Roquefert</h3>
      <p> On a imprimé des feuilles sur les bancs </p>
    </div>

    <div class="section__exception">
      <h3> Le Trocadéro </h3>
      <p> Des jaridinières </p>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/layouts/LayoutAccueil.vue";

export default {
  components: {
    Layout
  },

  metaInfo: {
    title: "Grands comptes et sur-mesure"
  }
};
</script>

<style scoped>
.contenu {
  gap : 0;
}
h1 {
  padding-top : 3;
  margin : 0;
  color : black;
  border : none;
  border-bottom: black solid 1px;
  width : 100%;
}

h2 {
  margin-left : 3rem;
  color : grey;
}

.section__exception {
  border : solid pink;
}
</style>
