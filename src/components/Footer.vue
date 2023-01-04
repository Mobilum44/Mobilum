<template>
  <footer>
    <div class="content_top">
      <div class="contact">
        <g-image
          alt="Logo mobilum"
          src="~/photos/logo_transparent.png"
          width="100"
        />
        <div>
          <p class="coordonnées">
            +33(0)2 XX XX XX XX<br />
            104 rue de l'Industrie<br />
            44430 Le Loroux-Bottereau
          </p>
          <Button theme="blue" to="/contact/">Nous contacter</Button>
        </div>
      </div>

      <div class="colonne_gauche">
        <div class="menu_footer">
          <g-link class="footer__nav" to="/Politiques/"
            >Politiques de confidentialité</g-link
          >
          <g-link class="footer__nav" to="/Mentions/">Mentions légales</g-link>
          <g-link class="footer__nav" to="/Plan/">Plan du site</g-link>
        </div>

        <!-- Penser à créer des boutons logos RS 
        <LogoRS />
        -->
      </div>
    </div>

    <div class="legal">
      <p class="coordonnées">
        &copy; Mobilum 2022. Tous droits réservés. Fait avec
        <em>♥</em> par Elise Hallet et Leo Olivier.
      </p>
    </div>
  </footer>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button
  },

  metaInfo: {
    title: "Mobilum"
  }
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

em {
  font-style: normal;
  color: #f56d91;
}

footer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: space-between;
  background-color: rgb(26, 148, 157, 0.6);
  font-size: 14px;
  font-style: normal;
  width: 100%;
}

/* 
--------------------------------------------------------------
Zone haute du footer
--------------------------------------------------------------
*/

.content_top {
  padding-top: 1em;
  margin-left: 7rem;
  margin-right: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
/* 
---------------------------------
Colonne de droite
---------------------------------
*/
.contact {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.coordonnées {
  text-decoration: none;
  color: white;
}

.contact a {
  text-decoration: none;
  color: white;
}

/* 
---------------------------------
Colonne de gauche
---------------------------------
*/

.colonne_gauche {
  display: flex;
  flex-direction: column;
  padding-top: 1em;
  justify-content: right;
  align-items: right;
}

/* 
------------------
Menu secondaire
------------------
*/
.menu_footer {
  display: flex;
  flex-direction: column;
}

.footer__nav {
  font-size: 14px;
  text-decoration: none;
  color: white;
}

.footer__nav:hover,
.footer__nav:focus {
  color: #1a949d;
  text-decoration: none;
}

.footer__nav.active {
  color: #1a949d;
  text-decoration: none;
}

/* 
------------------
Mettre réseaux sociaux
------------------
*/

/* 
--------------------------------------------------------------
Zone basse du footer
--------------------------------------------------------------
*/

.legal {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0rem;
  color: white;
}

/* ----------------------------------------------------
     Responsive qui marche bien
     ---------------------------------------------------- */

@media screen and (min-width: 24.375em) {
  .legal .legal__links {
    margin-left: auto;
  }
}

@media screen and (min-width: 40.375em) {
  .footer__nav > * {
    flex: 1;
  }
}
</style>
