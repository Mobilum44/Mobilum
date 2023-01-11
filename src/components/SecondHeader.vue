<template>
  <!----------------------------
   Header classique : bandeau fixe
   Faire un menu burger pour les petits écrans 
   ----------------------------->

  <Header>
    <g-link to="/#/">
      <g-image
        class="logo_header"
        alt="Logo mobilum"
        src="@/assets/img/logos/Blue_logo.png"
        width="80"
      />
    </g-link>
    <div class="header_content">
      <div class="nav_header">
        <g-link class="nav__link" to="/Accueil/">Accueil</g-link>
        <g-link class="nav__link" to="/Entreprise/">Notre entreprise</g-link>
        <g-link class="nav__link" to="/Offre/">Notre offre</g-link>
        <g-link class="nav__link" to="/Contact/">Contact</g-link>
        <g-link class="nav__link" to="/Taches/">🔎</g-link>
      </div>
    </div>
  </Header>
</template>

<!--
<script>
export default {
  mounted() {
    // Regarde si on scroll sur la page et si c'est le cas
    // appelle la fonction "onScroll"
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      if (e.target.documentElement.scrollTop > 10) {
        document.getElementsByClassName("navbar")[0].classList.add("active");
      } else {
        document.getElementsByClassName("navbar")[0].classList.remove("active");
      }
    },
  },
};
</script>

-->

<style scoped>
header {
  margin-top: 0rem;
  /*background-color: rgb(26, 148, 157, 0.6);
  box-shadow: 0 5px 20px rgba(10, 4, 60, 0.3);*/
  z-index: 1;
}

.logo_header {
  position: fixed;
  margin-top: 3rem;
  margin-left: 2.5rem;
}

.header_content {
  position: absolute;
  margin-top: 3rem;
  margin-left: 55em;
}

.nav_header {
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-bottom: 1.5%;
  gap: 1rem;
  /*
  margin-top: 2rem;
  padding: 2rem;
  width: 75%;
  border-top: #1a949d 1px solid;

  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  justify-content: space-evenly;
  gap: 2rem;
   */
}
</style>
