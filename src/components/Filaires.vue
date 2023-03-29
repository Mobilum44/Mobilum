<template>
  <div class="Filaire">
    <ul>
      <li
        v-for="(path, i) in img"
        :key="i"
      >
        <div>
          <div class="filaire__container">
            <g-image
              class="filaire__photo"
              fit="cover"
              height="20vh"
              :src="path"
              :id="`slide-${i}`"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  props: {
        img: {
      type: Array,
      default: [],
    },
  },
  methods: {
    scrollTo(i) {
      const el = document.getElementById(`slide-${i}`);
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },
  }
}
</script>
 
<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: wrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  position: relative;

}
 
ul li {
  scroll-snap-align: start;
  flex: 0 0 fit-content;
  position: relative;
}

ul::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}


.filaire__container {
  margin : 0;
  position: relative;
  overflow: hidden;
  height : 20vh;
  width : 100%;
}


.filaire__photo {
  position: relative;
  flex: 0 0 100%;
  width : 100%;
  /* 
  background-color: #f99;
  counter-increment: item; */
}
</style>