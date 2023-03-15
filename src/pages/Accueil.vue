<template>
  <LayoutAccueil>
    <!-----------------------------------------------
Partie en attente de développement complet du site
-------------------------------------------------->

    <template #slot_image>
      <section class="bandeau">
        <div class="bandeau_content">
          <g-image
            class="logo"
            alt="Logo mobilum"
            src="@/assets/img/logos/Blue_logo.png"
            width="200"
            center
          />
        
          <h1> Notre site internet fait peau neuve ! </h1>
        </div>
        <p>
          Nous avons le plaisir de vous présenter nos réalisations et notre histoire sous un nouveau format. <br>
          Le site est en cours de finalisation mais vous pouvez déjà accéder à l’ensemble de notre offre et nous contacter. <br>
          Nous avons hâte de vous le présenter terminé et espérons qu’en attendant vous prendrez plaisir à découvrir ou redécouvrir notre collection !
        </p>
      </section>
    </template>
    
    <!--------------------------------
  PARTIE A DEVELOPPER PLUS TARD
  Mise en page : Cartes RS avec texte en dessous, 3 directement affichés
--------------------------------->

    <!--------------------------------
    Citation - Supprimée pour le moment.
--------------------------------->
    <!--
        <div class="section">
      <p class="quote">
        <span>Une&thinsp;</span>
        <span>jolie&thinsp;</span>
        <span>citation&thinsp;</span>
        <span>inspirante&thinsp; </span>
        <span>avec&thinsp; </span>
        <span>des &thinsp;</span>
        <span>mots&thinsp; </span>
        <span>ajoutés&thinsp; </span>
        <span>pour&thinsp; </span>
        <span>qu'elle&thinsp; </span>
        <span>soit&thinsp; </span>
        <span>plus&thinsp; </span>
        <span>longue &thinsp;</span>
        <span>!&thinsp; </span>
        <span>!&thinsp; </span>
        <span>!&thinsp; </span>
      </p>
    </div>
      --> 
    <!--------------------------------
    Explorer
--------------------------------->    

    <template #slot_bandeau>
      <div class="redirection"> 
        <h3> En quelques mots, Mobilum c'est ... </h3>
        <SlideRedirection />
      </div>
    </template>
    
    <template #slot_contact>
    </template>
    </div>
  </LayoutAccueil>
</template>


<script>
import LayoutAccueil from "@/layouts/LayoutAccueil.vue";
import SlideRedirection from "@/components/SlideRedirection.vue";


export default {
  components: {
    LayoutAccueil,
    SlideRedirection,
  },

  metaInfo: {
    title: "Accueil"
  }
};
</script>

<style scoped>


/* General */
h1 {
  width : 100%;
  text-transform: none;
  font-weight: 200;
  border : none;
  border-bottom : 1px solid;
  color: #1A949D;
  margin : 2rem;
  padding : 1rem;
}

h3 {
  margin-bottom : 0;
  font-size : 1.5rem;
}

p {
  text-align : center;
}

/* Section 1 : Logo /Image */

.logo {
  border-radius : 30px;
background-color: #fefcf3;
  box-shadow: 0px 0px 50px rgba(254,252,243, 1),
    0 0 75px rgba(254,252,243, 1), 0 0 150px rgba(254,252,243);
}

.bandeau {
  /*background: url("../../src/assets/img/fond_transparent.png")
    center center no-repeat;*/
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content : center;
}

.bandeau_content {
  padding-bottom : 4vh;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content : center;
}

/* Section 2 : latest posts + content */


.section {
display : flex;
flex-direction : column;
align-items : center;
justify-content : center;
}


/*-------------------------------------------------------------------
    Citation animée
  ------------------------------------------------------------------*/
  
.quote {
  padding : 4vh;
  
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  font-size: 2rem;
  color: #1A949D;
  
  max-width: 100vh;
  
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}

span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

span:nth-child(1) {
  animation: fade-in 1.5s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 1.5s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 1.5s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 1.5s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 1.5s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 1.5s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 1.5s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
  animation: fade-in 1.5s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
  animation: fade-in 1.5s 1.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
  animation: fade-in 1.5s 2.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(11) {
  animation: fade-in 1.5s 2.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(12) {
  animation: fade-in 1.5s 2.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(13) {
  animation: fade-in 1.5s 2.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(14) {
  animation: fade-in 1.5s 2.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(15) {
  animation: fade-in 1.5s 3.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(16) {
  animation: fade-in 1.5s 3.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(17) {
  animation: fade-in 1.5s 3.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(18) {
  animation: fade-in 1.5s 3.7 forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(19) {
  animation: fade-in 1.5s 3.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(20) {
  animation: fade-in 1.5s 4.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(21) {
  animation: fade-in 1.5s 4.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(22) {
  animation: fade-in 1.5s 4.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(23) {
  animation: fade-in 1.5s 4.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(24) {
  animation: fade-in 1.5s 4.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(25) {
  animation: fade-in 1.5s 5.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(26) {
  animation: fade-in 1.5s 5.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(27) {
  animation: fade-in 1.5s 5.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(28) {
  animation: fade-in 1.5s 5.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(29) {
  animation: fade-in 1.5s 5.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}


/* section 3 : Activity cards */
.redirection h3{
  margin-left : 20rem;
}

@media only screen and (max-width: 600px) {
.bandeau p {
  margin-top: 0rem;
  padding : 0.5rem;
  display : flex;
  flex-direction : column;
  gap : 2rem;
}

.redirection {
  margin-left : 0rem;
  display : flex;
  flex-direction: column;
  align-items: center;
}

  .redirection h3{
  margin-left : 0rem;
}


}

/* Section 4 : action band */




</style>
