<template>
  <Layout>
    <div class="sub__section wide">
      <div class="sub__section__content text">
        <div>
          <Button
            theme="arrow"
            to="/Exceptionnels/"  
          >
            ⇦
          </Button>
          <h1> \ <br /> {{ $page.reference.title }} </h1>
        </div>
        <div class="chapeau">
          <p>
            <em>Localisation</em> : {{ $page.reference.localisation }} <br />
          </p>
          <div class="chapeau__column">
            <div>
              <p> <em>MOE</em> : {{ $page.reference.moe }} <br /></p>
              <p> <em>MOA</em> : {{ $page.reference.moa }} <br /></p>
            </div>
            <div>
              <p><em>Fabricant</em> : {{ $page.reference.fabricant }} <br /></p>
              <p> <em>Date de réalisation</em> : {{ $page.reference.date_realisation }} <br /></p>
            </div>
          </div>
        </div>
      </div>
      <div class="sub__section__content">
        <div class="slider">
          <AutoSlider :img="$page.reference.caroussel" />
        </div>
      </div>
    </div>

    <div class="projet">
      <p class="description__projet">
        {{ $page.reference.description }}
      </p>
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
      caroussel
      description
    }
  }
</page-query>


<script>
  import Layout from "@/layouts/LayoutNoMargin.vue";
  import AutoSlider from "@/components/AutoSlider.vue";
  import Button from "@/components/Button.vue"
  
  export default {
      components: {
          Layout,
          AutoSlider,
          Button,
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

.arrow {
  position  : absolute;
  top : 20vh;
  left : 3vw;
}
h1 {
    color : black;
    border : none;
    text-align: center;
    font-size: 300%;
    margin : 0;

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
    align-items: center;
    justify-content: center;
}
.text{
    padding : 2rem;
    height : 100%;
    padding-bottom : 0;
}
.chapeau {
  width : 80%;
  display : flex;
  flex-direction: column;
  align-items: center;
  border : solid black 1px;
  margin : 0;
  margin-bottom : 1rem;
  padding : 1rem;
}
.chapeau div {
  width : 100%;
}
.chapeau p {
  margin-top : 0;
}

.chapeau__column {
  display : flex;
  flex-direction: row;
  justify-content: center;
}

.chapeau__column div {
  display : flex;
  flex-direction: column;
  align-items: center;
}
.chapeau__column p {
margin : 0;

}

.slider {
    width : 50vw;
    height : 100%;
    background-image: url("../assets/img/angers_tram.jpg");
    object-fit: fit;
}

.projet {
  width : 100%;
  height : 40vh;
  margin : 0;
  display : flex;
  flex-direction : column;
  justify-content: center;
  align-items : center;
}
.description__projet {
  width : 80%;
  background-attachment: scroll;
    overflow : scroll;
    overflow-x : hidden;

}
</style>
  
  
  