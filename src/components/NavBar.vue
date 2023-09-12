<template>
   <nav className='navbar'>
        <router-link to="/">
            <img alt="Logo of the website all-countries" src="../assets/logo.png"/>
        </router-link>
                
        <ul>
            <li>
                <label for="search">Search: 
                    <input type="text" id="search" name="search" v-model="searchTerm"/>
                </label>
                <router-link :to="'/all-countries/' + searchTerm">Search</router-link>
            </li>
            <li>
                <router-link to="/all-countries">All Countries</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return{
        searchTerm: '',
    }
  }
}
</script>

<style scoped>
.navbar {
    background-color: #F5F5F5;
    height: 64px;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}

.navbar ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
}

.navbar a {
    color: inherit;
    text-decoration: none;
}
</style>
