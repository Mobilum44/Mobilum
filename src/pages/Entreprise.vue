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

    <div class="section__content">
      <div class="section__side croquis shadow">
      </div>

      <div class="section__side">
        <h2>
          Le design selon Mobilum           <g-image
            alt="Table cantine réelle"
            src="@/assets/img/table-cantine-02-transparent.png"
            center
            height="200px"
            width="300px"
          />
        </h2>
        <div class="section__text design">
          <article>
            <!--
            La marque et le design : designers et distinctions
            <br />
            Photos : dessins sovann kim cantine pour janus, avec photos produit réel + logo janus <br />
            REORIENTER LE BANC + janus en bas droit du dessin-->
            Nous avons fait le choix de travailler avec des designers aguérris et rompus aux exigences de
            l'espace public depuis de nombreuses années, qui pensent avant tout à l'usage dans leurs créations
            et dans la réinterprétaiton de classiques du mobilier urbain. Leurs dessins expriment la vision qu'ils
            ont de la ville et des espaces publics. Il en ressort des lignes de produits avec chacune une personnalité
            unique et une volonté commune de "rendre service aux usagers en proposant des mobiliers discrets, que
            j'espère le plus élégant possible sans ostentation, et durable dans le temps aussi bien par son dessin que
            par la qualité de son usage." Sovann KIM.
          </article>
        </div>
      </div>
    </div>
    

    <!-------------------------------------------------------------------
    Notre savoir-faire
  -------------------------------------------------------------------->

    <div class="section__content">
      <div class="section__side">
        <h2> Notre savoir-faire</h2>
        <div class="section__text savoir__faire">
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
      <div class="section__side hands shadow">
      </div>
    </div>

    <!---------------------------------------------------
      Nos activités
  --------------------------------------------------->

    
    <div>
      <h2> ? </h2> <p> "Comment on s'est servi de mobilum" "où avons nous été posés" ...</p>
      <Card />
    </div>   
      
    <!---------------------------------------------------
      Nos engagements
  --------------------------------------------------->

  
    <div class="section__content">
      <div class="section__side engagement__image shadow">
      </div>
      <div class="section__side">
        <h2> Nos engagements </h2>
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
  margin : 2rem;
  border-bottom: solid 1px;
}

/*-------------------------------------------------------------------------
    Page top 
  -----------------------------------------------------------------------*/

.section_top {
  width : 70%;
  margin-left : 3rem;
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
  
  margin-bottom : 3rem;
}
  
/*-------------------------------------------------------------------------
    Page content 
  -----------------------------------------------------------------------*/

.section__content {
  height : 80vh;
  display : flex;
  flex-direction : row;
  align-items : flex-end;
  justify-content: center;
  margin :  4rem 0 6rem 0;
}

.section__side {
  /* border : solid pink; */
  height : 100%;

  display : flex;
  flex-direction : column;
  justify-content: flex-end;
}

/*--------------------------------------------
    Gestion des images
--------------------------------------------*/
.shadow {
  z-index : 5;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
}


.croquis {
  width : 30vw;
  background: url("../assets/img/croquis-sovann-kim-pour-mobilum.jpg") center center
    no-repeat;
  background-size: cover;
  background-attachment:initial;
}

.hands {
  width : 50vw;
  background: url("../assets/img/savoir-faire.jpg") center center
    no-repeat;
  background-size: cover;
  background-attachment:initial;
}


.engagement__image {
  width : 40vw;
  background: url("../assets/img/angers_tram.jpg") center center
    no-repeat;
  background-size: cover;
  background-attachment:initial;
}

/*--------------------------------------------
    Gestion des textes
--------------------------------------------*/
.section__text {
  z-index : 1;
  padding : 2rem;
  text-align : justify;
  background-color : rgba(245,235,224, 0.8);
}

.design {
    width : 40vw;
}

.savoir__faire {
    width : 30vw;
}

.engagement {
    width : 40vw;
}
</style>