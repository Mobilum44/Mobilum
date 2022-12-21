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

<style scoped>
/* ---------------------------------------------------------------
    Style du bouton "Accueil"
  --------------------------------------------------------------*/
.accueil {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-decoration: none;
  color: #1a949d;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 200px;
  margin: 5px;
  border: 2px solid #1a949d;
  background-color: rgb(228, 228, 228);
  transition: all 0.1s linear;
}

.accueil:hover {
  border: 2px solid white;
  background-color: #1a949d;
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

/* ---------------------------------------------------------------
    Style du bouton "Action"
  --------------------------------------------------------------*/
.action {
  position: relative;
  display: inline-block;
  padding: 30px 61px;
  border-radius: 4px;
  color: #03e9f4;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  margin: 25px;
  font-family: "Roboto", sans-serif;
  filter: hue-rotate(0deg);
  border: 2px solid #d2bdff;
  transition: all 0.1s linear;

  &:hover {
    border: 1px solid transparent;
    span {
      position: absolute;
      display: block;

      &:nth-child(1) {
        filter: hue-rotate(0deg);
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, transparent, #3a86ff);
        animation: animate1 1s linear infinite;
      }
      @keyframes animate1 {
        0% {
          left: -100%;
        }
        50%,
        100% {
          left: 100%;
        }
      }

      &:nth-child(2) {
        filter: hue-rotate(60deg);
        top: -100%;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #3a86ff);
        animation: animate2 1s linear infinite;
        animation-delay: 0.25s;
      }

      @keyframes animate2 {
        0% {
          top: -100%;
        }
        50%,
        100% {
          top: 100%;
        }
      }
      &:nth-child(3) {
        filter: hue-rotate(120deg);
        bottom: 0;
        right: 0;
        width: 100%;

        background: linear-gradient(270deg, transparent, #3a86ff);
        animation: animate3 1s linear infinite;
        animation-delay: 0.5s;
      }
      @keyframes animate3 {
        0% {
          right: -100%;
          height: 3px;
        }
        50%,
        100% {
          height: 2px;
          right: 100%;
        }
      }

      &:nth-child(4) {
        filter: hue-rotate(300deg);
        bottom: -100%;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #3a86ff);
        animation: animate4 1s linear infinite;
        animation-delay: 0.75s;
      }
      @keyframes animate4 {
        0% {
          bottom: -100%;
        }
        50%,
        100% {
          bottom: 100%;
        }
      }
    }
  }
}
</style>
