<template>
  <g-link
    :to="to"
    :class="theme"
  >
    <slot />
  </g-link>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "accueil",
      validator: val => ["blue", "slide"].indexOf(val) !== -1
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
    Style du bouton simple bleu
  --------------------------------------------------------------*/

.blue {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: #fefcf3;
  border-radius: 10px;
  text-decoration: none;
  color: #1a949d;
  line-height: 0;
  font-size: 1rem;
  padding: 0 1.3em;
}

.blue:hover {
  background-color: rgba(26, 148, 157);
  text-decoration: none;
  color: #fefcf3;
}

/* ---------------------------------------------------------------
    Style du bouton Slide
  --------------------------------------------------------------*/
.slide {
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.4);
  position: relative;
  overflow: hidden;
  padding: 0.5rem 4rem;

  font-family: "Bebas Neue";
  text-decoration: none;
  color: #f4f4f4;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.slide:hover {
  box-shadow: 1px 1px 25px 10px rgba(255, 255, 255, 0.4);
}

.slide:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: all 650ms;
}

.slide:hover:before {
  left: 100%;
}
</style>
