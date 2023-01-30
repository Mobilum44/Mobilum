<template>
  <Empty class="Empty">
    <div class="logo_bouton">
      <g-image
        alt="Logo mobilum"
        src="@/assets/img/logos/logo_transparent.png"
      />
      <Button
        theme="slide"
        to="/Accueil/"
      >
        Entrer
      </Button>
    </div>
  </Empty>
</template>

<script>
import Button from "@/components/Button.vue";
import Empty from "@/layouts/Empty.vue";

export default {
  components: {
    Button,
    Empty
  },

  metaInfo: {
    title: "Mobilum"
  }
};
</script>

<style scoped>
img {
  width: 60%;
}

.Empty {
  background: url("http://image.noelshack.com/fichiers/2022/51/3/1671619469-2021-07-22-mobilum-rouen-27.jpg")
    center center no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo_bouton {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.slide {
  margin-top: 2rem;
}
</style>
