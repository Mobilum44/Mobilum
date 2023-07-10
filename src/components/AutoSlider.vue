<template>
  <Section class="img-slider">
    <div class="slider-container">
      <div class="slide">
        <img src="http://res.cloudinary.com/hurricane10/image/upload/v1499778218/img-26_aw9alb.jpg">
      </div>

      <div class="slide">
        <img src="http://res.cloudinary.com/hurricane10/image/upload/v1499778117/img-23_pumtse.jpg">
      </div>

      <div class="slide">
        <img src="http://res.cloudinary.com/hurricane10/image/upload/v1499778109/img-20_ljchnk.jpg">
      </div>
    </div>
  </Section>
</template>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.img-slider {
  position: relative;
  width: 100vw;
  height: 400px;
}
.img-slider .slider-container {
  position: absolute;
  width: 300%;
  top: 0;
  left: 0;
  overflow: hidden;
  animation: slider 26s infinite;
}
.img-slider .slider-container .slide {
  position: relative;
  width: 33.33333333%;
  height: 100%;
  float: left;
  overflow: hidden;
}
.img-slider .slider-container .slide img {
  display: block;
  width: 100%;
  height: 100%;
}
@keyframes slider {
  0%,
  25%,
  100% {
    left: 0;
  }

  30%,
  55% {
    left: -100%;
  }

  60%,
  85% {
    left: -200%;
  }
}

</style>