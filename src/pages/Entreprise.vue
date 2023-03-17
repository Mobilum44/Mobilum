<template>
  <Layout>
    <template #slot_image>
      <section class="slot_image">
        <h1>Notre entreprise</h1>
      </section>
    </template>
    
    <section class="page_top">
      <div class="title">
      </div>
    </section>

    <div class="section_top">
      <article>
        En quelques années, Mobilum  est devenue une référence en matière de conception et fabrication de mobiliers urbains en BFUP. <br />
        Cette aventure industrielle et commerciale, partie d'une page blanche nous a imposé un investissement conséquent en recherche et développement, associé à l'acquisition de l'équipement nécessaire à la bonne maitrise du
        Béton Fibré à Ultra-hautes Performances. <br />
        Nous avons aussi la chance et le devoir chez Mobilum, de former nos futurs talents à ce nouveau concept artisanal, et ce dans l'esprit d'une collaboration constante entre nos différentes générations. <br />
        Nous espérons que notre travail puisse vous donner envie de faire apparaître nos mobiliers dans vos futurs aménagements.
      </article>
    </div>
         

    <!-------------------------------------------------------------------
    La griffe Mobilum
  -------------------------------------------------------------------->

    <div>
      <h2>
        Le design selon Mobilum
      </h2>
      <div class="section__content">
        <div class="section__side illustration croquis">
          <g-image
            alt="Table cantine réelle"
            src="../../src/assets/img/croquis-sovann-kim-pour-mobilum.jpg"
            center
            width="600"
            fit="cover"
          />
        </div>

        <div class="section__side text">
          <div class="section__text design">
            <article>
              <!--
            La marque et le design : designers et distinctions
          ---->
              Nous avons fait le choix de travailler avec des designers aguérris et rompus aux exigences de
              l'espace public depuis de nombreuses années, qui pensent avant tout à l'usage dans leurs créations
              et dans la réinterprétaiton de classiques du mobilier urbain. Leurs dessins expriment la vision qu'ils
              ont de la ville et des espaces publics. Il en ressort des lignes de produits avec chacune une personnalité
              unique et une volonté commune de "rendre service aux usagers en proposant des mobiliers discrets, que
              j'espère le plus élégant possible sans ostentation, et durable dans le temps aussi bien par son dessin que
              par la qualité de son usage." Sovann KIM.
            </article>
            <div class="real__model">
              <g-image
                alt="Table cantine réelle"
                src="@/assets/img/table-cantine-02-croquis.png"
                center
                width="200px"
                fit="cover"
              />
              <g-image
                alt="Table cantine réelle"
                src="@/assets/img/table-cantine-01-croquis.png"
                center
                width="200px"
                fit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <!-------------------------------------------------------------------
    Notre savoir-faire
  -------------------------------------------------------------------->
    <div>
      <h2> Notre savoir-faire</h2>
      <div class="section__content">
        <div class="section__side text">
          <div class="section__text engagement">
            <article>
              100% français + le BFUP : couleur, finition, ... + formation + BE
              <br>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
              rerum illum odit fugit assumenda rem dolores inventore iste
              reprehenderit maxime! Iusto.
            </article>
          </div>
        </div>
        <div class="section__side savoir-faire">
          <g-image
            alt="mains mobilum"
            src="../../src/assets/img/savoir-faire.jpg"
            center
            width="1000px"
            fit="cover"
          />
        </div>
      </div>
    </div>
    <!---------------------------------------------------
      Nos activités
  --------------------------------------------------->

    
    <div class="section__side center">
      <h2> Bla bla bla </h2>
      <Card />
    </div>   
      
    <!---------------------------------------------------
      Nos engagements
  --------------------------------------------------->

    <div>
      <h2> Nos engagements </h2>
      <div class="section__content">
        <div class="section__side illustration">
          <g-image
            alt="Angers tram"
            src="../assets/img/angers_tram.jpg"
            center
            width="1000px"
            fit="cover"
          />
        </div>
        <div class="section__side text">
          <div class="section__text engagement">
            <article>
              Fournisseurs 100% français : vicat, transport, tous en général
              <br />
              <br />
              Nous produisons de manière raisonnée en limitant au maximum notre impact sur l'environnement. Depuis notre créations, cette préoccupation est intégrée dans notre travail, du développement produit jusqu"à la production.
              <br />
              L'intégralité des produits présentés est fabriquée sur notre site de production implanté au Loroux-Bottereau en Loire-Atlantique. <br />
              <br />
              La volonté de réduire l'impact de notre fabricatication nous a naturellement amené à investir dans des outils performants et modernes. Le choix d'une centrale spécifique nous permet de diminuer très fortement les temps de cycle et de consommer moins d'énergie, notamment en électricité et en eau. Une station de recyclage filtre l'eau utilisée pour notre production.
            </article>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>

import Card from "@/components/Card.vue";
export default {
  
    components: {
      Card
  },
  
  metaInfo: {
    title: "Notre entreprise",
  },
};
</script>


<style scoped>
/*-------------------------------------------------------------------------
    General
  -----------------------------------------------------------------------*/
.slot_image {
    background : url("../assets/img/fond_entreprise.jpg") center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
}


h2 {
  padding-bottom : 1rem;
  margin : 1rem;
  margin-top : 2rem;
  border-bottom: solid 1px;
}

/*-------------------------------------------------------------------------
    Page top 
  -----------------------------------------------------------------------*/

.section_top {
  width : 70%;
  margin-left : 3rem;
  margin-bottom : 2rem;
  display : flex;
  flex-direction : row;
  text-align : justify;
}

article {
  -webkit-column-count:2;
  -moz-column-count:2;
  column-count:2;
  -webkit-column-gap: 30px;
  -moz-column-gap: 30px;
  column-gap: 30px;
}
  
/*-------------------------------------------------------------------------
    Page content 
  -----------------------------------------------------------------------*/

.section__content {
  display : flex;
  flex-direction : row;
  align-items : flex-end;
  justify-content: space-between;
  margin :  2rem 0 2rem 0;
}

.section__side {
  display : flex;
  flex-direction : column;
  justify-content: flex-end;
}

.illustration img {
  object-fit: cover;
    width : 35vw;
    height : 80vh;
}

.savoir-faire img {
  object-fit: cover;
    width : 55vw;
    height : 80vh;
}


.real__model {
  margin-top : 3rem;
  display : flex;
  flex-direction : row;
  justify-content: space-evenly;
}

/*--------------------------------------------
    Gestion des textes
--------------------------------------------*/
.section__text {
  z-index : 1;
  padding : 2rem;
  text-align : justify;
}

/* ------------------------------------------------------------------------------------------

            RESPONSIVE TELEPHONES

--------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 600px) {

  h2 {
  padding-bottom : 1rem;
  margin : 0rem;
  border-bottom: solid 1px;
}

  article {
  -webkit-column-count:1;
  -moz-column-count:1;
  column-count:1;
  width : 100%;
}

  .section__content {
    display : flex;
    flex-direction : column;
    align-items: center;
  }

.illustration img {
  object-fit: cover;
    width : 95vw;
    height : 70vh;
}

.savoir-faire img {
  object-fit: cover;
    width : 95vw;
    height : 70vh;
}

  .real__model {
  display : flex;
  flex-direction : column;
  margin : 0;
  margin-top : 2rem;
  align-items: center;
  justify-content: center;
}

}

</style>