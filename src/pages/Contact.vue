<template>
  <Layout>
    <template #slot_image>
      <section class="slot_image">
        <h1>Contact</h1>
      </section>
    </template>

    
    <div class="base">
      <div class="content">
        <div class="content_box">
          <Form />
        </div>
     
        <div class="content_box">
          <!-- Mettre les informations en colonne --> 
          <p> Nous ne travaillons pas avec les particuliers </p>      
          <div class="services_box">
            <p>
              Nous sommes joignables du lundi au vendredi, <br /> de 9h à 12h30 et de 14h à 18h. <br /><br /><br />
              Les coordonnées de nos différents services :
            </p>
            <!-- Mettre les informations en colonne -->
            <div class="service">
              <!-- Mettre les informations en colonne-->
              <h3> Commerce </h3>
              <p> contact@mobilum-france.com <br> +33(0)2 51 72 90 22 </p>
            </div>
          
            
            <div class="service">
              <h3> Facturation </h3>
              <p> fournisseurs@mobilum-france.com <br> Téléphone </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_box">
      <Itinary />
    </div>
  </Layout>
</template>

<script>
import Form from "@/components/Form.vue";
import Itinary from "@/components/MapsAdress.vue";

export default {
  components: {
    Form,
    Itinary,
  },
  
  metaInfo: {
    title: "Contact",
  },
};
</script>

<style scoped>


.slot_image {
    background : url("../assets/img/fond_entreprise.jpg") center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
}


.base {
  text-align: center;
  display : flex;
  flex-direction : column;
  align-items : space-between;
}

.content {
  display : flex;
  flex-direction : row;
  justify-content : center;
  align-items : stretch;
}

.content_box {
  display : flex;
  flex-direction : column;
  margin : 2rem;
}

.services_box {
  display : flex;
  flex-direction : column;
  justify-content :center;
  align-items : center;
  height : 100%;
}

.service {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius : 8px;
  background-color :#F5EBE0;
  width : 18rem;
  display : flex;
  flex-direction : column;
  align-items : center;
  margin : 1rem;
  font-size : 14px;
  padding : 1rem;
  color : #1A949D;
}

.services, h3 {
  font-size : 1.2rem;
  margin : 0;
  padding : 0;
  color : black;
  text-decoration : none;
}

.services, p {
  color : black;
}


</style>