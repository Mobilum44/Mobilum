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
      <p>
        Ici, le texte qui présentera l'entreprise Mobilum, global.
        <br>
        <br>
        Page 6 : Faire sélections texte selon cohérence
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </p>
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
      </div>

      <div class="section_right">
        <div class="section_text">
          <h2> La griffe "Mobilum"</h2>
          <p>
            La marque et le design : designers et distinctions
            <br>

            Photos : dessins sovann kim cantine pour janus, avec photos produit réel + logo janus
            <br>
            Partie 2 texte catalogue p. 14
            
            <br>
            Bouton designer avec page designer
          </p>
        </div>
        <div class="second_image">
        </div>
      </div>
    </div>
    <!-- Mettre des cartes en markdown pour afficher les designers -->
    

    <!-------------------------------------------------------------------
    Notre savoir-faire
  -------------------------------------------------------------------->

    <div class="section_content">
      <div class="section_text">
        <h2> Notre savoir-faire</h2>
          
        <p>
          100% français + le BFUP : couleur, finition, ... + formation + BE
          <br>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
          rerum illum odit fugit assumenda rem dolores inventore iste
          reprehenderit maxime! Iusto.
        </p>
      </div>
        
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

    <!---------------------------------------------------
      Nos activités
  --------------------------------------------------->

    <h2>Activités</h2>
    <div class="section_content">
      <Card />
    </div>   
      
    <!---------------------------------------------------
      Nos engagements
  --------------------------------------------------->

  
    <div class="section_content">
      <div class="section_image">
        <g-image
          alt="SNCF Gare Auxerre"
          src="@/assets/img/angers_tram.jpg"
          center
          height="500px"
          width="800px"
        />
      </div>

      <div class="section_text">
        <h2> Nos engagements </h2>
        <p>
          Fournisseurs 100% français : vicat, transport, tous en général
          <br>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
          rerum illum odit fugit assumenda rem dolores inventore iste
          reprehenderit maxime! Iusto.
        </p>
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
  width : 65%;

  margin : 3rem;
  display : flex;
  flex-direction : row;
  gap : 2rem;
  
  text-align : justify;
}
  
.section_top p{
  width : 50%;
}
  
/*-------------------------------------------------------------------------
    Page content 
  -----------------------------------------------------------------------*/

.section_content {
  height : 100vh;

  display : flex;
  flex-direction : row;
  align-items : center;
}

.section_content h2 {
  padding : 0;
  margin : 0;
}

.section_image > img {
  object-fit: cover;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
}

.section_text {
  width : 30vw;
  padding : 2rem;
  text-align : justify;
/* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
  border-radius : 8px;
  background-color : rgba(245,235,224, 0.8);
}

.section p {

  padding :0;
  margin : 0;
  font-size : 1.1rem;
  text-align : left;
}

.section_left {
  display : flex;
  flex-direction : column;

  padding : 1rem;
}

.section_right {
  display : flex;
  flex-direction : column;

    padding : 1rem;
}

.second_image {
  background-color : red;
  height : 50px;
  width : 200px;
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