<template>
  <Layout>
    <h1>Contact</h1>
    
    <div class ="base">
<p> Nous ne travaillons pas avec les particuliers </p>
   <div class="content">
     <div class ="content_box">
        <p> Zone où il y aura le formulaire de contact</p>
     </div>
     
     <div class ="content_box">
       <!-- Mettre les informations en colonne -->
       <p> Les coordonnées de nos différents services : </p>
          <div class ="services_box">
          <!-- Mettre les informations en colonne -->
            <div class="service">
              <!-- Mettre les informations en colonne-->
              <h3> Commerce </h3>
              <p> Mail </br> Téléphone </p>
            </div>
            
            <div class="service">
              <h3> Fournisseurs </h3>
              <p> Mail </br> Téléphone </p>
            </div>
            
            <div class="service">
              <h3> Comptabilité </h3>
              <p> Mail </br> Téléphone </p>
            </div>
            
          </div>
        </div>
    </div>
     <p> Tous nos services sont joignables du lundi au vendredi, .... </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
  },
};
</script>

<style scoped>

.base {
  text-align: center;
  display : flex;
  flex-direction : column;
  align-items : space-between;
}

.content {
  display : flex;
  flex-direction : row;
  justify-content : left;
  gap : 20px;
    justify-content : space-evenly;
}

.content_box {
  display : flex;
  flex-direction : column;
  align-items : center;
}

.services_box {
  width : 60%;
  display : flex;
  flex-direction : column;
  justify-content : space-evenly;
}

.service {
  background : pink;
  border : solid aquamarine;
  border-radius : 8px;
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-bottom : 10px;
  font-size : 14px;
  padding-left : 7rem;
  padding-right : 7rem;
}

h3 {
  margin : 0;
  padding : 0;
}
</style>