<template>
  <img
    class="flag"
    :src="`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`"
    alt=""
  />
  <h1>{{ name }}</h1>
  <table>
    <thead></thead>
    <tbody>
      <tr class="d-flex flex-column">
        <td class="fw-bold">Capital:</td>
        <td>{{ capital }}</td>
      </tr>
      <tr class="d-flex flex-column">
        <td class="fw-bold">Area:</td>
        <td>{{ area }}</td>
      </tr>
      <tr class="d-flex flex-column">
        <td class="fw-bold">Borders:</td>
        <td>
          <ul>
            <li v-for="(border, index) in borders" :key="index">
              {{ borders }}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      capital: "",
      alphacode: "",
      area: "",
      borders: [],
      alpha2Code: "",
    };
  },
  methods: {
    async getCountryByAlphaCode() {
      // console.log(this.$route);
      // console.log(this.$route.params);
      // console.log(this.$route.params.alpha3Code);
      this.alphacode = this.$route.params.alpha3Code;
      const response = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${this.alphacode}`
      );
      const finalResponse = await response.json();
      console.log(finalResponse);
      this.name = finalResponse.name.common;
      this.capital = finalResponse.capital[0];
      this.area = finalResponse.area;
      this.borders = finalResponse.borders;
      this.alpha2Code = finalResponse.alpha2Code;
    },
  },
  mounted() {
    this.getCountryByAlphaCode();
  },
  computed: {
    countryCode() {
      return this.$route.params.alpha3Code;
    },
  },
  watch: {
    countryCode(newCountryCode) {
      this.getCountryByAlphaCode();
    },
  },
};
</script>

<style></style>
