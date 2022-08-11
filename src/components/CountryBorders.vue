<template>
  <ul>
    <li v-for="border in borders" :key="border">
      <a :href="getLinkToDetail(border)">{{ getCountryName(border) }}</a>
    </li>
  </ul>
</template>

<script>
import countriesJson from "../../public/countries.json";

export default {
  props: {
    borders: Array,
  },
  methods: {
    getCountryName(alpha3Code) {
      return [...countriesJson].filter((c) => c.alpha3Code === alpha3Code)[0]
        ?.name.common;
    },
    getLinkToDetail(alpha3Code) {
      return "/" + alpha3Code;
    },
  },
};
</script>

<style scope>
li {
  list-style-type: none;
}
</style>
