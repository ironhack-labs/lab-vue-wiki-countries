<template>
  <div class="container" v-if="countryInfo !== null">
    <h1>{{ countryInfo.name }}</h1>
    <div>
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code}.png`"
        alt=""
      />
      <p>{{ countryInfo.capital[0] }}</p>
      <router-link
        v-for="border in countryInfo.borders"
        :key="border"
        :to="border"
      >
        {{ border }}
      </router-link>
    </div>
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
      this.fetchCountry(countryCode);
    }
  },
  methods:{
    fetchCountry(countryCode){
        fetch(
        `https://ih-countries-api.herokuapp.com/countries/${countryCode}`
      )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.countryInfo = {
            area: data.area,
            name: data.name.common,
            alpha2Code: data.alpha2Code.toLowerCase(),
            capital: data.capital,
            borders: data.borders,
          };
        });
    },
}
};
</script>