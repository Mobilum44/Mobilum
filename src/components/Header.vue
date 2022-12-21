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


<style>
header {
  padding: 1rem;
  width: 100%;
  background-color: #aebdca;
  box-shadow: 0 5px 20px rgba(10, 4, 60, 0.43);
  z-index : 1;
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
  color: #1a949d;
  text-decoration: none;
  border-radius: 5px;
}

.nav__link.active {
  color: #1a949d;
  text-decoration: none;
  border-radius: 5px;
}


/*-----------------------------------------------------------------
    NE MARCHE PAS
  -----------------------------------------------------------------
  
.navbar {
  transition: all 0.4s;
  z-index: 1;
  background-color: #1a949d;
}
  
/* Change navbar styling on scroll
----------------------------------

.navbar.active {
  background: #fff;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
}
.navbar.active #logo1 {
  background-color: #1A949D;
  width: 3%;
}

.navbar.active .nav__link {
  text-decoration: none;
  color: #1A949D;
}

.navbar.active .nav__link:hover,
.navbar.active .nav__link.active {
  color: #1A949D;
  background-color: rgba(146, 236, 239, 0.1);
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
}

.navbar.active .navbar-brand {
  color: #555;
}

/* Change navbar styling on small viewports
__________________________________________________

@media (max-width: 991.98px) {
  .navbar {
    background: #fff;
  }

  .navbar .navbar-brand,
  .navbar .nav-link {
    color: #555;
  }
}

----------------------------------------------- */
</style>
