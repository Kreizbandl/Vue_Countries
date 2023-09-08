import App from './App.vue';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/Home.vue';
import ContactComponent from './components/Contact.vue';
import AllCountriesComponent from './components/AllCountries.vue';

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/all-countries', component: AllCountriesComponent },
    { path: '/contact', component: ContactComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

createApp(App).use(router).mount('#app')