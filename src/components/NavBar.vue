<template>
    <nav className='navbar'>
        <!-- Logo-Link mit beschreibendem Label und alternativem Text -->
        <router-link to="/">
            <img alt="Logo of the website all-countries" src="../assets/logo.png" />
        </router-link>

        <ul>
            <li>
                <!-- Eingabefeld für die Suche mit beschreibendem Label und auslösbar über die Enter-Taste -->
                <input type="text" id="search" name="search" aria-label="Enter a country to search for" v-model="searchTerm"
                    @keydown.enter="navigateToSearch" />
                <!-- Link zum Auslösen der Suche mit beschreibendem Label -->
                <router-link :to="searchTerm ? `/all-countries/${searchTerm}` : '/'"
                    aria-label="Search for Countries">Search</router-link>
            </li>
            <li>
                <!-- Link zur Liste alle Länder mit beschreibendem Label -->
                <router-link to="/all-countries" aria-label="Go to all countries screen">All Countries</router-link>
            </li>
            <li>
                <!-- Link zum Kontaktformular mit beschreibendem Label -->
                <router-link to="/contact" aria-label="Go to the contact form">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            searchTerm: '',
        }
    },
    methods: {
        /*  Navigation zur Länderliste mit dem eingegebenen Suchbegriff  */
        navigateToSearch() {
            if (this.searchTerm) {
                this.$router.push('/all-countries/' + this.searchTerm);
            }
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
