<template>
  <Layout>
    <h1> Nos dossiers d'exception </h1>

    <section>
      <h2> Les grands comptes </h2>

      <section class="horizontal__align">
        <CarteMarches>
          <template #img__marche>
            <g-image
              alt="mains mobilum"
              src="../../src/assets/img/gare-sncf-grenoble.jpg"
              center
              width="1000px"
              fit="cover"
            />
          </template>

          <template #titre__marche>
            <h3> La SNCF</h3>
          </template>

          <template #texte__marche>
            <p>
              On refait l'intérieur des gares
            </p>
          </template>
        </CarteMarches>

        <CarteMarches>
          <template #img__marche>
            <g-image
              alt="mains mobilum"
              src="../../src/assets/img/eiffela.jpg"
              center
              width="1000px"
              fit="cover"
            />
          </template>

          <template #titre__marche>
            <h3> Le grand paris </h3>
          </template>

          <template #texte__marche>
            <p>
              Projet monumental du renouvellement des gares
            </p>
          </template>
        </CarteMarches>

        <CarteMarches>
          <template #img__marche>
            <g-image
              alt="mains mobilum"
              src="../../src/assets/img/paris-saclay-tolerie-foreizienne-exceptionnel.jpg"
              center
              width="1000px"
              fit="cover"
            />
          </template>

          <template #titre__marche>
            <h3> Paris Saclay </h3>
          </template>

          <template #texte__marche>
            <p>
              Projet tolerie forezienne
            </p>
          </template>
        </CarteMarches>

      </section>
    </section>


    <section>
      <h2> Les sur-mesure </h2>

      <section class="horizontal__align">
        <CarteMarches>
          <template #img__marche>
            <g-image
              alt="mains mobilum"
              src="../../src/assets/img/feuille-roquefer.jpg"
              center
              width="1000px"
              fit="cover"
            />
          </template>

          <template #titre__marche>
            <h3> Roquefert</h3>
          </template>

          <template #texte__marche>
            <p>
              On a imprimé des feuilles sur les bancs
            </p>
          </template>
        </CarteMarches>

<!------------------ Trocadero ---------------------------------------
        <CarteMarches>
          <template #img__marche>
            <g-image
              alt="mains mobilum"
              src="../../src/assets/img/eiffela.jpg"
              center
              width="1000px"
              fit="cover"
            />
          </template>

          <template #titre__marche>
            <h3> Le trocadéro </h3>
          </template>

          <template #texte__marche>
            <p>
              Les jardinières du Trocadéro
            </p>
          </template>
        </CarteMarches>
      ----------------------------------------------------------------->

        <CarteMarches>
          <template #img__marche>
            <g-image
              alt="mains mobilum"
              src="../../src/assets/img/crous-nantes.png"
              center
              width="1000px"
              fit="cover"
            />
          </template>

          <template #titre__marche>
            <h3> Le Crous </h3>
          </template>

          <template #texte__marche>
            <p>
              Mobilier intérieur pour les étudiants
            </p>
          </template>
        </CarteMarches>
      </section>
    </section>

    <section>
      <h2> Les démesurés </h2>

      <section class="horizontal__align">
        <CarteMarches>
          <template #img__marche>
            <g-image
              alt="table infinie vertou"
              src="../../src/assets/img/projet-vertable-tables-vertou.jpg"
              center
              width="1000px"
              fit="cover"
            />
          </template>

          <template #titre__marche>
            <h3> Parc de la Sèvre, Vertou</h3>
          </template>

          <template #texte__marche>
            <p>
              Une table infinie
            </p>
          </template>
        </CarteMarches>


        <CarteMarches>
          <template #img__marche>
            <g-image
              alt="mains mobilum"
              src="../../src/assets/img/carnon-transats-mila2.jpg"
              center
              width="1000px"
              fit="cover"
            />
          </template>

          <template #titre__marche>
            <h3> Port de plaisance, Carnon </h3>
          </template>

          <template #texte__marche>
            <p>
              Des transats infinis
            </p>
          </template>
        </CarteMarches>
      </section>
    </section>
  <p class="referencement">Plongez dans notre portfolio de projets en BFUP d'exception, en termes de taille, de
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
import CarteMarches from "@/components/CarteMarches.vue";

export default {
  components: {
    Layout,
    CarteMarches,
  },

  metaInfo: {
    title: "Grands comptes et sur-mesure"
  }
};
</script>

<style scoped>

section {
  margin-top : 2rem;
}
.contenu {
  gap : 0;
}
h1 {
  padding-top : 0rem;
  margin : 0;
  color : black;
  border : none;
  border-bottom: black solid 1px;
  width : 100%;
}

h2 {
  margin-top : 2rem;
  margin-left : 3rem;
  color : grey;
}

.horizontal__align {
  display : flex;
  flex-direction : row;
  gap : 1rem;
}
.section__exception {
}

.referencement {
  padding-left : 3rem;
  padding-top : 2rem;
  width : 80%;
}
</style>
