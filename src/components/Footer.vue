<template>
  <footer>
    <!-- Mobiliers plus espacés, lignes entre les deux, moins de mobiliers -->
    <div class="content_top">
      <div class="column__left">
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

      <div class="column__right">
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

        <div class="content__RS">
          <g-link to="/Contact/">
            <g-image
              class="logo__RS"
              alt="Logo mail"
              src="@/assets/img/logos/mail.png"
              width="30"
            />
          </g-link>

          <g-link to="https://www.facebook.com/people/MOBILUM/100063454155980/">
            <g-image
              class="logo__RS"
              alt="Logo facebook"
              src="@/assets/img/logos/facebook.png"
              width="30"
            />
          </g-link>

          <g-link to="https://www.instagram.com/mobilum_france/?hl=fr">
            <g-image
              class="logo__RS"
              alt="Logo instagram"
              src="@/assets/img/logos/instagram.png"
              width="30"
            />
          </g-link>

          <g-link to="https://www.linkedin.com/company/mobilum-france/">
            <g-image
              class="logo__RS"
              alt="Logo linkedin"
              src="@/assets/img/logos/linkedin.png"
              width="30"
            />
          </g-link>
        </div>
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

export default {
  components: {
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


.Logo_mobilum {
  margin-right: 1rem;
}


/*
---------------------------------
Colonne de gauche
---------------------------------
*/


.column__left {
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

.column__left a {
  text-decoration: none;
  color: #fefcf3;
}

/*
---------------------------------
Colonne de droite
---------------------------------
*/

.column__right {
  display: flex;
  flex-direction: column;
  padding-top: 1em;
  justify-content: right;
  align-items: right;
}

.content__RS {
  display : flex;
  flex-direction : row;
  gap : 1rem;
  margin-top : 1rem;
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
