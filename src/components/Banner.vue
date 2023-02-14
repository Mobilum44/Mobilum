<template>
  <div class="Banner">
    <div class="banniere">
      <Button
        class="banner__button"
        theme="blue"
        to="/Contact/"
      >
        Nous contacter - changer le bouton (il est moche)
      </Button>
      <img
        class="banner__image"
        src="@/assets/img/frise-MU-transparente.png"
        alt="Mobiliers Mobilum filaires"
      >
    </div>
  </div>
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

.banniere {
    height : 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-family: "Bebas Neue";
}

.banner__button {
    z-index : 999;
    margin-bottom : 20vh;
}

.banner__image{
    position : absolute;
    width : 100%;
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
