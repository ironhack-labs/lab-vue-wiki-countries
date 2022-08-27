<template>
  <div v-if="home">
    <HomeView></HomeView>
  </div>
  <div v-else>
    <div class="containerData">
      <div><img :src="countriesListDetail[0].countryImageURL" />
      <h1>{{ countriesListDetail[0].countryName }}</h1>
      </div>
      <div>
        <table>
          <tr>
            <th>Capital</th>
            <td>{{ countriesListDetail[0].countryCapital }}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>{{ countriesListDetail[0].countryArea }} km2</td>
          </tr>
          <tr>
            <th>Borders</th>
            <td>
              <div
                v-for="country in countriesListDetail[0].countryBorders"
                :key="country"
              >
                <router-link :to="`/${country}`"> {{ country }}</router-link>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import json from "../../public/countries.json";
import HomeView from "./HomeView.vue";

export default {
  data() {
    return {
      countriesJson: json,
      home: true,
      selectedCountry: "ESP",
    };
  },
  watch: {
    "$route.params"(newParams) {
      console.log(this.countriesListDetail);
      if (newParams.id) {
        this.home = false;
        this.selectedCountry = newParams.id;
      }
    },
  },
  computed: {
    countriesListDetail() {
      let urlRoute = "https://flagpedia.net/data/flags/icon/72x54/";

      return this.countriesJson
        .filter((countries) => countries.alpha3Code === this.selectedCountry)
        .map((countries) => {
          return {
            countryImageURL:
              urlRoute + countries.alpha2Code.toLowerCase() + ".png",
            countryName: countries.name.official,
            countryAlpha2Code: countries.alpha2Code,
            countryAlpha3Code: countries.alpha3Code,
            countryArea: countries.area,
            countryBorders: countries.borders,
            countryCapital: countries.capital[0].toString(),
          };
        });
    },
  },
  components: { HomeView },
};
</script>
<style>
.containerData {
  margin: 30px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 100%;
   align-items: center;
   text-align: center;
   justify-content: stretch;
}
.containerData img{

 width: 50%;
 height: auto;

}
.containerData div{
  width: 100%;
}
table {
  width: 100%;
}
tr {
 border-bottom: 1px solid grey;
 text-align: center;
 vertical-align: top;
}
</style>
