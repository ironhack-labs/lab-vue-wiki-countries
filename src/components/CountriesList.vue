<template>
  <!-- Countries List (Bootstrap column) -->
          <div class="col-5" style="max-height: 90vh; overflow: scroll">
            <div class="list-group" v-for="country in getCountryList" :key="country.id">
                <router-link class="list-group-item list-group-item-action" :to=country.alpha3Code >
                <img :src = "`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`" />
                <p>{{country.name}}</p>
                </router-link>
            </div>
          </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import countriesData from '../../public/countries.json';
// const props= defineProps({
//     availableCountries:[{
//     }]
// })

const getCountryList = computed({

  get: () => {
      const formatCountries=countriesData.map(country=>{
          let countryID=0;
          const countryList=[{}]
          countryID+=1;
          countryList.name=country.name.common;
          countryList.alpha3Code=country.alpha3Code;
          countryList.alpha2Code=country.alpha2Code.toLowerCase();
          countryList.id=countryID;
          
          return countryList;
          })
      return formatCountries;
      }
  });    

</script>


<style>

</style>