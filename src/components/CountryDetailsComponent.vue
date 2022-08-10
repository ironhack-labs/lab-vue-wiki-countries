<template>
  <!-- Country Details (Bootstrap column) -->
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
              <li><a href="/AND">Andorra</a></li>
              <li><a href="/BEL">Belgium</a></li>
              <li><a href="/DEU">Germany</a></li>
              <li><a href="/ITA">Italy</a></li>
              <li><a href="/MCO">Monaco</a></li>
              <li><a href="/ESP">Spain</a></li>
              <li><a href="/CHE">Switzerland</a></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    // country: Object,
  },

  data() {
    return {
      country: {},
    };
  },

  created() {
    this.country = {
      name: {
        common: "France",
      },
      alpha2Code: "FR",

      capital: ["Paris"],

      area: 551695,

      borders: ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
    };
  },

  computed: {
    getFlag() {
      return `https://flagcdn.com/w320/fr.png`;
    },
    getCapital() {
      return this.country?.capital[0];
    },
  },
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
