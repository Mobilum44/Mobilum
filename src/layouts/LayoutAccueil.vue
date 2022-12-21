<template>
  <div class="LayoutAccueil">

        <slot name ="slot_image">
        </slot>
        <Header />
        <slot/>

    <Footer />
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "LayoutAccueil",
  components: {
    Header,
    Footer,
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

</style>
