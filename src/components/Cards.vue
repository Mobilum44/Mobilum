<template>
  <div class="card">
    <g-link class="box" to="/Entreprise/">
      <g-image src="@/assets/img/usine.JPG" />
      <p class="link_style">Notre entreprise</p>
    </g-link>
    <g-link class="box">
      <g-image src="@/assets/img/Bfup_bleu.jpg" />
      <p class="link_style" to="/Materiau/">Le BFUP</p>
    </g-link>
    <g-link class="box">
      <g-image src="@/assets/img/La_rochelle.JPG" />
      <p class="link_style" to="/Offre/">Notre collection</p>
    </g-link>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  padding: 2% 0%;
  width: 100%;
  box-sizing: border-box;
  height: 50vh;
}

.box {
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  margin: 0;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  line-height: 0;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.box > img {
  width: 200%;
  height: calc(100% - 5vh);
  object-fit: cover;
  transition: 0.5s;
}

.link_style {
  display: flex;
  justify-content: center;
  text-align: center;
  color: #1a949d;
}

.box:hover {
  flex: 1 1 50%;
}
.box:hover > img {
  width: 100%;
  height: 100%;
}
</style>
