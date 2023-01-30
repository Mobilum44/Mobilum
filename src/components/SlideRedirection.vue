<template>
  <div class="SlideRedirection">
    <g-link
      class="box"
      to="/Entreprise/"
    >
      <g-image src="@/assets/img/usine.jpg" />
      <p to="/Entreprise/">
        Notre entreprise
      </p>
    </g-link>
    <g-link
      class="box"
      to="/Materiau/"
    >
      <g-image src="@/assets/img/coulage_BFUP.jpg" />
      <p>Le BFUP</p>
    </g-link>
    <g-link
      class="box"
      to="/Offre/"
    >
      <g-image src="@/assets/img/La_rochelle.jpg" />
      <p>Notre collection</p>
    </g-link>
  </div>
</template>

<style scoped>
.SlideRedirection {
  z-index : 20;
  display: flex;
  padding: 2% 0%;
  width: 100%;
  height: 50vh;
}

.box {
  position : relative;
  flex: 1;
  overflow: hidden;
  transition: 0.5s;

  text-decoration: none;
}

.box > img {
  width: 200%;
  height: calc(100%);
  object-fit: cover;
  transition: 0.5s;
}

.box p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity : 1;
  
  font-family : "Bebas Neue";
  font-size : 1.5rem;
  color : white;
}

.box:hover {
  flex: 1 1 50%;
}

.box:hover > img {
  width: 100%;
  height: 100%;
}
</style>
