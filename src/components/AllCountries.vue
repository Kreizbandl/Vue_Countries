<template>
    <div class="countries-list">
    <h1>All Countries</h1>
      <div class="country-cards">
        <router-link :to="'/country-detail/' + country.name.common" class="card" v-for="country in countries" :key="country">
          <h2>{{ country.name.common }}</h2>
          <img :alt="country.flags.alt" :src="country.flags.png"/>
          <!-- TODO: alt text if empty alt -->
          <!-- <img v-if="country.flags.png" :alt="country.flags.alt" :src="country.flags.png"/> -->
          <!-- <img v-else :alt="country.name.common" :src="country.flags.png"/> -->
        </router-link>
      </div>
    </div>
</template>

<script>
import jsonCountries from '../assets/countries.json'

// sort json countries
let sortedJsonCountries = jsonCountries.sort((a,b) => {
  return a.name.common.localeCompare(b.name.common);
})

export default {
  name: 'AllCountriesComponent',
  props: ['searchTerm'],
  setup(props){
    let countriesToDisplay = sortedJsonCountries;
    
    // filter if searchTerm is set
    if(props.searchTerm !== undefined){
      countriesToDisplay = countriesToDisplay.filter(country => {
        return country.name.common.includes(props.searchTerm)
      });
    }
    return {
      countries: countriesToDisplay
    }
  },
  data(){
    return {
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
