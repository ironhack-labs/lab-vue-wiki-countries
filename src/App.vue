<template>
  <div class="app">
    <NavBar></NavBar>
    
  </div>
</template>

<script>

import NavBar from "./components/NavBar.vue";
import CountryDetails from "./components/CountryDetails.vue";
import ContriesList from "./components/ContriesList.vue";

export default {
  name: "App",
  components: {
    'NavBar': NavBar,
    'CountryDetails': CountryDetails,
    'ContriesList': ContriesList,
  }
}
</script>

<style>


</style>
