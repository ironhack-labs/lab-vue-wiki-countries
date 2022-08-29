<template>
<!-- Countries List (Bootstrap column) -->
          <!-- <div class="col-5" style="max-height: 90vh; overflow: scroll">
            <div class="list-group">
              
            </div> -->
          <!-- </div>   -->
    <div>
       <CountriesList

       ></CountriesList> 
       <router-view></router-view>
    </div>      
</template>

<script setup>

import CountriesList from "../components/CountriesList.vue";
// import countriesData from '../../public/countries.json';
import {computed, ref} from 'vue'

// const props= defineProps({
//     availableCountries:[{
//     }]
// })


// const getCountryList = computed({

//   get: () => {
//       const formatCountries=countriesData.map(country=>{
//           let countryID=0;
//           const countryList=[{}]
//           countryID+=1;
//           countryList.name=country.name.common;
//           countryList.alpha3Code=country.alpha3Code;
//           countryList.alpha2Code=country.alpha2Code.toLowerCase();
//           countryList.id=countryID;
          
//           return countryList;
//           })
//       return formatCountries;
//       }
//   });    
//   const availablecountry=getCountryList.value;
  


</script>

<style>

</style>