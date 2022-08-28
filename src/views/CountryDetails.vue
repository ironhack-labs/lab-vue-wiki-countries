<template>
  <div class="countryview" v-if="countryInfo !== null">
    <img
      :alt="`Flag of the ${countryInfo.name}`"
      :src="`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code}.png`"
    />
    <h1>{{ countryInfo.name }}</h1>
    <p>Capital: {{ countryInfo.capital }}</p>
    <p>Area: {{ countryInfo.area }}km2</p>
    <router-link
      v-for="border in countryInfo.borders"
      :key="border"
      :to="border"
    >
      <ul>
        {{
          border
        }}
      </ul>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CountryDetails",
  data() {
    return {
      countryInfo: null,
    };
  },
  created() {
    const { countryCode } = this.$route.params;
    if (countryCode) {
      fetch(` https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
        .then((response) => response.json())
        .then((data) => {
          this.countryInfo = {
            area: data.area,
            alpha2Code: data.alpha2Code.toLowerCase(),
            name: data.name.common,
            capital: data.capital[0],
            borders: data.borders,
          };
        });
    }
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        if (toParams.countryCode) {
          fetch(
            ` https://ih-countries-api.herokuapp.com/countries/${toParams.countryCode}`
          )
            .then((response) => response.json())
            .then((data) => {
              this.countryInfo = {
                area: data.area,
                alpha2Code: data.alpha2Code.toLowerCase(),
                name: data.name.common,
                capital: data.capital[0],
                borders: data.borders,
              };
            });
        }
      }
    );
  },
};
</script>

<style>
.countryview {
  text-align: center;
  margin: 50px 0 0 200px;
}
</style>