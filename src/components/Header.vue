<template>
  <!----------------------------
   Faire un menu burger pour les petits écrans 
   ----------------------------->

  <Header>
    <!---------------->

    <div class="header_content">
      <g-image
        alt="Logo mobilum"
        src="~/photos/logo_transparent.png"
        width="80"
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


<style>
header {
  padding: 1rem;
  width: 100%;
  background-color: grey;
}

.header_content {
  margin-right: 3rem;
  margin-left: 3rem;
  display: flex;
}

.nav_header {
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  padding-bottom: 1.5%;
  gap: 1rem;
}

.nav__link {
  font-size: 16px;
  text-decoration: none;
  color: white;
}

.nav__link:hover,
.nav__link:focus {
  color: black;
  text-decoration: none;
  border-radius: 5px;
}

.nav__link.active {
  color: black;
  text-decoration: none;
  border-radius: 5px;
}
</style>