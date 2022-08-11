<template>
  <CountryDetails />
</template>

<script>
import CountryDetails from "../components/CountryDetails.vue";
export default {
  components: { CountryDetails },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
tr > td:nth-child(1) {
  font-weight: 600;
}
</style>
