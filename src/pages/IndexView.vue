<template>
  <div class="app">
    <div className="container">
      <div className="row">
        <CountriesListView />
        <CountriesDetailsView />
      </div>
    </div>
  </div>
</template>

<script>
import CountriesListView from "./CountriesListView.vue";
import CountriesDetailsView from "./CountryDetailsView.vue";

export default {
  data() {
    return {
      countries: [],
    };
  },
  components: {
    CountriesListView,
    CountriesDetailsView,
  },
};
</script>

<style></style>
