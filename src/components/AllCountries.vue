<template>
  <div class="countries-list">
    <!-- Überschrift -->
    <h1>{{ heading }}</h1>
    <div class="country-cards">
      <!-- Link zur Detailansicht des Landes mit Label für jedes Land -->
      <router-link
        v-for="(country) in countries"
        ref="countryLinks"
        :key="country"
        :to="'/country-detail/' + country.name.common"
        class="card"
        aria-label="Got to detail screen of {{ country.name.common }}"
      >
        <h2>{{ country.name.common }}</h2>
        <!-- Bild mit alternativem Text -->
        <img
          :alt="country.flags.alt"
          :src="country.flags.png"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import jsonCountries from '../assets/countries.json'

let heading = 'All Countries';
/* Sortiert Länder alphabetisch */
let sortedJsonCountries = jsonCountries.sort((a, b) => {
  return a.name.common.localeCompare(b.name.common);
})
/* Setzt alternativen Text falls nicht vorhanden */
sortedJsonCountries.forEach(country => {
  if (!country.flags.alt) {
    country.flags.alt = 'Flag of country ' + country.name.common;
  }
});

export default {
  name: 'AllCountriesComponent',
  props: ['searchTerm'],
  setup(props) {
    let countriesToDisplay = sortedJsonCountries;
    heading = 'All Countries';
    /* Zeigt nur die entsprechenden Länder, wenn ein Suchbegriff vorhanden */
    if (props.searchTerm !== undefined) {
      heading = 'Found Countries for "' + props.searchTerm + '"';
      /* Verwende nur passende Länder */
      countriesToDisplay = countriesToDisplay.filter(country => {
        return country.name.common.includes(props.searchTerm)
      });
      /* Zeigt Fehlermeldung, wenn keine Länder gefunden wurden */
      if (countriesToDisplay.length === 0) {
        heading = 'Nothing found for "' + props.searchTerm + '"';
      }
    }

    return {
      countries: countriesToDisplay,
    }
  },
  data() {
    return {
      heading: heading,
      countriesToDisplay: []
    }
  },
  mounted() {
    // Nachdem die Komponente montiert wurde, den Fokus auf das erste Element setzen, sofern es existiert
    this.$nextTick(() => {
      if (this.$refs.countryLinks && this.$refs.countryLinks.length > 0) {
        const firstLink = this.$refs.countryLinks[0];
        if (firstLink && firstLink.$el) {
          firstLink.$el.focus();
        }

      }
    });
  },
}
</script>

<style scoped>
.countries-list {
  padding: 1em;
}

.card {
  padding: 0.5em;
  width: 350px;
  margin: 0.5em;
  border-radius: 10px;
  border-color: grey;
  border-style: solid;
  border-width: 1px;
  text-decoration: none;
  color: black;
}

.card img {
  width: auto;
  height: 120px;
}

.card h2 {
  max-width: auto;
  margin-left: 0.5em;
}

.country-cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
