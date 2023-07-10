<template>
  <div class="LayoutNoMargin">
    <Header />
    <section class="contenu-no-margin">
      <slot />
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
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
.contenu-no-margin {
  padding : 0rem;
}

</style>
