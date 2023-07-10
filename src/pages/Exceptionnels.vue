<template>
  <Layout>
    <div class="sub__section">
      <Button
        theme="bordered"
        to="/Offre/"  
      >
        Retour à l'offre
      </Button>

      <h1> Nos dossiers d'exception </h1>
    </div>
    <section class="sub__section">
      <div class="chapeau">
        <p>Nos projets sont trop exceptionnels !</p>
      </div>
    </section>

    <p class="referencement">
      Plongez dans notre portfolio de projets en BFUP d'exception, en termes de taille, de
      prestige et d'exigence technique.<br /><br />
      <!-- De la participation à des projets monumentaux pour des espaces emblématiques, aux tables de pique-nique
impressionnantes conçues pour accueillir de grandes foules, notre expertise en mobilier urbain en BFUP garantit des
réalisations exceptionnelles qui inspirent et marquent les esprits. <br /><br /> -->
      Chaque projet est réalisé sur mesure pour répondre aux demandes spécifiques de chaque site et s'intégrer
      harmonieusement dans son environnement. Nous sommes fiers de contribuer à la création de lieux publics uniques,
      alliant fonctionnalité, durabilité et design. <br /><br />
      Nous nous engageons à continuer à innover et à repousser les limites pour façonner les espaces publics de demain,
      en créant des projets de mobiliers urbains en BFUP qui captivent les regards et améliorent la vie quotidienne des
      citadins.
    </p>
  </Layout>
</template>



<script>
import Layout from "@/layouts/LayoutAccueil.vue";


export default {
  components: {
    Layout,
  },

  metaInfo: {
    title: "Grands comptes et sur-mesure"
  }
};
</script>

<style scoped>
h2 {
  border : 0;
}

.chapeau {
  width : 70%;
}
.sub__section__content {
  gap : 1rem;
  margin-bottom : 1rem;
}
</style>
