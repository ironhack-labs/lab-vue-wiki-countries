<template>
  <div class="container">
    <h1>Esta es la vista de detalle</h1>
    <ul>
      <li>{{}}</li>
      <li>{{}}</li>
      <li>{{}}</li>
      <li>{{}}</li>
    </ul>
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
  created(){
    const {countryCode} = this.$route.params;

    if (countryCode) {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${country.alpha3Code}`)
        .then ((Response)=> Response.json())
        .then ((data)=> {
         this.countryInfo ={
            area:data.area,            
            name: data.name.common,
            alpha2Code:data.alpha2Code.toLowerCase(),
            capital: data.capital,
            borders: data.borders,
          }
      });
    }
  },
}

</script>