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

.contenu {
  padding-left: 10rem;
  padding-right: 10rem;
  padding-bottom: 5rem;
}

</style>
