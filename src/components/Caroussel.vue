<template>
  <div>
    <ul>
      <li v-for="(path, i) in img" :key="i">
        <button v-if="i > 0" @click="scrollTo(i - 1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
        </button>
        <g-image :src="path" :id="`slide-${i}`" />
        <button v-if="i + 1 < img.length" @click="scrollTo(i + 1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
        </button>
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
  flex-direction: row;
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
 
ul li button {
  cursor: pointer;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  z-index: 1;
  transition: all 0.2s ease-in-out;
}
 
ul li button:first-child {
  left: 1rem;
}
 
ul li button:last-child {
  right: 1rem;
}
 
ul li:hover button {
  opacity: 1;
  transition: all 0.2s ease-in-out;
}
</style>