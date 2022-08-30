<template>
  <!--<p class="hola">user is {{ countryCode }}</p> -->
  <div class="hola">
    <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code.toLowerCase()}.png`"
      :alt="`Flag of the ${countryInfo.name}`"
    />
    <div>Name: {{ countryInfo.name }}</div>
    <div>Capital: {{ countryInfo.capital }}</div>
    <div>Code: {{ countryInfo.alpha2Code }}</div>
    <div>Area:{{ countryInfo.area }} KM2</div>
    <router-link
      v-for="border in countryInfo.borders"
      :key="border"
      :to="border.toLowerCase()"
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
/*import CountriesData from "../public/countries.json";*/

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
      fetch("../public/countries.json")
        .then((response) => response.json())
        .then((data) => {
          let desiredCountry = data.filter(
            (country) => country.alpha3Code.toLowerCase() === countryCode
          )[0];
          this.countryInfo = {
            area: desiredCountry.area,
            alpha2Code: desiredCountry.alpha2Code,
            name: desiredCountry.name.common,
            capital: desiredCountry.capital[0],
            borders: desiredCountry.borders,
          };
        });
    }

    this.$watch(
      () => this.$route.params,
      (toParams) => {
        if (toParams.countryCode) {
          fetch("../public/countries.json")
            .then((response) => response.json())
            .then((data) => {
              let desiredCountry = data.filter(
                (country) =>
                  country.alpha3Code.toLowerCase() === toParams.countryCode
              )[0];
              this.countryInfo = {
                area: desiredCountry.area,
                alpha2Code: desiredCountry.alpha2Code,
                name: desiredCountry.name.common,
                capital: desiredCountry.capital[0],
                borders: desiredCountry.borders,
              };
            });
        }
      }
    );
  },
};
</script>

<style>
.hola {
  border: solid;
  font-size: 60px;
}
</style>
