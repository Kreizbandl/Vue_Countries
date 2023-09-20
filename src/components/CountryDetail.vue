<template>
  <!-- Informationen eines Landes mit Bild mit alternativem Text -->
  <div className="country-detail">
    <h1>{{ name }}</h1>
    <img
      :alt="country.flags.alt"
      :src="country.flags.png"
    >
    <p>Population: {{ country.population }}</p>
  </div>
</template>

<script>
import jsonCountries from '../assets/countries.json'
import { ref } from 'vue'

export default {
    name: 'CountryDetailComponent',
    props: ['name'],
    setup(props) {
        /* Verwendung von ref für das Land */
        const country = ref(null);
        /* Finden der Länderinformationen mittels Suchbegriff */
        const foundCountry = jsonCountries.find(country => country.name.common === props.name);
        /* Setzt alternativen Text falls nicht vorhanden */
        if (!foundCountry.flags.alt) {
            foundCountry.flags.alt = 'Flag of country ' + foundCountry.name.common;
        }
        /* Zuweisung des Landes an ref, wenn es gefunden wird */
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
