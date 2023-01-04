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
      validator: val => ["accueil", "blue", "pink_action"].indexOf(val) !== -1
    },

    to: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style scoped>
/* ---------------------------------------------------------------
    Style du bouton "Accueil"
  --------------------------------------------------------------*/

.accueil {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #1a949d;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  background: rgb(250, 250, 250, 0.3);
  border: 2px solid #1a949d;
  box-shadow: 5px 5px 0 white, -5px -5px 0 white, -5px 5px 0 white,
    5px -5px 0 white;
  transition: 500ms ease-in-out;
}

.accueil:hover {
  border: 2px solid #1a949d;
  box-shadow: 20px 5px 0 white, -20px -5px 0 white;
  text-shadow: 20px 5px 0 white, -20px -5px 0 white;
}

.accueil:focus {
  outline: none;
}

/* ---------------------------------------------------------------
    Style du bouton "Contact"
  --------------------------------------------------------------*/

.blue {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: rgba(26, 148, 157, 0.5);
  border-radius: 10px;
  text-decoration: none;
  color: white;
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  padding: 0 1.3em;
}

.blue:hover {
  background-color: rgba(26, 148, 157);
  text-decoration: none;
  color: white;
}

/* ---------------------------------------------------------------
    Style du bouton "Action" qui n'est plus très rose...
  --------------------------------------------------------------*/
/* 4 */
.pink_action {
  position: relative;
  z-index: 2;
  line-height: 50px;
  height: 50px;
  width: 200px;
  text-decoration: none;
  text-align: center;
  color: #fff;
}
.pink_action:hover {
  border: none;
}
.pink_action:before,
.pink_action:after {
  position: absolute;
  content: "";
  width: 0%;
  height: 0%;
  border: 2px solid;
  z-index: -1;
  transition: all 0.3s ease;
}
.pink_action:before {
  top: 0;
  left: 0;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: #ffe3de;
  border-left-color: #ffe3de;
}
.pink_action:after {
  bottom: 0;
  right: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: #ffe3de;
  border-right-color: #ffe3de;
}
.pink_action:hover:before,
.pink_action:hover:after {
  border-color: #ffe3de;
  height: 100%;
  width: 100%;
}
</style>
