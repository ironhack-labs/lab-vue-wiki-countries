<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">
      <router-link
        v-for="country in countries"
        :key="country.alpha2Code"
        :to="country.alpha3Code"
        class="list-group-item list-group-item-action"
      >
        <img
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
        />
        <p>{{ country.name.common }}</p>
      </router-link>
    </div>
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

<style>
</style>