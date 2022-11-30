<template>
  <Layout>
    <h1>Accueil</h1>

    <div class="roller">
      <!-- Autre mise en page :Cartes avec texte en dessous, 3 directement affichés -->

      <News />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </p>
    </div>

    <p class="quote">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>

    <div class="redirection">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </p>
    </div>
  </Layout>
</template>


<script>
import News from "@/components/News.vue";

export default {
  metaInfo: {
    title: "Accueil",
  },
  components: {
    News,
  },
};
</script>

<style>
.quote {
  color: pink;
  font-size: 2rem;
  letter-spacing: 2px;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  display: flex;
  justify-content: center;
}
</style>