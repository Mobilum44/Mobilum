<template>
  <!----------------------------
   Header test : flottant transparent
   Faire un menu burger pour les petits écrans 
   ----------------------------->

  <Header>
    <div>
      <g-link class="logo_click" to="/#/"><LogoFloat /></g-link>
    </div>
    <div class="global_header">
      <g-image
        alt="Cover image"
        src="../photos/logo_transparent.png"
        width="100"
      />

      <div class="nav_header">
        <g-link class="nav__link" to="/Accueil/">Accueil</g-link>
        <g-link class="nav__link" to="/Entreprise/">Notre entreprise</g-link>
        <g-link class="nav__link" to="/Materiau/">Matériau</g-link>
        <g-link class="nav__link" to="/Offre/">Notre offre</g-link>
        <g-link class="nav__link" to="/Contact/">Contact</g-link>
        <g-link class="nav__link" to="/Taches/">🔎</g-link>
      </div>
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
  width: 100%;
  z-index: 200;
}

.logo_click {
  position: fixed;
  z-index: 200;
}

.global_header {
  background-color: rgba(26, 148, 157, 0.5);
  box-shadow: 0 5px 20px rgba(10, 4, 60, 0.43);
  border-radius: 0 0 10px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav_header {
  margin-top: 2rem;
  padding: 2rem;
  width: 75%;
  border-top: #1a949d 1px solid;

  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  justify-content: space-evenly;
  gap: 2rem;
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
