<template>
 <router-link v-for="country in countries" :key="country.id"
 :to="country.alpha2Code"></router-link> 

<div class="router-list"></div>

</template>
<script>
export default {
    name: 'CountriesList',
    props:{
        countries: Array,
    },
};
</script> 