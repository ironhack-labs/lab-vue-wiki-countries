<template>
  <!-- Using individual data properties to store data from api -->
  <!-- <div>
    <img
      v-bind:src="`https://flagcdn.com/w320/${alpha2Code.toLowerCase()}.png`"
      alt=""
      class="mb-5"
    />
    <h1>{{ name }}</h1>
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <p class="fw-bold">Capital</p>
        <p class="me-5">{{ capital }}</p>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <p class="fw-bold">Area</p>
        <p class="me-5">{{ area }} km2</p>
      </li>
      <li class="list-group-item">
        <p class="fw-bold">Borders:</p>
        <p v-if="borders.length === 0">
          This country has no borders <br />
          Who needs a border when you got the Wu Tang Clan. <br />
          <strong>Wu Tang, unifying societies since 1992!</strong>
        </p>
        <p v-else v-for="(border, index) in borders" :key="index">
          <router-link :to="`/list/${border}`">{{ border }}</router-link>
        </p>
      </li>
    </ul>
  </div> -->

  <!-- Using an object to store all data properties and use it on template -->
  <div>
    <img
      v-bind:src="`https://flagcdn.com/w320/${alpha2Code.toLowerCase()}.png`"
      alt=""
      class="mb-5"
    />
    <h1>{{ countryInfo.name.common }}</h1>
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <p class="fw-bold">Capital</p>
        <p class="me-5">{{ countryInfo.capital[0] }}</p>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <p class="fw-bold">Area</p>
        <p class="me-5">{{ countryInfo.area }} km2</p>
      </li>
      <li class="list-group-item">
        <p class="fw-bold">Borders:</p>
        <p v-if="countryInfo.borders.length === 0">
          This country has no borders <br />
          Who needs a border when you got the Wu Tang Clan. <br />
          <strong>Wu Tang, unifying societies since 1992!</strong>
        </p>
        <p v-else v-for="(border, index) in countryInfo.borders" :key="index">
          <router-link :to="`/list/${border}`">{{ border }}</router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CountriesDetails",

  data() {
    return {
      name: "",
      capital: "",
      alpha3Code: "",
      area: "",
      borders: [],
      alpha2Code: "",

      // Pass data from API on an object
      countryInfo: {},
    };
  },

  methods: {
    async getCountryByAlphaCode() {
      // Apuntamos con el thos$route.params a el valor de la url que queremos sacar, debido a que necesitamos el countryCode debemos guardar el valor de ese codigo deentro de un formato de dato data() para poder usarlo.
      this.alpha3Code = this.$route.params.alpha3Code;
      const response = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${this.alpha3Code}`
      );

      const finalResponse = await response.json();

      console.log(finalResponse);

      this.name = finalResponse.name.common;
      this.capital = finalResponse.capital[0];
      this.area = finalResponse.area;
      this.borders = finalResponse.borders;
      this.alpha2Code = finalResponse.alpha2Code;

      this.countryInfo = finalResponse;
    },
  },
  mounted() {
    this.getCountryByAlphaCode();
  },
  computed: {
    countryCode() {
      return this.$route.params.alpha3Code;
    },
  },

  //Watch structure
  // Watch en su maximo efecto, moniteroa el estado de una funcion en base a su reactividad. (REACTIVIDAD === cambios en data).
  // WATCH SYNTAX
  // Dentro del watch object, podemos especiicar una funcion que lo que hace ees monitorea otra funcion. 10/10 la funcion dentro dl watch va a tener el nombre de otra funcion que estes usando en tu archivo.
  // Esta funcion que esta moniteronadose, recibe 2 parametros. El primer param es el nuevo valor y el segundo param es el valor antiguo.
  //   watch: {
  //   nameOfaFunctionThatYouWillName(newParam, oldParam){}
  // },

  watch: {
    countryCode(newCountryCode) {
      this.getCountryByAlphaCode();
    },
  },
};
</script>

<style></style>
