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
          src="~/photos/Blue_logo.png"
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


<!--------------------------------
    Citation
--------------------------------->

      <p class="quote">
        Une jolie citation inspirante
      </p>
<p>
Nous avons le plaisir de vous présenter nos réalisations et notre histoire sous un nouveau format. </br>
Le site est en cours de finalisation mais vous pouvez déjà accéder à l’ensemble de notre offre et nous contacter. </br>
Nous avons hâte de vous le présenter terminé et espérons qu’en attendant vous prendrez plaisir à découvrir ou redécouvrir notre collection !
  </p>

  
  <template #slot_bandeau>
    <div class="redirection">
        <h3>
          Parcourez notre site...
        </h3>

        <div class="button_box">
          <Button theme="pink_action" to="/Entreprise/">Notre entreprise</Button>
          <Button theme="pink_action" to="/Offre/">Nos offres</Button>
          <Button theme="pink_action" to="/Materiau/">Le BFUP</Button>
        </div>
    </div>
    </template>
    
    <template #slot_contact>
      
        <div class="contact_box">
          <p> Pour contacter nos différents services : </p>
          <div class="button_box">
              <Button theme="blue" to="/Contact/">Commerce</Button>
              <Button theme="blue" to="/Contact/">Achats</Button>
              <Button theme="blue" to="/Contact/">Comptabilité</Button>
          </div>
        </div>
    </template>
    
  </LayoutAccueil>
</template>


<script>
import LayoutAccueil from "@/layouts/LayoutAccueil.vue";
import Button from "@/components/Button.vue";

export default {
  components: {
    LayoutAccueil,
    Button,
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
  border-radius: 0 0 2000px 0 / 20% 50% ;
  box-shadow: rgba(26, 148, 157, 0.4) 0px 10px,
              rgba(26, 148, 157, 0.3) 0px 20px,
              rgba(26, 148, 157, 0.2) 0px 30px,
              rgba(26, 148, 157, 0.1) 0px 40px,
              rgba(26, 148, 157, 0.05) 0px 50px;
  width: 100%;
  height : 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content : center;
}

/* Section 2 : latest posts + content */
.quote {
  margin-top : 4rem;
  
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  font-size: 2rem;
  color: pink;
  letter-spacing: 2px;

  display: flex;
  justify-content: center;
}

/* Section 3 : action band */
h3 {
  margin-left : 10%;
  font-family: "Gill Sans", sans-serif;
  font-weight: 20;
  font-size: 20px;
  letter-spacing : 2px;
  color : white;
}

.redirection {
  background : url("http://image.noelshack.com/fichiers/2022/51/3/1671619469-2021-07-22-mobilum-rouen-27.jpg")
    center center no-repeat;
  filter: grayscale(80%);
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height : 20rem;
  padding-left: 15rem;
  padding-right: 15rem;
  padding-bottom : 2rem;
  display : flex;
  flex-direction : column;
  justify-content : flex-end;
  gap : 20%;
}

.button_box {
  display : flex;
  flex-direction : row;
  justify-content : center;
  align-items : flex-end;
}

.pink_action {
  margin-left : 3rem;
  margin-right : 3rem;
}

/* Section 4 : contact */
.contact_box {
  padding-top: 3rem;
  padding-left: 10rem;
  padding-right: 10rem;
  margin-bottom: 5rem;
}

.blue {
  margin-left : 1rem;
  margin-right : 1rem;
}

</style>
