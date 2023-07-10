<template>
  <Section class="AutoSlider">
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

.AutoSlider {
  position: relative;
  width: 60vw;
  height: 60vh;

  /*
  width: 100vw;
  height: 400px; */
}
.AutoSlider .slider-container {
  position: absolute;
  width: 300%;
  top: 0;
  left: 0;
  overflow: hidden;
  animation: slider 26s infinite;
}
.AutoSlider .slider-container .slide {
  position: relative;
  width: 33.33333333%;
  height: 100%;
  float: left;
  overflow: hidden;
}
.AutoSlider .slider-container .slide img {
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