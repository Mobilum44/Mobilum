<template>
  <!----------------------------
   Création d'un bouton pour la page "Votre projet"
   (sélection des MU par l'utilisateur)
   
   Problème : n'apparait pas
   ----------------------------->

  <div class="Float">
        <g-link class="nav__link" to="/Accueil/">Votre projet</g-link>
  </div>
</template>



<style scoped>
Float {
  position : fixed;
  margin : 50%;
  padding: 1rem;
  background-color: rgba(255,100,250, 0.50);
  box-shadow: 0 5px 20px rgba(10, 4, 60, 0.43);
  z-index : 1;
  display : flex;
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: flex-end;
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
