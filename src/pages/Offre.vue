<template>
  <!--mobilier urbain, Ammenagement(hook + signaletique), grands comptes, Nos réalisations sur mesure
  Supprimer sav -->
  <Layout>
    <h1>Notre offre</h1>
    <div class="body_offer">
      <div class="collection">
        <g-link
          class="items_styling"
          :to="edge.node.path"
          v-for="edge in $page.allCollection.edges"
          :key="edge.node.id"
        >
          <g-image
            alt="SNCF Gare Auxerre"
            src="@/assets/img/angers_tram.jpg"
            center
            height="300px"
            width="500px"
          />
          <p>
            {{ edge.node.title }}
          </p>
        </g-link>

        <g-link class="items_styling" to="/Grands-comptes/">
          <g-image
            alt="SNCF Gare Auxerre"
            src="@/assets/img/SNCF_auxerre.png"
            center
            height="300px"
            width="500px"
          />
          <p>Grands comptes</p>
        </g-link>

        <g-link class="items_styling" to="/Sur-mesure/">
          <g-image
            alt="SNCF Gare Auxerre"
            src="@/assets/img/SNCF_auxerre.png"
            center
            height="300px"
            width="500px"
          />
          <p>
            Réalisations sur mesure
          </p>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Collections {allCollection{edges{node{title, path}}}}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Notre offre"
  }
};
</script>

<style scoped>
.body_offer {
  display: flex;
  justify-content: center;
}

.collection {
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
}

.items_styling {
  border-radius: 4px;

  justify-self: center;
  position: relative;

  height: 300px;
  width: 100%;

  background-color: rgba(250, 250, 250, 0.25);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.items_styling > img {
  border-radius: 4px;
  fit: cover;
  opacity: 1;
  transition: all 0.3s ease-in-out;
}

.items_styling p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: 0;
  opacity: 0;

  font-family: "Bebas Neue";
  font-size: 1.5rem;
  text-decoration: none;
  text-align: center;
  letter-spacing: 2px;
  color: white;
  transition: all 0.5s ease-in-out;
}

.items_styling:hover p {
  text-shadow: #0a2647 1px 0 10px;
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.items_styling:hover > img {
  opacity: 0.3;
  transition: all 0.3s ease-in-out;
}
</style>
