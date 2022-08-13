<template>
  <div>
    <!-- Bootstrap container wrapper div -->
    <div class="container">
      <!-- Bootstrap row wrapper div -->
      <div class="row">
        <!-- Countries List (Bootstrap column) -->
        <div class="col-5" style="max-height: 90vh; overflow: scroll">
          <div class="list-group">
            <router-link
              class="list-group-item list-group-item-action"
              v-for="country in countries"
              :to="`/country/${country.alpha3Code}`"
              :key="country.alpha3Code"
            >
              <img
                :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
              />
              <p>{{ country.name.common }}</p>
            </router-link>
          </div>
        </div>

        <!-- Country Details (Bootstrap column) -->
        <div class="col-7">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        countries: []
      }
    },
    methods: {
      getCountries() {
        fetch('https://ih-countries-api.herokuapp.com/countries')
          .then(response => response.json())
          .then(data => this.countries = data)
          .then(this.renderComponent = true)
      }
    },
    mounted(){
      this.getCountries()
    }
}
</script>

<style></style>