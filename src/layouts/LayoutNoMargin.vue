<template>
  <div class="LayoutNoMargin">
    <Header />
    <slot
      name="slot_image"
      class="slot_image"
    >
      <section class="image_title">
      </section>
    </slot>
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
.image_title{
  height : 20vh;
}

.contenu-no-margin {
  padding : 1rem;
}

</style>
