<template>
  <Layout>
    <h1>Notre offre</h1>

    <div class="collection">
      <!-- Touver comment afficher du texte sur les images -->
      <div class="image-container">
        <div class="image">
          <img
            src="https://i.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o"
          /><img
            src="https://i.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o"
          />
        </div>
        <div class="image">
          <img
            src="https://i.picsum.photos/id/139/200/200.jpg?hmac=FNSPvHsHcRzKQtNxKKauJgIXpoaAufCwYvr-1w5T3R4"
          /><img
            src="https://i.picsum.photos/id/139/200/200.jpg?hmac=FNSPvHsHcRzKQtNxKKauJgIXpoaAufCwYvr-1w5T3R4"
          />
        </div>
        <div class="image">
          <img
            src="https://i.picsum.photos/id/642/200/200.jpg?hmac=MJkhEaTWaybCn0y7rKfh_irNHvVuqRHmxcpziWABTKw"
          /><img
            src="https://i.picsum.photos/id/642/200/200.jpg?hmac=MJkhEaTWaybCn0y7rKfh_irNHvVuqRHmxcpziWABTKw"
          />
        </div>
        <div class="image">
          <img
            src="https://i.picsum.photos/id/253/200/200.jpg?hmac=_dceojr9yz5ZIKoye8I9HOqPCBHfn-jT9aRYdoLx1kQ"
          /><img
            src="https://i.picsum.photos/id/253/200/200.jpg?hmac=_dceojr9yz5ZIKoye8I9HOqPCBHfn-jT9aRYdoLx1kQ"
          />
        </div>
        <div class="image">
          <img
            src="https://i.picsum.photos/id/604/200/200.jpg?hmac=qgFjxODI1hMBMfHo68VvLeji-zvG9y-iPYhyW0EkvOs"
          /><img
            src="https://i.picsum.photos/id/604/200/200.jpg?hmac=qgFjxODI1hMBMfHo68VvLeji-zvG9y-iPYhyW0EkvOs"
          />
        </div>
        <div class="image">
          <img
            src="https://i.picsum.photos/id/119/200/200.jpg?hmac=JGrHG7yCKfebsm5jJSWw7F7x2oxeYnm5YE_74PhnRME"
          /><img
            src="https://i.picsum.photos/id/119/200/200.jpg?hmac=JGrHG7yCKfebsm5jJSWw7F7x2oxeYnm5YE_74PhnRME"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Notre offre",
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.collection {
  display: flex;
  justify-content: center;
}

.image-container {

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width : 70%;
  grid-gap: 2rem;
}
.image-container .image {

  position: relative;
  padding-bottom: 100%;
  --clip-start: inset(100% 100% 100% 100%);
  --clip-end: inset(0 0 0 0);
}
.image-container .image img {
    border-radius : 5px;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  left: 0;
  position: absolute;
  top: 0;
}
.image-container .image img:nth-of-type(1) {
  filter: grayscale(1) brightness(40%);
}
.image-container .image img:nth-of-type(2) {
  -webkit-clip-path: var(--clip-start);
  clip-path: var(--clip-start);
  transition: -webkit-clip-path 0.5s;
  transition: clip-path 0.5s;
  transition: clip-path 0.5s, -webkit-clip-path 0.5s;
  
}
.image-container .image:hover img:nth-of-type(2) {
  -webkit-clip-path: var(--clip-end);
  clip-path: var(--clip-end);
}
</style>