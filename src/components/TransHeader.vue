<template>
  <!----------------------------
   Header test : flottant transparent
   Faire un menu burger pour les petits écrans 
   ----------------------------->

  <Header>
    <g-link to="/#/"><LogoFloat /></g-link>

    <div class="nav_header">
      <g-link class="nav__link" to="/Accueil/">Accueil</g-link>
      <g-link class="nav__link" to="/Entreprise/">Notre entreprise</g-link>
      <g-link class="nav__link" to="/Materiau/">Matériau</g-link>
      <g-link class="nav__link" to="/Offre/">Notre offre</g-link>
      <g-link class="nav__link" to="/Contact/">Contact</g-link>
      <g-link class="nav__link" to="/Taches/">🔎</g-link>
    </div>
  </Header>
</template>

<script>
import LogoFloat from "@/components/LogoFloat.vue";

export default {
  components: {
    LogoFloat
  }
};
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  z-index: 200;
  margin-left: 3%;
}

.nav_header {
  margin-left: 59%;
  width: 75vh;
  height: 50px;
  padding: 1rem;
  padding-top: 3rem;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;

  background-color: rgba(26, 148, 157, 0.5);
  box-shadow: 0 5px 20px rgba(10, 4, 60, 0.43);
  border-radius: 0 0 10px 10px;
}

.nav__link {
  font-size: 16px;
  text-decoration: none;
  color: white;
}

.nav__link:hover,
.nav__link:focus {
  color: #1a949d;
  text-decoration: none;
  border-radius: 5px;
}

.nav__link.active {
  color: #1a949d;
  text-decoration: none;
  border-radius: 5px;
}
</style>
