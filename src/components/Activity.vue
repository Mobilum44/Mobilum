    <!------------------------
Liste des activités de Mobilum sous forme de cartes
Sur la page entreprise, à l'endroit de la carte interactive
  ------------------------>
  <template>
    <div class="Activity">
        <div class="description">
          <h2>Article 1</h2>
          <p>Texte pertinent qui résume l'article</p>
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
    position : relative;
  height: 400px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  border: solid white;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
  background-image: url("https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80");
  background-size: cover;

  @include media {
    height: 500px;
  }
}

.description {
      text-decoration: none;
  border: solid thin white;
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  padding: 40px;
  padding-left: 20px;
}

.description:hover {
  text-decoration: none;
  background-color: white;
}

h2 {
  font-size: 20px;
  color: black;
  text-align: center;
  font-weight: 700;
  color: #181818;
  text-shadow: 0px 2px 2px #909f9d;
  margin: 0;
}


</style>