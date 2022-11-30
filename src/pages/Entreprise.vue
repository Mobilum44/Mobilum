<template>
  <Layout>
    <h1>Notre entreprise</h1>

    <div class="texte_entreprise">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </p>
    </div>

    <div class="maps">
      <g-image class="fond" src="~/photos/carte_illustration.jpg" width="700" />
      <div class="maps_text">
        <h3>Nos applications</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae,
          consequuntur rerum illum odit fugit assumenda rem dolores inventore
          iste reprehenderit maxime! Iusto.
        </p>
      </div>
    </div>

    <div class="team">
      <!-- Ici, mettre un bouton qui envoie vers une nouvelle page-->
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Notre entreprise",
  },
};
</script>

<style scoped>
.texte_entreprise {
  border: blue solid;
  margin-top: 3rem;
}

.maps {
  height: 45em; /* Faire en sorte que cette zone fasse la taille de l'écran */
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fond {
  /* Mettre cette image en fond, avec du texte au dessus */
  position: absolute;
  z-index: 1;
}

.maps_text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 100;
}

.team {
  margin-top: 3rem;
  gap: 100px;
}
</style>