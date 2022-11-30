<template>
  <News>
    <div class="slide active">
      <div class="card">
        <div class="card__img" id="img01"></div>
        <div class="card__content">
          <p class="card__content-theme">Travel</p>
          <h2 class="card__content-header">Misty mountain</h2>
          <p class="card__content-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            porro, tempora consequuntur vel dolore assumenda aspernatur cum
            dignissimos unde reprehenderit sint? Neque, id consequuntur.
            Quibusdam sit officiis debitis corrupti. Quasi.
          </p>
          <a class="card__content-link">Read </a>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="card">
        <div class="card__img" id="img02"></div>
        <div class="card__content">
          <p class="card__content-theme">Urban</p>
          <h2 class="card__content-header">Urban umbrellas</h2>
          <p class="card__content-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            porro, tempora consequuntur vel dolore assumenda aspernatur cum
            dignissimos unde reprehenderit sint? Neque, id consequuntur.
            Quibusdam sit officiis debitis corrupti. Quasi.
          </p>
          <a class="card__content-link">Read </a>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="card">
        <div class="card__img" id="img03"></div>
        <div class="card__content">
          <p class="card__content-theme">Lifestyle</p>
          <h2 class="card__content-header">A lonely road</h2>
          <p class="card__content-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            porro, tempora consequuntur vel dolore assumenda aspernatur cum
            dignissimos unde reprehenderit sint? Neque, id consequuntur.
            Quibusdam sit officiis debitis corrupti. Quasi.
          </p>
          <a class="card__content-link">Read </a>
        </div>
      </div>
    </div>
    <div class="prevnext">
      <button class="prevnext-button" id="prev"></button>
      <button class="prevnext-button" id="next"></button>
    </div>
  </News>
</template>



<style scoped>
@charset "UTF-8";
body,
html {
  height: 100%;
}

body {
  font-family: "Source Sans Pro", sans-serif;
  background-color: #D4DAD9;
  color: #252525;
  overflow: hidden;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.card {
  width: 90vmin;
  height: 55vmin;
  display: flex;
  box-shadow: 0 30px 40px -15px rgba(0, 0, 0, 0.35);
  background-color: #fff;
}

.card__img {
  background-position: center;
  width: 50%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

#img01 {
  background-image: url("https://images.unsplash.com/photo-1477865634015-0b232c1dd56a?dpr=1&auto=format&fit=crop&w=1500&h=2109&q=80&cs=tinysrgb&crop=");
}

#img02 {
  background-image: url("https://images.unsplash.com/photo-1495041405835-b4702187b514?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=");
}

#img03 {
  background-image: url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?dpr=1&auto=compress,format&fit=crop&w=2734&h=&q=80&cs=tinysrgb&crop=");
}

.card__content {
  padding: 10% 5%;
  box-sizing: border-box;
  width: 50%;
}

.card__content-theme {
  font-weight: 900;
  font-size: 1.7vmin;
}

.card__content-header {
  font-weight: 900;
  font-size: 54px;
  font-size: 7vmin;
  text-transform: capitalize;
  letter-spacing: 0.01em;
  line-height: 0.91;
  margin: 3vmin 0 3.5vmin;
}

.card__content-paragraph {
  font-size: 1.6vmin;
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 2.5vmin;
}

.card__content-link {
  color: #BA3428;
  font-size: 1.8vmin;
  display: block;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}
.card__content-link:hover {
  opacity: 1;
}
.card__content-link:after {
  content: " →";
}

.prevnext {
  position: absolute;
  width: 4vmin;
  height: 8vmin;
  right: 2%;
  bottom: 0;
  top: 0;
  margin: auto 0;
}

.prevnext-button {
  width: 100%;
  height: 50%;
  border: 0;
  background-color: transparent;
  font-size: 20px;
}

#prev,
#next {
  position: relative;
  cursor: pointer;
}
#prev:hover:after,
#prev:hover:after,
#next:hover:after,
#next:hover:after {
  opacity: 1;
}

#prev:after,
#next:after {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

#prev:after {
  content: "↑";
}

#next:after {
  content: "↓";
}
</style>


<!----------------------------------------------------
  Trouver comment déclarer les variables
------------------------------------------------------


<script>
export default {
  
  var $activeSlide = $(".active"),
  $homeSlide = $(".slide"),
  $slideNavPrev = $("#prev"),
  $slideNavNext = $("#next");

function init() {
  TweenMax.set($homeSlide.not($activeSlide), { autoAlpha: 0 });
  TweenMax.set($slideNavPrev, { autoAlpha: 0.2 });
}

init();

function goToNextSlide(slideOut, slideIn, slideInAll) {
  var tl = new TimelineLite(),
    slideOutContent = slideOut.find(".card__content"),
    slideInContent = slideIn.find(".card__content"),
    slideOutImg = slideOut.find(".card__img"),
    slideInImg = slideIn.find(".card__img"),
    index = slideIn.index(),
    size = $homeSlide.length;
  console.log(index);

  if (slideIn.length !== 0) {
    tl.set(slideIn, { autoAlpha: 1, className: "+=active" })
      .set(slideOut, { className: "-=active" })
      .to(slideOutContent, 0.65, { y: "+=40px", ease: Power3.easeInOut }, 0)
      .to(
        slideOutImg,
        0.65,
        { backgroundPosition: "bottom", ease: Power3.easeInOut },
        0
      )
      .to(slideInAll, 1, { y: "-=100%", ease: Power3.easeInOut }, 0)
      .fromTo(
        slideInContent,
        0.65,
        { y: "-=40px" },
        { y: 0, ease: Power3.easeInOut },
        "-=0.7"
      )
      .fromTo(
        slideInImg,
        0.65,
        { backgroundPosition: "top" },
        { backgroundPosition: "bottom", ease: Power3.easeInOut },
        "-=0.7"
      );
  }

  TweenMax.set($slideNavPrev, { autoAlpha: 1 });

  if (index === size - 1) {
    TweenMax.to($slideNavNext, 0.3, { autoAlpha: 0.2, ease: Linear.easeNone });
  }
}

$slideNavNext.click(function (e) {
  e.preventDefault();

  var slideOut = $(".slide.active"),
    slideIn = $(".slide.active").next(".slide"),
    slideInAll = $(".slide");

  goToNextSlide(slideOut, slideIn, slideInAll);
});

function goToPreviousSlide(slideOut, slideIn, slideInAll) {
  var tl = new TimelineLite(),
    slideOutContent = slideOut.find(".card__content"),
    slideInContent = slideIn.find(".card__content"),
    slideOutImg = slideOut.find(".card__img"),
    slideInImg = slideIn.find(".card__img"),
    index = slideIn.index(),
    size = $homeSlide.length;

  if (slideIn.length !== 0) {
    tl.set(slideIn, { autoAlpha: 1, className: "+=active" })
      .set(slideOut, { className: "-=active" })
      .to(slideOutContent, 0.65, { y: "-=40px", ease: Power3.easeInOut }, 0)
      .to(
        slideOutImg,
        0.65,
        { backgroundPosition: "top", ease: Power3.easeInOut },
        0
      )
      .to(slideInAll, 1, { y: "+=100%", ease: Power3.easeInOut }, 0)
      .fromTo(
        slideInContent,
        0.65,
        { y: "+=40px" },
        { y: 0, ease: Power3.easeInOut },
        "-=0.7"
      )
      .fromTo(
        slideInImg,
        0.65,
        { backgroundPosition: "bottom" },
        { backgroundPosition: "top", ease: Power3.easeInOut },
        "-=0.7"
      );
  }

  TweenMax.set($slideNavNext, { autoAlpha: 1 });

  if (index === 0) {
    TweenMax.to($slideNavPrev, 0.3, { autoAlpha: 0.2, ease: Linear.easeNone });
  }
}

$slideNavPrev.click(function (e) {
  e.preventDefault();

  var slideOut = $(".slide.active"),
    slideIn = $(".slide.active").prev(".slide"),
    slideInAll = $(".slide");

  goToPreviousSlide(slideOut, slideIn, slideInAll);
});


}
</script>



--------------------------------->