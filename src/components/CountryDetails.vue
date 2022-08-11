<template>
  <div class="col-7 text-center">
    <img :src="getFlag" alt="country flag" style="width: 300px" />
    <h1>{{ country.name.common }}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ getCapital }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ this.country.area }} km<sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <CountryBorders :borders="this.country.borders" />
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import countriesJson from "../../public/countries.json";
import CountryBorders from "./CountryBorders.vue";
export default {
  data() {
    return {
      country: {},
    };
  },
  created() {
    this.country = this.fetchCountry();
  },
  methods: {
    fetchCountry() {
      return [...countriesJson].filter(
        (c) => this.$route.params.alphaCode === c.alpha3Code
      )[0];
    },
  },

  computed: {
    getFlag() {
      return `https://flagcdn.com/w320/${this.country.alpha2Code.toLowerCase()}.png`;
    },
    getCapital() {
      return this.country?.capital[0];
    },
  },
  components: { CountryBorders },
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
