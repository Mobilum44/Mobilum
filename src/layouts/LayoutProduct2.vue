<template>
  <div class="LayoutProduct">
    <Header />
    <slot name="slot_titre"></slot>
    <slot name="slot_bandeau"></slot>
    <section class="contenu">
      <slot />
    </section>
    <Banner />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";

export default {
  components: {
    Header,
    Footer,
    Banner,
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

<style scoped>
.contenu {
  padding-top: 1rem;
  padding-left: 10rem;
  padding-right: 10rem;
}
</style>
