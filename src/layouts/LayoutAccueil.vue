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
  padding-top: 1rem;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-bottom: 0;
}

/* ------------------------------------------------------------------------------------------

            RESPONSIVE TELEPHONES

--------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 600px) {
.contenu {
  margin-top: 3rem;
  padding : 0.5rem;
  display : flex;
  flex-direction : column;
  gap : 2rem;
}
}

</style>
