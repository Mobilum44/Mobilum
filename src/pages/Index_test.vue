<template>
  <Empty class="Empty">
    <div class="logo_bouton">
      <g-image alt="Logo mobilum" src="~/photos/logo_transparent.png" />
      <Button class="accueil" to="/Accueil/"> "Entrer" </Button>
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
.logo_bouton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  border: blue dashed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
