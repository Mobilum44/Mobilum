<template>
  <Layout>
    <template #slot_image>
      <section class="slot_image">
        <h1>La SNCF</h1>
      </section>
    </template>

    <p> Idée : faire comme une page de journal infinie, en scrollant. <br/>
      <br />
      Parler de l'histoire et du déroulé du projet
    </p>
  </Layout>
</template>
  

<script>
import Layout from "@/layouts/Default.vue";
/* import Button from "@/components/Button.vue"; */


export default {
  components: {
    Layout,
   /* Button,*/
  },

  metaInfo: {
    title: "Fiche projet SNCF"
  }
};
</script>


<style scoped>
.slot_image{
    background : url("../assets/img/fond_entreprise.jpg") center center no-repeat;
    background-size: cover;
    background-attachment: fixed;

}
</style>