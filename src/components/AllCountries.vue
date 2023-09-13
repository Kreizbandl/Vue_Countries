<template>
    <div class="countries-list">
    <h1>{{ heading }}</h1>
      <div class="country-cards">
        <router-link :to="'/country-detail/' + country.name.common" class="card" v-for="country in countries" :key="country" aria-label="Got to detail screen of {{ country.name.common }}">
          <h2>{{ country.name.common }}</h2>
          <img v-if="country.flags.alt" :alt="country.flags.alt" :src="country.flags.png"/>
          <img v-else :alt="'Flag of country ' + country.name.common" :src="country.flags.png"/>
        </router-link>
      </div>
    </div>
</template>

<script>
import jsonCountries from '../assets/countries.json'

let heading = 'All Countries';
// sort json countries
let sortedJsonCountries = jsonCountries.sort((a,b) => {
  return a.name.common.localeCompare(b.name.common);
})

export default {
  name: 'AllCountriesComponent',
  props: ['searchTerm'],
  setup(props){
    let countriesToDisplay = sortedJsonCountries;
    heading = 'All Countries';
    // filter if searchTerm is set
    if(props.searchTerm !== undefined){
      heading = 'Found Countries for ' + props.searchTerm;
      countriesToDisplay = countriesToDisplay.filter(country => {
        return country.name.common.includes(props.searchTerm)
      });
      if(countriesToDisplay.length === 0){
        heading = 'Nothing found for ' + props.searchTerm;
      }
    }
    return {
      countries: countriesToDisplay,
    }
  },
  data(){
    return {
      heading: heading
    }
  }
}
</script>

<style scoped>
.countries-list {
  padding: 1em;
}
.card {
    width: 200px;
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
    height: 80px;
}
.card h2 {
    max-width: 160px;
    margin-left: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.country-cards {
    display: flex;
    flex-wrap: wrap;
}
</style>
