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
      <p class="chapeau">
        En quelques années, Mobilum  est devenue une référence en matière de conception et fabrication de mobiliers urbains en BFUP. <br />
        Cette aventure industrielle et commerciale, partie d'une page blanche nous a imposé un investissement conséquent en recherche et développement, associé à l'acquisition de l'équipement nécessaire à la bonne maitrise du
        Béton Fibré à Ultra-hautes Performances. <br /><br />
        Nous avons aussi la chance et le devoir chez Mobilum, de former nos futurs talents à ce nouveau concept artisanal, et ce dans l'esprit d'une collaboration constante entre nos différentes générations. <br />
        Nous espérons que notre travail puisse vous donner envie de faire apparaître nos mobiliers dans vos futurs aménagements.
      </p>
    </div>
         

    <!-------------------------------------------------------------------
    La griffe Mobilum
  -------------------------------------------------------------------->

    <div class="sub__section wide">
      <div class="sub__section__content">
        <div class="section__side illustration croquis">
          <!--
          <g-image
            alt="Table cantine réelle"
            src="../../src/assets/img/croquis-sovann-kim-pour-mobilum.png"
            center
            width="600"
            fit="cover"
          />
                  -->
        </div>

        <div class="section__side text design">
          <h2>
            \ Le design selon Mobilum
          </h2>
          <div class="section__text ">
            <p>
              <!--
            La marque et le design : designers et distinctions
          ---->
              <strong>"Le design, c'est trop génial."</strong>
              <br /><br />
              Nous avons fait le choix de travailler avec des designers aguérris et rompus aux exigences de
              l'espace public depuis de nombreuses années, qui pensent avant tout à l'usage dans leurs créations
              et dans la réinterprétaiton de classiques du mobilier urbain. Leurs dessins expriment la vision qu'ils
              ont de la ville et des espaces publics. Il en ressort des lignes de produits avec chacune une personnalité
              unique et une volonté commune de "rendre service aux usagers en proposant des mobiliers discrets, que
              j'espère le plus élégant possible sans ostentation, et durable dans le temps aussi bien par son dessin que
              par la qualité de son usage." Sovann KIM.
            </p>
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
              <g-image
                alt="Logo Janus de la cité 2016"
                src="@/assets/img/janus-de-la-cite-logo.png"
                center
                width="70px"
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
    <div class="sub__section wide dark">
      <div class="sub__section__content">
        <div class="section__side text">
          <h2>
            \ Notre savoir-faire
          </h2>
          <div class="section__text">
            <p>
              <strong>"Chez Mobilum, notre savoir-faire est ancré dans un artisanat 100% français et local."</strong>
              <br /><br />
              Nous sommes fiers de produire des mobiliers urbains de haute qualité, fabriqués avec soin par nos artisans qualifiés.
              Chaque pièce est réalisée avec une attention méticuleuse aux détails, reflétant notre engagement envers
              l'excellence et la fierté du travail bien fait.
              <br /><br />
              Nous accordons une importance particulière à la formation en interne de nos nouveaux employés. Nous croyons fermement
              à la transmission des savoirs et des compétences, garantissant ainsi la pérennité de notre artisanat.
              <br /><br />
              <!-- La synergie entre notre savoir-faire artisanal, notre engagement envers la formation en interne et notre bureau
              d'études performant nous permet de repousser les limites de la conception et de la fabrication de mobilier urbain
              en BFUP. --> Nous sommes constamment à la recherche de nouvelles idées, de techniques innovantes et de matériaux de qualité
              pour offrir à nos clients des produits uniques, durables et esthétiquement exceptionnels.
            </p>
          </div>
        </div>
        <div class="section__side illustration savoir-faire">
          <!--
          <g-image
            alt="mains mobilum"
            src="../../src/assets/img/savoir-faire.jpg"
            center
            width="1000px"
            fit="cover"
          />
          -->
        </div>
      </div>
    </div>
    <!---------------------------------------------------
      Nos activités
  --------------------------------------------------->

    <div class="sub__section center wide">
      <b> Corriger les descriptions + essayer de faire en sorte que ca soit infini pour de vrai</b>
      <!-- <h2> Bla bla bla </h2> -->
      <Card />
      <Villes />
    </div>  
      
    <!---------------------------------------------------
      Nos engagements
  --------------------------------------------------->

    <div class="sub__section wide dark">
      <div class="sub__section__content">
        <div class="section__side illustration RSE">
          <!--
          <g-image
            alt="Angers tram"
            src="../assets/img/angers_tram.jpg"
            center
            width="1000px"
            fit="cover"
          />
          -->
        </div>
        <div class="section__side text">
          <h2> \ Nos engagements </h2>
          <div class="section__text">
            <p>
              <strong>"Nous produisons de manière raisonnée en limitant au maximum notre impact sur l'environnement."</strong>
              <br /><br />
              Depuis notre créations, cette préoccupation est intégrée dans notre travail, du développement produit jusqu"à la production.
              <br />
              L'intégralité des produits présentés est fabriquée sur notre site de production implanté au Loroux-Bottereau en Loire-Atlantique. <br />
              <br />
              La volonté de réduire l'impact de notre fabricatication nous a naturellement amené à investir dans des outils performants et modernes. Le choix d'une centrale spécifique nous permet de diminuer très fortement les temps de cycle et de consommer moins d'énergie, notamment en électricité et en eau. Une station de recyclage filtre l'eau utilisée pour notre production.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>

import Card from "@/components/Card.vue";
import Villes from "@/components/Villes.vue";

export default {
  
    components: {
      Card,
      Villes,
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
    background : url("../assets/img/fond-entreprise-st-cyr.png") center center no-repeat;
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
  margin-bottom : 3rem;
  margin-top : 3rem;
  display : flex;
  flex-direction : row;
  text-align : justify;
  align-items : center;
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
.sub__section {
  display : flex;
  flex-direction: column;
  justify-content : center;
  margin : 0;
}
.section__side {
  height : 100vh;
  display : flex;
  flex-direction : column;
  justify-content: flex-end;
  /* border-radius: 5px; */
}

.wide {
  margin-top : 2rem;
}

.design {
  margin : 0;
}

.real__model {
  margin-top : 3rem;
  display : flex;
  flex-direction : row;
  justify-content: space-between;
}

/*--------------------------------------------
    Gestion des textes
--------------------------------------------*/
.text {
  padding : 1rem;
}
.section__text {
  z-index : 1;
  padding : 2rem;
  text-align : justify;
  padding-top : 0;
}


/* ------------------------------------------------------------------------------------------
            Gestion des images
--------------------------------------------------------------------------------------------*/
.illustration {
  width : 200vw;
object-fit: contain;
background-position-y: center;
}

.croquis {
  width : 400vw;
  background-image:
  linear-gradient(to right, rgba(255,0,0,0), #fefcf3),
    url("../../src/assets/img/croquis-sovann-kim-pour-mobilum.png");
  /* border-radius: 5px;
   border : solid black 1px; */
}
.savoir-faire{
  background-image:
  linear-gradient(to left, rgba(255,0,0,0), #f5ebe0),
    url("../../src/assets/img/savoir-faire.jpg");
    background-size: cover;
  
}
.RSE {
  background-image:
  linear-gradient(to right, rgba(255,0,0,0), #f5ebe0),
    url("../assets/img/mobilum-valeurs-rse-avenirv2.png");
    background-size: cover;
}


/* ------------------------------------------------------------------------------------------

            RESPONSIVE TELEPHONES

--------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 950px) {

  h2 {
  padding-left : 1rem;
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
.section_top {
  margin : 0rem;
}

.sub__section {
  height : 100%;
}.sub__section__content {
    display : flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;
}
.section__side {
  height : 100%;
  display : flex;
  flex-direction : column;
  justify-content: flex-end;
  /* border-radius: 5px; */
}

.section__text {
  padding-bottom : 0;
}
.illustration img {
  object-fit: cover;
    width : 95vw;
    height : 50vh;
    background-position-y: bottom;
}

.dark{
  background-color : #fefcf3;
  color : black;
}
.dark p {
  color : black;
}

.croquis{
  width : 95vw;
    height : 50vh;
  background-image:
  linear-gradient(to left, rgba(255,0,0,0),rgba(255,0,0,0)),
    url("../../src/assets/img/croquis-sovann-kim-pour-mobilum.png");
    background-size: cover;
    box-shadow: rgba(50, 50, 93, 0.8) 0px 2px 5px -1px, rgba(0, 0, 0, 0.8) 0px 1px 3px -1px;
}

.savoir-faire{
  width : 95vw;
    height : 50vh;
  background-image:
  linear-gradient(to left, rgba(255,0,0,0),rgba(255,0,0,0)),
    url("../../src/assets/img/savoir-faire.jpg");
    background-size: cover;
    box-shadow: rgba(50, 50, 93, 0.8) 0px 2px 5px -1px, rgba(0, 0, 0, 0.8) 0px 1px 3px -1px;
}

.RSE{
  width : 95vw;
    height : 50vh;
    margin-bottom : 2rem;
  background-image:
  linear-gradient(to left, rgba(255,0,0,0),rgba(255,0,0,0)),
  url("../assets/img/angers_tram.jpg");
    background-size: cover;
    box-shadow: rgba(50, 50, 93, 0.8) 0px 2px 5px -1px, rgba(0, 0, 0, 0.8) 0px 1px 3px -1px;
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