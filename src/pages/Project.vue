<template>
  <Layout>
    <h1> titre </h1>
    <div class="sub__section wide">
      <div class="sub__section__content text">
        <div class="chapeau">
          Localisation : <br />
          Chef de projet : <br />
          Architecte : <br />
          Date de réalisation : <br />
        </div>
        <p>Partie texte + infos</p>
      </div>
      <div class="sub__section__content">
        <div class="slider">
          <!-- <AutoSlider /> -->
        </div>
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
  import Layout from "@/layouts/LayoutNoMargin.vue";
  import AutoSlider from "@/components/AutoSlider.vue";
  
  export default {
      components: {
          Layout,
          AutoSlider,
      },
  };
  </script>


<style scoped>
h1 {
    color : black;
    border : none;
    margin : 0;
    margin-top : 55vh;
    margin-left : 2rem;
    padding : 0;
    text-align: left;
    position : fixed;
    font-size: 10rem;
}

.sub__section {
    height : 90vh;
    margin-top : 15vh;
    border : solid blue;
    display : flex;
    flex-direction : row;
}

.text{
    margin-top : 5vh;
}

.sub__section__content {
    width : 50vw;
    flex-direction : column;
}
.slider {
    border : pink solid;
    width : 50vw;
    height : 100%;
    background-image: url("../assets/img/angers_tram.jpg");
    object-fit: fit;
}
</style>
  
  
  