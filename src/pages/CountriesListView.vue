<template>
  <div class="container">
    <div class="row">
      <CountryList />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CountryList from "../components/CountriesList.vue";
export default {
  components: {
    CountryList,
  },
};
</script>

<style></style>
