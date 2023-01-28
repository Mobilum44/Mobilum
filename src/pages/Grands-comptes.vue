<template>
  <LayoutNoMargin>
    <section class="page">
      <section class="sections">
        <div class="boxes">
          <div class="item sncf">
            <p>SNCF</p>
          </div>
        </div>

        <div class="boxes">
          <div class="title grands-comptes">
            <h1>Grands comptes</h1>
          </div>
          <div class="item grand-paris">
            <p>Grand paris</p>
          </div>
        </div>
      </section>

      <section class="sections">
        <div class="boxes">
          <div class="title sur-mesure">
            <h1>Sur mesure</h1>
          </div>
          <div class="item saclay">
            <p>Saclay (Tolerie forezienne)</p>
          </div>
          <div class="item roquefert">
            <p>Roquefert</p>
          </div>
        </div>

        <div class="boxes">
          <div class="item trocadero">
            <p>Trocadero</p>
          </div>
        </div>
      </section>
    </section>
  </LayoutNoMargin>
</template>

<script>
import LayoutNoMargin from "@/layouts/LayoutNoMargin.vue";

export default {
  components: {
    LayoutNoMargin
  },

  metaInfo: {
    title: "Grands comptes et sur-mesure"
  }
};
</script>

<style scoped>
/*------------------------------------------------------------------------------
    General
  ----------------------------------------------------------------------------*/

h1 {
  font-size: 2rem;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

.page {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sections {
  margin-bottom: 2rem;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.boxes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
}

.item {
  width: 100%;
  background-color: blue;
}

.title {
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/*------------------------------------------------------------------------------
    Grands comptes
  ----------------------------------------------------------------------------*/

.sncf {
  height: 100%;
  background: url("../../src/assets/img/SNCF_auxerre.png") center center
    no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.grand-paris {
  height: 40vh;
}

/*------------------------------------------------------------------------------
    Sur mesure
  ----------------------------------------------------------------------------*/
.sur-mesure {
  justify-content: flex-end;
}
.trocadero {
  height: 70vh;
}

.saclay {
  height: 50%;
}

.roquefert {
  height: 50%;
}
</style>
