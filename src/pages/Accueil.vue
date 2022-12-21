<template>
  <LayoutAccueil>
    <template #slot_image>
      <section class="bandeau">
        <g-image
          alt="Logo mobilum"
          src="~/photos/logo_transparent.png"
          width="200"
          center
        />
        <h1>Bienvenue sur notre nouveau site internet</h1>
        <!-----------------------------------------------
Partie en attente de développement complet du site
-------------------------------------------------->
      </section>
    </template>
    <!--------------------------------
  PARTIE A DEVELOPPER PLUS TARD
  Mise en page : Cartes avec texte en dessous, 3 directement affichés
--------------------------------->
      
      <p class="quote">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>

    <div class="redirection">
        <p>
          Décrouvrez toutes nos offres
        </p>

        <div class="button_box">
          <Button theme="action" to="/Entreprise/">Notre entreprise</Button>
          <Button theme="action" to="/Offre/">Nos offres</Button>
          <Button theme="action" to="/Matériau/">Le BFUP</Button>
        </div>
    </div>
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
body {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1 {
  /*margin-left: -7rem;
  position: fixed;
  font-variant: small-caps;

  writing-mode: vertical-rl;
  text-orientation: upright;

  */
  letter-spacing: 2px;
  text-align: left;
  font-variation-settings: "wdth" 75;
  font-family: "Gill Sans", sans-serif;
  font-weight: 100;
  font-size: 50px;
  z-index: 100;
}

p {
  color: black;
}

h1 {
  color: white;
}

.bandeau {
  background: url("http://image.noelshack.com/fichiers/2022/51/3/1671619469-2021-07-22-mobilum-rouen-27.jpg")
    center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height : 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content : center;
}

.quote {
  color: pink;
  font-size: 2rem;
  letter-spacing: 2px;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  display: flex;
  justify-content: center;
}

.redirection {
  background: url("http://image.noelshack.com/fichiers/2022/51/3/1671614690-p1030599.jpg")
    center center no-repeat;
  filter: saturate(-100) brightness(10);
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
}

.button_box {
  display : flex;
  flex-direction : row;
  justify-content : space-between;
}

</style>
