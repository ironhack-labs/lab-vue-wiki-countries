<template>
  <div>
    <router-link v-for="pais in countries" :key="pais.id" :to="pais.alpha3Code.toLowerCase()">
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/${pais.alpha2Code.toLowerCase()}.png`"
        :alt="`Flag of ${pais.name}`"
      />
      <p>{{ pais.name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CountriesListView",
  props: {
    countries: Array,
  },
};
</script>

<style>
</style>