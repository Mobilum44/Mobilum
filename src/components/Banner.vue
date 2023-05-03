<template>
  <div class="Banner">
    <div class="banniere">
      <Button
        class="banner__button"
        theme="bordered"
        to="/Contact/"
      >
        Nous contacter
      </Button>
      <img
        class="banner__image"
        src="@/assets/img/nouvelle-frise-v2.png"
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-family: "Bebas Neue";
  margin-top : 3rem;
}

.banner__button {
    z-index : 999;
    margin-bottom : 1rem;
}

.banner__image{
    position : relative;
    width : 100%;
}

/* ----------------------------------------------------
     Responsive qui marche bien
     ---------------------------------------------------- */
@media only screen and (max-width: 600px) {

.banner__button {
    z-index : 999;
    margin-bottom : 1rem;
}

}
</style>
