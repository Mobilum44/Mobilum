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
  display : flex;
  flex-direction : column;
  align-items : center;
  margin : 0;
  padding : 0;
}


</style>
