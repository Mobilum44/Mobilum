<template>
  <div class="layout">
    <Header />
    <section class="contenu">
      <slot />
    </section>
    </Float>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Float from "@/components/Float.vue";

export default {
  components: {
    Header,
    Footer,
    Float
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1 {
  /*margin-top: 0rem;
  margin-left: -7rem;
  position: fixed;
  font-variant: small-caps;

  writing-mode: vertical-rl;
  text-orientation: upright;

  */
  letter-spacing: 2px;
  text-align: left;
  font-variation-settings: "wdth" 75;
  font-family: "Gill Sans", sans-serif;
  font-weight: 100;
  font-size: 50px;
  z-index: 100;
}

p {
  color: black;
}

.contenu {
  padding-top: 3rem;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-bottom: 5rem;
}
</style>
