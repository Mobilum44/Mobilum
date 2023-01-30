<template>
  <div class="LayoutAccueil">
    <Header />
    <slot
      name="slot_image"
      class="slot_image"
    >
    </slot>

    <section class="contenu">
      <slot />
    </section>

    <slot name="slot_bandeau">
    </slot>
    <slot name="slot_contact">
    </slot>

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
.contenu {
  padding-top: 1rem;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-bottom: 0;
}
</style>
