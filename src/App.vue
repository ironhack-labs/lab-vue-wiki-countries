<template>
  <NavBar> </NavBar>
  <div class="container-box">
    <div class="left">
      <CountriesList :countries="countriesListReduced"> </CountriesList>
    </div>
    <div class="right">
      <CountryDetails></CountryDetails>
    </div>
   </div>
 </template>
   <router-view />

<script>
import NavBar from "./components/NavBar.vue";
import CountriesList from "./components/CountriesList.vue";
import CountryDetails from "./components/CountryDetails.vue";
import json from "../public/countries.json";


export default {
  data() {
    return {
      countriesJson: json,
    };
  },
  computed: {
    countriesListReduced() {
      let id = 0;
      let urlRoute = "https://flagpedia.net/data/flags/icon/72x54/";

      return this.countriesJson.map((countries) => {
        return {
          countryId: id++,
          countryName: countries.name.official,
          countryAlpha2Code: countries.alpha2Code.toLowerCase(),
          countryAlpha3Code: countries.alpha3Code,
          countryImageURL:
            urlRoute + countries.alpha2Code.toLowerCase() + ".png",
        };
      });
    },
  },
  components: { NavBar, CountriesList, CountryDetails },
};
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.app {
  text-align: center;
}

.app-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .app-logo {
    animation: app-logo-spin infinite 20s linear;
  }
}

.app-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
.container-box {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.left {
  width: 40%;
  height: 100%;
  text-align: center,
}
.right {
  width: 60%;
   height: 100%;

  text-align: center,
}


.app-link {
  color: #61dafb;
}

@keyframes app-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
