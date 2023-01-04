<template>
  <div class="LayoutAccueil">
    <Header />
    <slot name="slot_image"> </slot>

    <section class="contenu">
      <slot />
    </section>

    <slot name="slot_bandeau"> </slot>
    <slot name="slot_contact"> </slot>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/SecondHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "LayoutAccueil",
  components: {
    Header,
    Footer
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
body {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1 {
  /*margin-left: -7rem;
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
  padding-top: 1rem;
  padding-left: 10rem;
  padding-right: 10rem;
  margin-bottom: 5rem;
}
</style>
