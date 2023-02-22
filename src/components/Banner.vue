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


.banniere {
  height : 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-family: "Bebas Neue";
  margin-top : 6rem;
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
