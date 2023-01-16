<template>
  <div class="Caroussel">
    <div class="carousel carousel--translate">
      <input
        class="carousel__activator"
        type="radio"
        name="carousel"
        id="F"
        checked="checked"
      />
      <input class="carousel__activator" type="radio" name="carousel" id="G" />
      <input class="carousel__activator" type="radio" name="carousel" id="H" />
      <input class="carousel__activator" type="radio" name="carousel" id="I" />
      <input class="carousel__activator" type="radio" name="carousel" id="J" />

      <!-- FLèches de navigation -->
      <div class="carousel__controls">
        <label
          class="carousel__control carousel__control--backward"
          for="J"
        ></label>
        <label
          class="carousel__control carousel__control--forward"
          for="G"
        ></label>
      </div>
      <div class="carousel__controls">
        <label
          class="carousel__control carousel__control--backward"
          for="F"
        ></label>
        <label
          class="carousel__control carousel__control--forward"
          for="H"
        ></label>
      </div>
      <div class="carousel__controls">
        <label
          class="carousel__control carousel__control--backward"
          for="G"
        ></label>
        <label
          class="carousel__control carousel__control--forward"
          for="I"
        ></label>
      </div>
      <div class="carousel__controls">
        <label
          class="carousel__control carousel__control--backward"
          for="H"
        ></label>
        <label
          class="carousel__control carousel__control--forward"
          for="J"
        ></label>
      </div>
      <div class="carousel__controls">
        <label
          class="carousel__control carousel__control--backward"
          for="I"
        ></label>
        <label
          class="carousel__control carousel__control--forward"
          for="F"
        ></label>
      </div>

      <div class="carousel__track">
        <li class="carousel__slide">
          <div class="text__slide">
            <h3>Slide 1</h3>
            <p>Bancs Vasco de Gamma, tram d'Angers</p>
          </div>
        </li>
        <li class="carousel__slide">
          <div class="text__slide">
            <h3>Slide 2</h3>
            <p>Image de l'usine, bancs Obrac</p>
          </div>
        </li>
        <li class="carousel__slide">
          <div class="text__slide">
            <h3>Slide 3</h3>
            <p>Galets à Rouen</p>
          </div>
        </li>
        <li class="carousel__slide">
          <div class="text__slide">
            <h3>Slide 4</h3>
            <p>Chaises Obrac à la Rochelle</p>
          </div>
        </li>
        <li class="carousel__slide">
          <div class="text__slide">
            <h3>Slide 5</h3>
            <p>Fond transparent</p>
          </div>
        </li>
      </div>

      <!-- Bouton du bas-->
      <div class="carousel__indicators">
        <label class="carousel__indicator" for="F"></label>
        <label class="carousel__indicator" for="G"></label>
        <label class="carousel__indicator" for="H"></label>
        <label class="carousel__indicator" for="I"></label>
        <label class="carousel__indicator" for="J"></label>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*--------------------------------------------------------------------------------
        General
  ------------------------------------------------------------------------------*/
* {
  box-sizing: border-box;
}
.Caroussel {
  display: inline-block;
}

.carousel {
  height: 500px;
  width: 98.9vw;
  overflow: hidden;
  text-align: center;
  position: relative;
  list-style: none;
}

/*--------------------------------------------------------------------------------
        Images des slides - à changer plus tard pour qu'elles s'adaptent à
        tous les produits
  ------------------------------------------------------------------------------*/
.carousel__slide {
  height: 100%;
  position: absolute;
  overflow-y: auto;
  opacity: 0;
  overflow: hidden;
}

.carousel__slide:nth-of-type(1),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(1) {
  background-image: url("../../src/assets/img/angers_tram.jpg");
  background-size: cover;
  background-position: center;
}
.carousel__slide:nth-of-type(2),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(2) {
  background-image: url("../../src/assets/img/usine.jpg");
  background-size: cover;
  background-position: center;
}
.carousel__slide:nth-of-type(3),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(3) {
  background-image: url("../../src/assets/img/Galets.jpg");
  background-size: cover;
  background-position: center;
}
.carousel__slide:nth-of-type(4),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(4) {
  background-image: url("../../src/assets/img/La_rochelle.jpg");
  background-size: cover;
  background-position: center;
}
.carousel__slide:nth-of-type(5),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(5) {
  background-image: url("../../src/assets/img/fond_transparent.png");
  background-size: cover;
  background-position: center;
}

/*--------------------------------------------------------------------------------
        Texte des slides
  ------------------------------------------------------------------------------*/

.text__slide {
  margin-left: 60vw;
  margin-top: 20vh;
  width: 30%;
  border: double white 5px;

  color: white;
  background-color: rgba(250, 250, 250, 0.6);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text__slide p {
  color: white;
}

/*--------------------------------------------------------------------------------
        Mise en page des slides
  ------------------------------------------------------------------------------*/
.carousel__track {
  position: absolute;
  padding: 0;
  margin: 0;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  transition: transform 0.5s ease 0s;
}

.carousel__track .carousel__slide {
  display: block;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
}

.carousel__track .carousel__slide:nth-of-type(1) {
  transform: translateX(0%);
}
.carousel__track .carousel__slide:nth-of-type(2) {
  transform: translateX(100%);
}
.carousel__track .carousel__slide:nth-of-type(3) {
  transform: translateX(200%);
}
.carousel__track .carousel__slide:nth-of-type(4) {
  transform: translateX(300%);
}
.carousel__track .carousel__slide:nth-of-type(5) {
  transform: translateX(400%);
}

/*--------------------------------------------------------------------------------
        Boutons de navigation du bas
  ------------------------------------------------------------------------------*/

.carousel__indicators {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}

.carousel__indicator {
  background-color: #fafafa;
  height: 15px;
  width: 15px;
  border-radius: 100%;
  display: inline-block;
  z-index: 2;
  cursor: pointer;
  opacity: 0.35;
  margin: 0 2.5px 0 2.5px;
}

.carousel__indicator:hover {
  opacity: 0.75;
}

/*--------------------------------------------------------------------------------
        Flèches de navigation
  ------------------------------------------------------------------------------*/

.carousel__control {
  height: 30px;
  width: 30px;
  margin-top: -15px;
  top: 50%;
  position: absolute;
  display: block;
  cursor: pointer;
  border-width: 5px 5px 0 0;
  border-style: solid;
  border-color: #fafafa;
  opacity: 0.35;
  outline: 0;
  z-index: 3;
}
.carousel__control:hover {
  opacity: 1;
}
.carousel__control--backward {
  left: 10px;
  transform: rotate(-135deg);
}
.carousel__control--forward {
  right: 10px;
  transform: rotate(45deg);
}

.carousel__controls,
.carousel__activator {
  display: none;
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__track {
  transform: translateX(0%);
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__slide:nth-of-type(1) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(1):checked
  ~ .carousel__controls:nth-of-type(1) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(1):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(1) {
  opacity: 1;
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__track {
  transform: translateX(-100%);
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__slide:nth-of-type(2) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(2):checked
  ~ .carousel__controls:nth-of-type(2) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(2):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(2) {
  opacity: 1;
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__track {
  transform: translateX(-200%);
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__slide:nth-of-type(3) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(3):checked
  ~ .carousel__controls:nth-of-type(3) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(3):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(3) {
  opacity: 1;
}
.carousel__activator:nth-of-type(4):checked ~ .carousel__track {
  transform: translateX(-300%);
}
.carousel__activator:nth-of-type(4):checked ~ .carousel__slide:nth-of-type(4) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(4):checked
  ~ .carousel__controls:nth-of-type(4) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(4):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(4) {
  opacity: 1;
}
.carousel__activator:nth-of-type(5):checked ~ .carousel__track {
  transform: translateX(-400%);
}
.carousel__activator:nth-of-type(5):checked ~ .carousel__slide:nth-of-type(5) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(5):checked
  ~ .carousel__controls:nth-of-type(5) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(5):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(5) {
  opacity: 1;
}

/*----------------------------------------------------------------*/

.carousel--scale .carousel__slide {
  transform: scale(0);
}
</style>
