<template>
  <p class="hola">user is {{ countryCode}}</p>
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
      console.log(countryCode);
    }
  },
};
</script>

<style>
.hola{
    display: flex;
    justify-content: right;
    border: solid;
    font-size: 60px;
}
</style>