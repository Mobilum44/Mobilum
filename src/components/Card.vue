<template>
  <div class="card-container">
    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/angers_tram.jpg"
          alt="Picture by Kyle Cottrell"
          class="card__image"
          fit="cover"
          height="350px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Aménagement urbain
          </h2>
          <p class="card__text">
            On fait des HOOK :)
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/jardin_elium_vasco.jpg"
          alt="Picture by Nathan Dumlao"
          class="card__image"
          fit="cover"
          height="350px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Sur-mesure
          </h2>
          <p class="card__text">
            Les affaires faites à la demande des clients  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/La_rochelle.jpg"
          alt="Picture by Daniel Lincoln"
          class="card__image"
          fit="cover"
          height="350px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Parcs
          </h2>
          <p class="card__text">
            On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/La_rochelle.jpg"
          alt="Picture by Kyle Cottrell"
          class="card__image"
          fit="cover"
          height="350px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Bord de mer
          </h2>
          <p class="card__text">
            NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/Galets.jpg"
          alt="Picture by Nathan Dumlao"
          class="card__image"
          fit="cover"
          height="350px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Centres commerciaux
          </h2>
          <p class="card__text">
            Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="card">
      <figure class="card__thumb">
        <img
          src="@/assets/img/SNCF_auxerre.png"
          alt="Picture by Daniel Lincoln"
          class="card__image"
          fit="cover"
          width="350px"
        >
        <figcaption class="card__caption">
          <h2 class="card__title">
            Intérieur
          </h2>
          <p class="card__text">
            On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.
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
  width: 100%;
  height : 100%;
  margin: 20px 0 80px;
}

.card {
  width: 300px;
  height : 300px;
  margin: 10px;
  background-color: white;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
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
  height : 300px;
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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 40%, rgba(255, 255, 255, 0) 100%);
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