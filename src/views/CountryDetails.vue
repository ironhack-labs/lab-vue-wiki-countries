<template>
<h1>Esta es la vista Details</h1>
    
</template>
<script>
import countriesData from '../../public/countries.json';
export default {
    name: 'CountryDetails',
     data() {
    return {
      countries: countriesData,
    };
},
};
//seguir con created
</script>