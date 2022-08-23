<template>

 <!-- divCountries List (Bootstrap column) -->
 <div v-for="data in my_myJson" :key="data.alpha2Code">
 <router-link to="data.alpha2Code" ></router-link>
 </div>

</template>
<script>
export default {
    name: 'CountriesList',
    props:
};
</script>