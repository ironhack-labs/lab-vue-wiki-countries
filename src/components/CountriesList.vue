<template>
  <div class="router-list">
    <router-link
      v-for="country in countries"
      :key="country.id"
      :to="`/${country.alpha3Code}`"
    >
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`"
        alt=""
      />
      <p>{{ country.name }}</p></router-link
    >
  </div>
</template>
<script>
export default {
  name: "CountriesList",
  props: {
    countries: Array,
  },
};
</script> 