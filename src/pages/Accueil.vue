<template>
  <LayoutAccueil>
    
<!-----------------------------------------------
Partie en attente de développement complet du site
-------------------------------------------------->

    <template #slot_image>
      <section class="bandeau">
        
        <g-image
          class='logo'
          alt="Logo mobilum"
          src="@/assets/img/logos/Blue_logo.png"
          width="200"
          center
        />
        
        <h1> Notre site internet fait peau neuve ! </h1>
        
      </section>
    </template>
    
<!--------------------------------
  PARTIE A DEVELOPPER PLUS TARD
  Mise en page : Cartes RS avec texte en dessous, 3 directement affichés
--------------------------------->
<p>
Nous avons le plaisir de vous présenter nos réalisations et notre histoire sous un nouveau format. </br>
Le site est en cours de finalisation mais vous pouvez déjà accéder à l’ensemble de notre offre et nous contacter. </br>
Nous avons hâte de vous le présenter terminé et espérons qu’en attendant vous prendrez plaisir à découvrir ou redécouvrir notre collection !
</p>

<!--------------------------------
    Citation
--------------------------------->

      <p class="quote">
        Une jolie citation inspirante
      </p>
      
<!--------------------------------
    Explorer
--------------------------------->    
      
<div class="redirection">
<h3> Pour commencer à explorer notre site ... </h3>
<Card/>
</div>
  
  <template #slot_bandeau>
  </template>
    
  <template #slot_contact>
  </template>
    
  </LayoutAccueil>
</template>


<script>
import LayoutAccueil from "@/layouts/LayoutAccueil.vue";
import Button from "@/components/Button.vue";
import Card from "@/components/Cards.vue";


export default {
  components: {
    LayoutAccueil,
    Button,
    Card,
  },

  metaInfo: {
    title: "Accueil"
  }
};
</script>

<style scoped>

/* General */
h1 {
  color: #1A949D;
}

p {
  text-align : center;
}

/* Section 1 : Logo /Image */

.bandeau {
  background: url("https://img.freepik.com/free-vector/vintage-ornamental-flowers-background_52683-28040.jpg?w=996&t=st=1672663472~exp=1672664072~hmac=4d906a8779a60b5e116fffa5d1d0d4cfaa3bf913053931d2f470852a7e3149a6")
    center center no-repeat;
  background-size: cover;
  width: 100%;
  height : 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content : center;
}

/* Section 2 : latest posts + content */
.quote {
  margin-top : 2rem;
  
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  font-size: 2rem;
  color: darkblue;
  letter-spacing: 2px;

  display: flex;
  justify-content: center;
}

/* section 3 : Activity cards */
.redirection {
  margin-top : 2rem;
  margin-bottom : 0rem; /* margin bot en 2rem, sans explication */
}

/* Section 4 : action band */




</style>
