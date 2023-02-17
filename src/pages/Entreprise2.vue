<template>
  <Layout>
    <template #slot_image>
      <section class="slot_image">
      </section>
    </template>
    
    <section class="page_top">
      <div class="title">
        <h1>Notre entreprise</h1>
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

    <div class="section_content">
      <div class="section_left">
        <div class="section_image">
          <g-image
            alt="Croquis Sovann Kim gamme Cantine Mobilum"
            src="@/assets/img/croquis-sovann-kim-pour-mobilum.jpg"
            center
            height="600px"
            width="500px"
          />
        </div>
        <div class="second_image">
          <g-image
            alt="Table cantine réelle"
            src="@/assets/img/table-cantine-02-transparent.png"
            center
            height="200px"
            width="300px"
          />
        </div>
      </div>

      <div class="section_right">
        <h2> Le design selon Mobilum</h2>
        <div class="section_text">
          <article>
            La marque et le design : designers et distinctions
            <br />
            Photos : dessins sovann kim cantine pour janus, avec photos produit réel + logo janus
            <br />
            <br />
            Nous avons fait le choix de travailler avec des designers aguérris et rompus aux exigences de
            l'espace public depuis de nombreuses années, qui pensent avant tout à l'usage dans leurs créations
            et dans la réinterprétaiton de classiques du mobilier urbain. Leurs dessins expriment la vision qu'ils
            ont de la ville et des espaces publics. Il en ressort des lignes de produits avec chacune une personnalité
            unique et une volonté commune de "rendre service aux usagers en proposant des mobiliers discrets, que
            j'espère le plus élégant possible sans ostentation, et durable dans le temps aussi bien par son dessin que
            par la qualité de son usage." Sovann KIM.
          </article>
        </div>
        <h3> =====> Bouton designer avec page designer ?</h3>
      </div>
    </div>
    <!-- Mettre des cartes en markdown pour afficher les designers -->
    

    <!-------------------------------------------------------------------
    Notre savoir-faire
  -------------------------------------------------------------------->

    <div class="section_content">
      <div class="section_left">
        <h2> Notre savoir-faire</h2>
        <div class="section_text">
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
      <div class="section_right">
        <div class="section_image">
          <g-image
            alt="Mobilum travail des moules pour BFUP"
            src="@/assets/img/savoir-faire.jpg"
            height="500px"
            width="800px"
            fit="cover"
          />
        </div>
      </div>
    </div>

    <!---------------------------------------------------
      Nos activités
  --------------------------------------------------->

    
    <div class="section_content">
      <div class="section_left">
        <h2>Activités</h2>
        <Card />
      </div>
    </div>   
      
    <!---------------------------------------------------
      Nos engagements
  --------------------------------------------------->

  
    <div class="section_content">
      <div class="section_left">
        <div class="section_image test">
          <!--
          <g-image
            alt="SNCF Gare Auxerre"
            src="@/assets/img/angers_tram.jpg"
            center
            height="500px"
            width="1500vw"
          />
          -->
        </div>
      
        <div class="section_engagement">
          <h2> Nos engagements </h2>
          <div class="section_text">
            <article>
              Fournisseurs 100% français : vicat, transport, tous en général
              <br />
              <br />
              Nous produisons de manière raisonnée en limitant au maximum notre impact sur l'environnement.
              Depuis notre créations, cette préoccupation est intégrée dans notre travail, du développement
              produit jusqu'à la production.
              <br />
              L'intégralité des produits présentés est fabriquée sur notre site de production implanté au
              Loroux-Bottereau en Loire-Atlantique. <br />
              <br />
              La volonté de réduire l'impact de notre fabricatication nous a naturellement amené à investir
              dans des outils performants et modernes. Le choix d'une centrale spécifique nous permet de diminuer
              très fortement les temps de cycle et de consommer moins d'énergie, notamment en électricité et en eau.
              Une station de recyclage filtre l'eau utilisée pour notre production.
            </article>
          </div>
        </div>
      </div>
    </div>
    
    
  <!---------------------------------------------------
         PARTIE TEAM : MISE EN SUSPEND 
  ---------------------------------------------------
  
  
    <div class="team">
      <p> Il y aura dans cette zone le bouton qui parlera de l'équipe Mobilum. </br>
      Petit lien qui renverra sur la page "cachée" avec les illustrations de Yebe.
      </p>
      <div class="button_style">
      <Button theme="shine" to="/Equipe/"> Qui sommes nous ? </Button>
      </div>
    </div>
    
    --------------------------------------------------->
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

<!--
<page-query>
query Collection ($id: ID!) {
  designers : designers (id: $id) {
    name
  }
}
</page-query>

-->

<style scoped>

/*-------------------------------------------------------------------------
    Page top 
  -----------------------------------------------------------------------*/
.slot_image {
  background : url("../assets/img/fond_entreprise.jpg") center center no-repeat;
  background-size: cover;
  width: 100%;
  height : 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content : center;
}

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
}
  
/*-------------------------------------------------------------------------
    Page content 
  -----------------------------------------------------------------------*/

.section_content {
  margin-top : 8rem;
  margin-bottom : 10rem;
  display : flex;
  flex-direction : row;
  align-items : flex-end;
  justify-content: center;
}

.section_content h2 {
  padding-bottom : 1rem;
  margin : 2rem;
  border-bottom: solid 1px;
}

.section_left {
  display : flex;
  flex-direction : column;
}

.section_right {
  display : flex;
  flex-direction : column;
}

.section_image {
  z-index : 99;
}

.section_image > img {
  object-fit: cover;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
}

.section_text {
  z-index : 10;
  padding : 3rem;
  margin-bottom : 1rem;
  text-align : justify;
  background-color : rgba(245,235,224, 0.8);
}

.section p {

  padding :0;
  margin : 0;
  /*font-size : 1.1rem;*/
  text-align : left;
}


.test {
    height: 100%;
  background: url("../../src/assets/img/SNCF_auxerre.png") center center
    no-repeat;
  background-size: cover;
  background-attachment: fixed;
}


.second_image {
  height: 200px;
  width :300px;
  z-index : 99;
  position : absolute;
  margin-top : 55vh;
    margin-left : 15vw;
  object-fit: cover;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  background-color : whitesmoke;
}

.section_engagement {
  display : flex;
  flex-direction : column;
justify-content : center;
  width : 50%;
}

/* team space */
.team {
  z-index : 100;
  margin-top: 3rem;
  padding : 1.5rem;
  display : flex;
  flex-direction :row;
  justify-content : space-between;
  background-color: #F5EBE0;
}

/* Boutton "team"*/
.button_style {
  display : flex;
  align-items: center;
}

.shine {
  background-color : #1A949D;
  font-size : 0.8rem;
}

</style>