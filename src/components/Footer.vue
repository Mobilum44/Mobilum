<template>
  <footer>
    <div class="contact_zone">
      <Button
        theme="white"
        to="/Contact/"
      >
        Nous contacter
      </Button>
    </div>

    <div class="content_top">
      <div class="contact">
        <g-image
          class="Logo_mobilum"
          alt="Logo mobilum"
          src="@/assets/img/logos/Mobilum_no_margin.png"
          width="60"
        />
        <div>
          <p class="coordonnées">
            +33(0)2 51 72 90 22<br />
            contact@mobilum-france.com<br />
            <br />
            104 rue de l'Industrie<br />
            44430 Le Loroux-Bottereau
          </p>
        </div>
      </div>

      <div class="colonne_gauche">
        <div class="menu_footer">
          <g-link
            class="footer__nav"
            to="/Politiques/"
          >
            Politiques de confidentialité
          </g-link>
          <g-link
            class="footer__nav"
            to="/Mentions/"
          >
            Mentions légales
          </g-link>
          <g-link
            class="footer__nav"
            to="/Plan/"
          >
            Plan du site
          </g-link>
        </div>
        <Button
          theme="blue"
          to="/contact/"
        >
          Réseaux sociaux
        </Button>
        <!-- Penser à créer des boutons logos RS <LogoRS /> -->
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
  z-index: 200;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: rgba(26, 148, 157, 1);
  font-size: 14px;
  font-style: normal;
  width: 100%;
}

/*
--------------------------------------------------------------
Bandeau photo :
- Recentrer légèrement sur les galets (supprimer marge en bas)
--------------------------------------------------------------
*/

.contact_zone {
  background: url("../../src/assets/img/Galets.jpg") center center no-repeat;
  filter: grayscale(80%);
  background-size: cover;
  background-attachment: fixed;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Bebas Neue";
}

/*
--------------------------------------------------------------
Zone haute du footer
--------------------------------------------------------------
*/

.content_top {
  border-top: #fefcf3 solid 1px;
  padding-top: 2rem;
  padding-left: 7rem;
  padding-right: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
}
/*
---------------------------------
Colonne de droite
---------------------------------
*/
.Logo_mobilum {
  margin-right: 1rem;
}
.contact {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
}

.coordonnées {
  text-decoration: none;
  margin: 0;
  color: #fefcf3;
}

.contact a {
  text-decoration: none;
  color: #fefcf3;
}

/*
------------------
Mettre réseaux sociaux
------------------
*/

.blue {
  margin-top: 1rem;
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
  color: #fefcf3;
}

.footer__nav:hover,
.footer__nav:focus {
  color: black;
  text-decoration: none;
}

.footer__nav.active {
  color: black;
  text-decoration: none;
}

/*
--------------------------------------------------------------
Zone basse du footer
--------------------------------------------------------------
*/

.legal {
  border-top: #fefcf3 solid 1px;
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
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
