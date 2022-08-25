<template>
  <div class="countries-list-container">
    <div>
      <router-link v-for="country in countries" :key="country.id" :to="country.alpha3Code">
        <img :src="`https://flagmedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" :alt="`Flag of ${country.name.common}`">
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

</style>