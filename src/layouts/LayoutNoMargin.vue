<template>
  <div class="LayoutNoMargin">
    <Header />
    <section class="contenu-no-margin">
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

<style>
.contenu-no-margin {
  padding : 0rem;
}

</style>
