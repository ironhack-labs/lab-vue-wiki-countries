<template>
  <div>
    <div  class="scroll">
      <router-link
        v-for="country in countries"
        :key="country.countryId"
        :to="`/${country.countryAlpha3Code}`"
     >
        <div class="countryRow">
          <div class="countriesText">
            <img :src="country.countryImageURL" />
          </div>
          <div class="countriesText">{{ country.countryName }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countries: Array,
  },
  //aqui hay que crear una prop de datos de countries, en el app.vue hay que pillar el listado de cpuntry codes y meterlo a saco
  //en el detalle de paises hay que adaptarse con un watcher, de cara a modificar la info una vez se recibe unos nuevos params
  //created y watcher idealmente
  methods: {
    gotoCountryDetail(alpha2Code) {
      this.$router.push({
        name: "countrydetail",
        params: {
          id: alpha2Code,
        },
      });
    },
  },
};
</script>
<style scoped>
.countriesText {
  width: 100%;
  text-align: center;
}
.countryRow {
  margin-left: 30px;
  padding: 40px;
  border-width: 2px 2px 0px 2px ;
  border-style: solid ;
  border-color: grey;
}
.scroll{
    height:1000px;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>
