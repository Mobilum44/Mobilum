<template>

<!--
- Notre engagement ()
-->
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
        </br>
        </br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </p>
    </div>
    
    <div class="section">      
      <div class="section_content">
        <div class="section_image">
          <g-image
            alt="SNCF Gare Auxerre"
            src="@/assets/img/Galets.jpg"
            center
            height="500px"
            width="800px"
          />
        </div>
        
        <div class="section_text">
          <h2> La griffe "Mobilum"</h2>
          <p>
            La marque et le design : designers et distinctions
            </br>
            </br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
            rerum illum odit fugit assumenda rem dolores inventore iste
            reprehenderit maxime! Iusto.
            
            </br>
            Bouton designer avec page designer
          </p>
        </div>
      </div>
        <!-- Mettre des cartes en markdown pour afficher les designers -->
    </div>
    
    <div class="section">
      
      <div class="section_content">
          
        <div class="section_text">
          <h2> Notre savoir-faire</h2>
          
          <p>
          100% français + le BFUP : couleur, finition, ... + formation + BE
          </br>
          </br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
          rerum illum odit fugit assumenda rem dolores inventore iste
          reprehenderit maxime! Iusto.
          </p>
        </div>
        
        <div class="section_image">
          <g-image
            alt="SNCF Gare Auxerre"
            src="@/assets/img/travail_usine.jpg"
            center
            height="500px"
            width="800px"
          />
        </div>
        
        
      </div>
    </div>
    
    <div class="section_map">
        <h2>Nos activités</h2>
      
      <p> SOit sous forme de carte, soit sous forme de liste</p>
    <!-- 
        <div class="maps">
        <g-image class="fond" alt="photo ville" src="@/assets/img/VilleOlivier.JPG" />
        <div class="maps_text">
          <div class="activity_order">
              <Activity class='Hook'/>
              <Activity class='ShopCenter'/>
              <Activity class='SNCF'/>
              <Activity class="Seaside"/>
              <Activity class="Parc"/>
          </div>
        </div>
      </div>
      -->
    </div>  
      
    <div class="section">
      
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
          </br>
          </br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
          rerum illum odit fugit assumenda rem dolores inventore iste
          reprehenderit maxime! Iusto.
          </p>
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

import Activity from "@/components/Activity.vue";
import Button from "@/components/Button.vue";

export default {
  
    components: {
        Activity,
        Button
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
    
.section {
  
  display : flex;
  justify-content : flex-end;
  flex-direction : column;
  
    margin-top : 4rem;
  padding-bottom : 3rem;
  margin-bottom : 4rem;
}

.section h2 {
  padding : 0;
  margin : 0;
}

.section_image {
  flex : 80%;
  height : 500px;
  width : 800px;

}

.section_image > img {
  fit: cover;

}

.section_content {
  display : flex;
  flex-direction : row;
  justify-content : flex-end;
  align-items : flex-end;
}

.section_text {
  position : absolute;
  width : 30vw;
  padding : 2rem 1rem 2rem 3rem;
  margin: 3rem  0 1rem 6rem;
  margin-left : 0vw;
  
/* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
  border-radius : 8px;
  background-color : rgba(245,235,224, 0.8);
}

.section p {
  padding :0 2rem 0 2rem;
  margin : 0;
  font-size : 1.1rem;
  text-align : left;
}

/* map space */

.section_map {
  border : solid black 1px;
  padding : 3rem;
}
.maps { 
  width : 100%;/* Faire en sorte que cette zone fasse la taille de l'écran */
  height : 100vh;
  display: flex;
  flex-wrap: wrap;
  margin-top :3rem;
  margin-bottom : 3rem;
}

.fond {
  /* Mettre cette image en fond, avec du texte au dessus */
  width : 80%;
  position : absolute;
  z-index: 1;
}

.maps_text {
  display: flex;
  width : 100%;
  flex-direction: column;
  z-index: 100;
}

.activity_order {
  padding-left : 30px;
  height : 100%;
  width : 100%;
  display: grid;
  grid-template-columns: 25% [col-start] 25% [col-start] 25% [col-start] 25% [col-start];
  grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end row3-start] 15% [rox3-end row4-start] 1% [rox4-end];
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.ShopCenter {
  grid-column-start: 3;
  grid-column-end: two;
  grid-row-start: row2-start;
  grid-row-end: 2;
}

.Hook {
  grid-column-start: 4;
  grid-column-end: one;
  grid-row-start: row3-start;
  grid-row-end: 2;
}

.SNCF {
  grid-column-start: 1;
  grid-column-end: one;
  grid-row-start: row3-start;
  grid-row-end: 3;
}

.Seaside {
  grid-column-start: 3;
  grid-column-end: one;
  grid-row-start: row4-start;
  grid-row-end: 4;
}

.Parc {
  grid-column-start: 2;
  grid-column-end: two;
  grid-row-start: row3-start;
  grid-row-end: 3;
}

/* processus space */

.processus {
  padding : 1rem;
  display : flex;
  flex-direction : row;
  justify-content : space-evenly;;
}

.rectangle {
  height : 200px;
  width : 200px;
  background :#1A949D;
  border-radius: 50%;
  
  display : flex;
  align-items : center;
  justify-content: center;
  color : white;
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