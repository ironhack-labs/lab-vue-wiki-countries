<template>
  <CountryDetailsComponent />
</template>

<script>
import CountryDetailsComponent from "../components/CountryDetailsComponent.vue";
export default {
  components: { CountryDetailsComponent },
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
