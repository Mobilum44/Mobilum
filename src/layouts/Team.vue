<template>
  <div class="TeamPage">
    <section class="TeamContent">
      <slot />
    </section>
  </div>
</template>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
/* 
  --------------------------
  comment changer le background de la page 1 UNIQUEMENT ?
  --> Censé avoir des images qui défilent
  --------------------------
  */

.TeamPage {
    margin: 1rem;
    padding: 1rem;
    
    border : #7C3E66 solid 1px;
    
    opacity: 0.8;
    background-color: #F9F5EB;
    background-image: radial-gradient(#7C3E66 0.5px, #F9F5EB 0.5px);
    background-size: 10px 10px;
    background-repeat : repeat;
}

.TeamContent {
  padding-top: 3rem;
  padding-left: 5rem;
  padding-right: 5rem;
}

</style>