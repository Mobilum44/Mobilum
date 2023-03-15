<template>
  <div class="layout">
    <Header />
    
    <slot
      name="slot_image"
      class="slot_image"
    >
      <section class="image_title">
      </section>
    </slot>
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

<style>
.image_title{
  height : 20vh;
  margin-top : 4rem;
}

.contenu {
  margin-top: 3rem;
  padding-left: 10rem;
  padding-right: 10rem;
  display : flex;
  flex-direction : column;
  gap : 2rem;
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
