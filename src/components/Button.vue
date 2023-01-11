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
      validator: val => ["blue", "white", "shine", "slide"].indexOf(val) !== -1
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
    Style du bouton "Action" qui n'est plus très rose...
  --------------------------------------------------------------*/
.white {
  position: relative;
  z-index: 2;
  height: 60px;
  width: 225px;
  text-decoration: none;
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.white:hover {
  border: none;
}
.white:before,
.white:after {
  position: absolute;
  content: "";
  width: 0%;
  height: 0%;
  border: 2px solid;
  z-index: -1;
  transition: all 0.3s ease;
}
.white:before {
  top: 0;
  left: 0;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: #ffe3de;
  border-left-color: #ffe3de;
}
.white:after {
  bottom: 0;
  right: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: #ffe3de;
  border-right-color: #ffe3de;
}
.white:hover:before,
.white:hover:after {
  border-color: #ffe3de;
  height: 100%;
  width: 100%;
}

/* ---------------------------------------------------------------
    Style du bouton Shine
  --------------------------------------------------------------*/
.shine {
  z-index: 1;
  position: relative;

  font-family: "Bebas Neue";
  text-decoration: none;
  letter-spacing: 2px;
  color: white;
  padding: 1rem 3rem;

  background-color: rgba(0, 0, 0, 0.8) /*rgba(26, 148, 157, 0.6)*/;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  overflow: hidden;
}

.shine::after {
  content: "";
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 2.5rem;
  transform: translate3d(-525%, 0, 0) rotate(35deg);
}

.shine:hover::after {
  transition: transform 0.45s ease-in-out;
  transform: translate3d(200%, 0, 0) rotate(35deg);
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
