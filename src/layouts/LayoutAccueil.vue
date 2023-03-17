<template>
  <div class="layout">
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
  gap : 0;
}
</style>
