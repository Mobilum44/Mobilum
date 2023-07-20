<template>
  <div class="Filaire">
    <div class="filaire__container">
      <!--
      <g-image
        class="filaire"
        alt="photo mobilier urbain"
        fit="cover"
        :src="path"
      />-->
      
      <g-image
        v-if="edge.node.filaire"
        alt="photo mobilier urbain"
        :src="edge.node.filaire"
      />
    </div>
  </div>
</template>

  <!--
 <page-query>

query Collection ($id: ID!) {
  collection (id: $id) {
    title
    belongsTo(sortBy: "sub_category", order: ASC) {
      edges {
        node {
          ...on Product {
              filaire
          }
        }
      }
    }
  }
}
</page-query>
-->
 
<style scoped>
.filaire__container {
  border : solid blue;
  margin : 0;
  position: relative;
  overflow: hidden;
  height : 20vh;
  width : 30vw;
  display : flex;
  flex-direction : wrap;
}

</style>