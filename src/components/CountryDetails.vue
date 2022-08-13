<template>
  <img
    :src="`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code}.png`"
    alt="country flag"
    style="width: 300px"
  />
  <h1>{{ name }}</h1>
  <table class="table">
    <thead></thead>
    <tbody>
      <tr>
        <td style="width: 30%">Capital</td>
        <td>{{ capital }}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>{{ area }} km <sup>2</sup></td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>
          <ul>
            <li v-for="border in borders" :key="border">
                <a
                    :href="`/country/${border}`">
                    {{ border }}
                </a>
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
      countryId: "",
      name: "",
      capital: "",
      borders: [],
      flag: "",
      area: "",
    };
  },
  methods: {
    async getId() {
      this.countryId = this.$route.params.id;
      const res = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${this.countryId}`
      );
      const finalRes = await res.json();
      this.name = finalRes.name.common;
      this.area = finalRes.area;
      this.borders = finalRes.borders;
      this.capital = finalRes.capital[0];
      this.alpha2Code = finalRes.alpha2Code.toLowerCase();
    },
  },
  mounted() {
    this.getId();
  },
  computed: {
    myId() {
      return this.$route.params.id;
    },
  },
  watch: {
    myId() {
      this.getId();
    },
  },
};
</script>

<style></style>