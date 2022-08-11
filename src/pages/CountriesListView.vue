<template>
  <!-- Countries List (Bootstrap column) -->
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group text-center">
      <CountryList />
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
