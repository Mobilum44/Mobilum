<!------------------------
Liste des activités de Mobilum sous forme de cartes
Sur la page entreprise, à l'endroit de la carte interactive

Pour le futur : Créer des cartes remplissables
  ------------------------>
<template>
  <div class="Activity">
    <div class="content">
      <h2>Activité</h2>
      <p>Petit texte pour expliquer ce qu'on fait</p>
    </div>
  </div>
</template>

<!----------------------------
    Trouver une solution pour que les cartes soient toutes différentes
    --------------------------------
    
<script>
export default {
  props: {
    theme: {
      type: String,
      default: "Activity",
      validator: val =>
        ["accueil", "equipe", "contact", "action"].indexOf(val) !== -1
    },

    to: {
      type: String,
      default: "/"
    }
  }
};
</script>
-->

<style scoped>
.Activity {
  z-index: 90;

  /* general */
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 100px;
  border: solid white;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.3);
}

.content {
  position: absolute;
  opacity: 0;
}

.content:hover {
  opacity: 50;

  /* general */
  height: 100%;
  width: 100%;
  border-radius: 100px;

  /* fond */
  background-image: url("http://image.noelshack.com/fichiers/2022/51/3/1671619469-2021-07-22-mobilum-rouen-27.jpg");
  background-size: cover;

  /* order */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* text */
  text-decoration: none;
  font-style: bold;
  color: blue;
  padding: 20px;
}

h2 {
  font-size: 14px;
  text-align: center;
  color: white;
  text-shadow: 0px 2px 2px #909f9d;
}

p {
  font-size: 12px;
}
</style>
