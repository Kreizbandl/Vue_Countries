<template>
   <div className="country-detail">
        <h1>{{ name }}</h1>
        <img :alt="country.flags.alt" :src="country.flags.png"/>
        <!-- TODO: img if no alt text -->
        <!-- { x.flags.alt ? (
                <img alt={ x.flags.alt } src={ x.flags.png }></img>
            ) : (
                <img alt={ 'Flag of country ' + x.name.common } src={ x.flags.png }></img>
            )}-->
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
