<template>
  <div class="LayoutProduct">
    <Header />
    <slot name="slot_titre"></slot>
    <slot name="slot_bandeau"></slot>
    <section class="contenu">
      <slot />
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "LayoutProduct",
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
}
</style>
