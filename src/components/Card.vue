<template>
  <div class="card-container">
    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/Galets.jpg"
          alt="Galets rouen bfup Mobilum"
          class="card__image"
          fit="cover"
          height="220px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Centre ville
          </h2>
          <p class="card__text">
            Design urbain unique.
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/olivier.jpg"
          alt="photo parc du loroux-botereau mobilum"
          class="card__image"
          fit="cover"
          height="350px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Parc
          </h2>
          <p class="card__text">
            Développement durable assumé.
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/obrac-la-rochelle-port-neuf.png"
          alt="Bord de mer à cucq transat Camah de Mobilum"
          class="card__image"
          fit="cover"
          height="220px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Bord de mer
          </h2>
          <p class="card__text">
            Embruns, climats ne sont plus des contraintes.
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/gare-est-paris-mobilum.jpg"
          alt="Photo gare paris mobilum"
          class="card__image"
          fit="cover"
          height="300px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Gare
          </h2>
          <p class="card__text">
            Nous participons aux grands projets.
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/tram-angers-banc-mobilum.jpg"
          alt="Banc Vasco de Gamma Angers Mobilum"
          class="card__image"
          fit="cover"
          height="220px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Tram
          </h2>
          <p class="card__text">
            Usage assumé pour un fort traffic.
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <!-- Parcs, Bords de mer, Gare, Lycée, ...-->
        <img
          src="@/assets/img/zone-commerciale-puilboreau-mobilum-origami.jpeg"
          alt="Banc et totem origami par mobilum zone commerciale la rochelle"
          class="card__image"
          fit="cover"
          height="220px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Zone commerciale
          </h2>
          <p class="card__text">
            Nos gammes sont cohérentes et séduisantes.
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/lycée-nord-sur-erdre-mobilum.jpg"
          alt="Vue du ciel Lycée Nord sur Erdre à Nantes Mobilum"
          class="card__image"
          fit="cover"
          height="300px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Ecole
          </h2>
          <p class="card__text">
            Nous accompagnons les générations novatrices.
          </p>
        </figcaption>
      </figure>
    </div>


    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/totem-tertiaire-mobilum.jpg"
          alt="totem en BFUP pour l'entreprise Luneau Papin par Mobilum"
          class="card__image"
          fit="cover"
          height="300px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Tertiaire
          </h2>
          <p class="card__text">
            Image de marque remarquable et personnalisable.

            PHOTO DE PIANO REZZO
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <!-- Parcs, Bords de mer, Gare, Lycée, ...-->
        <img
          src="@/assets/img/lotissement-hook-mobilum.png"
          alt="Lotissement coffret technique hook mobilum"
          class="card__image"
          fit="cover"
          height="220px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Lotissement
          </h2>
          <p class="card__text">
            De l'efficacité dans la simplicité.
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/carte-france.jpg"
          alt="Lotissement coffret technique hook mobilum"
          class="card__image"
          fit="cover"
          height="220px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            National
          </h2>
          <p class="card__text">
            Un rayonnement sur tout le territoire français.
          </p>
        </figcaption>
      </figure>
    </div>



  </div>
</template>



<style scoped>

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height : 100%;
  margin-bottom : 3rem;
}

@media only screen and (max-width: 600px) {
.card-container {
  display: flex;
  justify-content: center;
}
}

.card {
  width: 200px;
  height : 200px;
  margin: 10px;
  background-color: white;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  filter : grayscale(0%);
}

.card:hover{
  filter : grayscale(0);
}


.card:hover .card__caption {
  top: 50%;
  transform: translateY(-50%);
}
.card:hover .card__image {
  transform: translateY(-10px);
}
.card:hover .card__thumb::after {
  top: 0;
}
.card:hover .card__text {
  margin: 20px 0;
}


.card__thumb {
    margin : 0;
  position: relative;
  overflow: hidden;
  height : 200px;
}
@media (min-width: 1024px) {
  .card__thumb {
    max-height: 500px;
  }
}
.card__thumb::after {
  position: absolute;
  top: 0;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 10%, rgba(255, 255, 255, 0) 100%);
  transition: 0.3s;
}
@media (min-width: 1024px) {
  .card__thumb::after {
    top: calc(100% - 140px);
  }
}
.card__image {
  transition: 0.5s ease-in-out;
  object-fit: cover;
}


.card__caption {
  position: absolute;
  top: 50%;
  z-index: 1;
  padding: 0 20px;
  color: white;
  transform: translateY(-50%);
  text-align: center;
  transition: 0.3s;
}
@media (min-width: 1024px) {
  .card__caption {
    top: calc(100% - 110px);
    transform: unset;
  }
}
.card__title {
  margin-top : 8vh;
  display: -webkit-box;
  max-height: 85px;
  overflow: hidden;
  font-family: "Bebas Neue";
  font-size: 1.5rem;
  line-height: 28px;
  text-shadow: 0px 1px 5px black;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card__text {
  display: -webkit-box;
  margin: 2vw 0;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  color : white;
  font-size: 1rem;
  line-height: 1rem;
  text-overflow: ellipsis;
  transition: 0.5s ease-in-out;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
@media (min-width: 1024px) {
  .card__text {
    margin: 60px 0;
  }
}
</style>