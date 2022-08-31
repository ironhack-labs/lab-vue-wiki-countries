<template>
            <!-- Country Details (Bootstrap column) -->
            <div class="col-7">
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${newCmpCountry.img}.png`" alt="country flag" />
          
            <h1>{{newCmpCountry.name}}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{{newCmpCountry.capital}}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {{newCmpCountry.area}} km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li v-for="country in newCmpCountry.borders" :key="country.alpha3Code">
                        <router-link class="list-group-item list-group-item-action" :to="`/${country}`">
                            <p>{{country}}</p>
                        </router-link>
                      </li>
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
</template>

<script setup>
import {computed, ref, watch, reactive} from 'vue'
import {useRoute} from 'vue-router'
import countriesData from '../../public/countries.json';

const countryCode = useRoute().params.CountryCode;
const route = useRoute();
const countryShow =reactive({
    name:'',
    capital:'',
    borders:{},
    area:'',
    img:''
});
// getCountryDetail();

const getCountryDetail = (alphaCode) =>{

        const detailCountry= countriesData.find(country=>
                country.alpha3Code===alphaCode.toUpperCase());

        const countryShow={};
                countryShow.name= detailCountry.name.common;
                countryShow.capital= detailCountry.capital[0];
                countryShow.area= detailCountry.area;
                countryShow.borders= detailCountry.borders;
                countryShow.img=detailCountry.alpha2Code.toLowerCase();
                
        return countryShow;
}

// watch(() => route.params.CountryCode, () => {
//   console.debug(`MyCoolComponent - watch route.name changed to ${route.name}`);
//   // Do something here...
// });

const newCmpCountry = computed({

get: () => { 
    // console.log(route.params.CountryCode);
    const test= getCountryDetail(route.params.CountryCode);
    return test;
}
})
// // watch(
// //       () => countryCode,
// //         getCountryDetail(countryCode)
      
// //     )

watch(route.params.CountryCode, (currentValue, oldValue) => {
    debugger;
  console.log(currentValue);
  console.log(oldValue);
});

//console.log(route.params.CountryCode)
// watch(
//       () => route.params.CountryCode,
//         getCountryDetail(route.params.CountryCode)
//     )
// watch(countryCode, (currentValue, oldValue) => {
//   console.log(currentValue);
//   console.log(oldValue);
// }); 



</script>

<style>

</style>