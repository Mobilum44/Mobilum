<template>
  <g-link :to="to" :class="theme">
    <slot />
  </g-link>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "accueil",
      validator: (val) => ["accueil", "equipe", "contact"].indexOf(val) !== -1,
    },

    to: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
/* ---------------------------------------------------------------
    Style du bouton "Accueil"
  --------------------------------------------------------------*/
.accueil {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-decoration: none;
  color: #1A949D;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 200px;
  margin: 5px;
  border: 2px solid #1A949D;
  background-color: rgb(228, 228, 228);
  transition: all 0.1s linear;
}

.accueil:hover {
  border: 2px solid white;
  background-color: #1A949D;
  text-decoration: none;
  color: white;
}

/* ---------------------------------------------------------------
    Style du bouton "Contact"
  --------------------------------------------------------------*/

.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: rgba(26, 148, 157, 0.5);
  border-radius: 10px;
  text-decoration: #dbdbdb;
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  padding: 0 1.3em;
}

.contact:hover {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: rgba(26, 148, 157);
  text-decoration: none;
  color: white;
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  padding: 0 1.3em;
}
</style>