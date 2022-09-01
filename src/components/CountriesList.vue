<template>
  <div>
    <router-link class = "country" v-for="pais in countries" :key="pais.id" :to="pais.alpha3Code.toLowerCase()">
      <img
        class = "country-image"
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
.country-image{
  height: 80px ;
  border: solid red;
}
</style>