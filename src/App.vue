<template>
  <div class="app">
    <NavBar class="navbar"></NavBar>
    <div class="mainbody">
      <CountriesList
        class="countries-list"
        :countries="getCountry"
      ></CountriesList>
      <router-view class="country-detail" />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import CountriesList from "./components/CountriesList.vue";
import CountriesData from "../public/countries.json";

export default {
  name: "App",
  components: {
    NavBar: NavBar,
    CountriesList: CountriesList,
  },
  data() {
    return {
      countries: CountriesData,
    };
  },
  computed: {
    getCountry() {
      return this.countries.map((country) => {
        let countryId = 0;
        return {
          id: countryId++,
          name: country.name.common,
          alpha2Code: country.alpha2Code,
          alpha3Code: country.alpha3Code,
        };
      });
    },
  },
};
</script>

<style>
.navbar{
  height: 100px;
  background-color: rgb(13, 226, 138);
}
.mainbody {
  display: flex;
  justify-content: space-between;
}
.country-detail {
  margin: 70px;
  text-align: center;
  font-size: 30px;
  height: 1000px;
  width: 80vw;
}
.countries-list {
  text-align: center;
  width: 20vw;
  height: 62vw;
  overflow-y: scroll;
  border: solid rgb(13, 226, 138);
}

</style>
