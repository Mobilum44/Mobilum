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
        <g-link
          class="nav__link"
          to="/Accueil/"
        >
          Accueil
        </g-link>
        <g-link
          class="nav__link"
          to="/Entreprise/"
        >
          L'entreprise
        </g-link>
        <g-link
          class="nav__link"
          to="/Offre/"
        >
          La collection
        </g-link>
        <g-link
          class="nav__link"
          to="/Contact/"
        >
          Contact
        </g-link>
        <g-link
          class="nav__link"
          to="/Taches/"
        >
          🔎
        </g-link>
      </div>
    </div>
  </Header>
</template>

<script>
export default {
  mounted() {
        this.$nextTick(() => {
            window.addEventListener("scroll", () => {
                let header = document.getElementsByClassName("header_content")[0];
                let nav = document.getElementsByClassName("nav_header")[0];
                if (document.documentElement.scrollTop >= 25) {
                    header.classList.add("header_content--mini");
                    nav.classList.add("nav_header--mini");
                } else {
                    header.classList.remove("header_content--mini");
                    nav.classList.remove("nav_header--mini");
                }
            })
        });
    }
}
</script>

<style scoped>
header {
  top : 0;
  width : 100%;
  background-color : #fefcf3;
  position : fixed;
  margin-top: 0rem;
  /*background-color: rgb(26, 148, 157, 0.6);
  box-shadow: 0 5px 20px rgba(10, 4, 60, 0.3);*/
  z-index: 999;
}

.logo_header {
  position: fixed;
  margin-top: 1rem;
  margin-left: 2.5rem;
  z-index: 1;
}

.header_content {
  margin-top: 3rem;
  padding-right: 3rem;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}

.header_content--mini {
  transition: all 0.3s ease-in-out;
  margin-top: 1rem;
  border-bottom : solid black 1px;
}

.nav_header {
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-bottom: 1.5%;
  gap: 1rem;
}

.nav_header--mini {
  padding : 0;
}

.nav__link {
  font-family: "Bebas Neue";
  font-size: 1.1rem;
  letter-spacing: 2px;
  text-decoration: none;
  color: black;
  margin: 1rem;
  position: relative;
}
.nav__link::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #1a949d;
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.nav__link:hover::before {
  transform: translate(-50%, 0) scaleX(1);
}

.nav__link:focus {
  color: #1a949d;
}

.nav__link.active {
  color: #1a949d;
  text-decoration: none;
  border-radius: 5px;
}

</style>
