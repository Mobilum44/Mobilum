<template>
  <Layout>
    <h1>Notre entreprise</h1>

    <div class="texte_entreprise">
      <p>
        Ici, le texte qui présentera l'entreprise Mobilum (écrit par Christophe).
        </br>
        </br>
        Et peut-être une superbe carte réalisée en collaboration avec Olivier :)
        </br>
        </br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </p>
    </div>

    <div class="maps">

      <g-image class="fond" alt="photo ville" src="~/photos/VilleOlivier.JPG" />
      <div class="maps_text">
        <h3>Nos applications</h3>
        <div class="activity_order">
              <Activity class='Hook'/>
              <Activity class='ShopCenter'/>
              <Activity class='SNCF'/>
              <Activity class="Seaside"/>
              <Activity class="Parc"/>
        </div>
      </div>
    </div>
      
    <div class ="partenaires">
      Parler des designers, de nos prix, de nos partenaires principaux, ... ?
    </div>
      
    
    <div class="team">
      <!-- Ici, mettre un bouton qui envoie vers une nouvelle page-->
      <p> Il y aura dans cette zone le bouton qui parlera de l'équipe Mobilum. </br>
      Petit lien qui renverra sur la page "cachée" avec les illustrations de Yebe.
      </p>
      <Button class="accueil" to="/Equipe/"> Qui sommes-nous ? </Button>
    </div>
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

<style scoped>
.texte_entreprise {
  margin-top: 3rem;
}

/* map space */
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


/* team space */
.team {
  z-index : 100;
  margin-top: 3rem;
  display : flex;
  flex-direction :row;
  justify-content : space-between;
}

/* Boutton "team"*/
.accueil {
font-size : 12px;
color : #1A949D;
	background: rgb(26,148,157,0.3);
	border: 2px solid #1A949D;
	box-shadow: 5px 5px 0 #1A949D,
		-5px -5px 0 #1A949D,
		-5px 5px 0 #1A949D,
		5px -5px 0 #1A949D;
}

.accueil:hover {
  border:white;
  background: rgb(0,250,250,0);
	box-shadow: #1A949D, #1A949D;
  text-shadow:#1A949D, #1A949D;
}


</style>