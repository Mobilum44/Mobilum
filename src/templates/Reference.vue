<template>
  <Layout>
    <div class="sub__section wide">
      <div class="sub__section__content text">
        <div class="floating_title">
          <h1> \ {{ $page.reference.title }} </h1>
        </div>
        <div class="chapeau">
          <em>Localisation</em> : {{ $page.reference.localisation }} <br />
          <em>MOE</em> : {{ $page.reference.moe }} <br />
          <em>MOA</em> : {{ $page.reference.moa }} <br />
          <em>Fabricant</em> : {{ $page.reference.fabricant }} <br />
          <em>Date de réalisation</em> : {{ $page.reference.date_realisation }} <br />
        </div>
        <p>{{ $page.reference.description }}</p>
      </div>
      <div class="sub__section__content">
        <div class="slider">
          <AutoSlider />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Reference ($id: ID!) {
    reference: reference (id: $id) {
      title
      localisation
      moe
      moa
      fabricant
      date_realisation
      description
    }
  }
</page-query>


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
/*.floating_title {
  border : solid black;
    margin : 0;
    margin-top : 55vh;
    margin-left : 2rem;
    padding : 0;
    position : fixed;
    height : 100vh;
    width : 50%;
}*/

h1 {
  color : black;
    border : none;
    text-align: left;
    font-size: 200%;
}

.sub__section {
    height : 90vh;
    margin-top : 15vh;
    display : flex;
    flex-direction : row;
}
.sub__section__content {
    width : 50vw;
    flex-direction : column;
}
.text{
    margin-top : 2vh;
    padding : 2rem;
}
.chapeau {
  border : solid black 1px;
  margin : 0;
  margin-bottom : 2rem;
  padding : 1rem;
}
.slider {
    border : pink solid;
    width : 50vw;
    height : 100%;
    background-image: url("../assets/img/angers_tram.jpg");
    object-fit: fit;
}
</style>
  
  
  