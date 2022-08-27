<template>
  <div class="">
    <div class="list-group-item">
      <router-link v-for="country in countries" :key="country.id" :to="country.alpha3Code">
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" :alt="`Flag of ${country.name.common}`">
        <p>{{ country.name.common }}</p>
      </router-link>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountriesList',
  props: {
    countries: Array,
  },
}
</script>

<style>
  /* .countries-list-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  } */
</style>