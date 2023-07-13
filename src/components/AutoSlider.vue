<template>
  <Section class="AutoSlider">
    <div class="slider-container">
      <div class="slide">
        <g-image
          fit="cover"
          height="80vh"
          :src="path"
          :id="`slide-${i}`"
        />
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
  width : 50vw;
  height : 100%;
  overflow : hidden;
}
.AutoSlider .slider-container {
  position: absolute;
  height : 100%;
  width: 300%;
  top: 0;
  left: 0;
  animation: slider 15s infinite;
  object-fit :cover;
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