<template>
  <div class="SlideRedirection">
    <g-link
      class="box"
      to="/Entreprise/"
    >
      <g-image
        src="@/assets/img/plaques-hook-coulage-usine.jpg"
      />
      <p to="/Entreprise/">
        Un atelier
      </p>
    </g-link>
    <div class="box">
      <g-image src="@/assets/img/design-mobilum.jpg" />
      <p>Du design</p>
    </div>
    <!--
    <g-link
      class="box"
      to="/Materiau/"
    > -->
    <div class="box">
      <g-image src="@/assets/img/bfup-coulage-mobilum.jpg" />
      <p>Du BFUP</p>
    </div>
    <!-- </g-link> -->
    <g-link
      class="box"
      to="/Offre/"
    >
      <g-image src="@/assets/img/obrac-la-rochelle-port-neuf.png" />
      <p>Une collection</p>
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
  gap : 1rem;
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
  filter :grayscale(100) contrast(1.2);
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
    filter :grayscale(0);
  width: 100%;
  height: 100%;
}


@media only screen and (max-width: 600px) {
.SlideRedirection {
  z-index : 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height : 100vh;
  width : 95%;
  gap : 1%;
}

.box > img {
  background-attachment: fixed;
}
.box {
  height : 200px;
}
}


</style>
