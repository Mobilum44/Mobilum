<template>
  <div
    class="LogoFloat"
  >
    <g-link to="/#/">
      <g-image
        class="logo_header"
        alt="Logo mobilum"
        src="@/assets/img/logos/Blue_logo.png"
      />
    </g-link>
  </div>
</template>

<script>
export default {
  mounted() {
        this.$nextTick(() => {
            window.addEventListener("scroll", () => {
                let logo = document.getElementsByClassName("logo_header")[0];
                if (document.documentElement.scrollTop >= 25) {
                    logo.classList.add("logo_header--mini");
                } else {
                    logo.classList.remove("logo_header--mini");
                }
            })
        });
    }
}
</script>


<style scoped>
.logo_header {
  position: fixed;
  margin-top: -2rem;
  margin-left: 2.5rem;
  z-index: 1;
  width : 80px;
  transform: translate(0%, 0) scaleX(1);
  transition: transform 0.5s ease-in;
}

.logo_header--mini {
  margin-top: -1rem;
width: 60px;
  transform: translate(0%, 0) scaleX(1);
  transition: transform 0.5s ease-in;
}
</style>