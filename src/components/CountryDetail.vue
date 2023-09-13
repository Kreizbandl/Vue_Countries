<template>
   <div className="country-detail">
        <h1>{{ name }}</h1>
        <img v-if="country.flags.alt" :alt="country.flags.alt" :src="country.flags.png"/>
        <img v-else :alt="'Flag of country ' + country.name.common" :src="country.flags.png"/>
        <p>Population: {{ country.population }}</p>     
    </div>
</template>

<script>
import jsonCountries from '../assets/countries.json'
import { ref } from 'vue'

export default {
    name: 'CountryDetailComponent',
    props: ['name'],
    setup(props){
        // get corresponding country details
        const country = ref(null);
        const foundCountry = jsonCountries.find(country => country.name.common === props.name);
        
        if (foundCountry) {
            country.value = foundCountry;
        }

        return {
            country,
        };
    }
}
</script>
<style scoped>
.country-detail {
    text-align: center;
}
</style>
