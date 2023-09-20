import App from './App.vue';
import { createApp, h, Fragment } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/Home.vue';
import ContactComponent from './components/Contact.vue';
import AllCountriesComponent from './components/AllCountries.vue';
import CountryDetailComponent from './components/CountryDetail.vue';
import VueAxe from 'vue-axe';

let app = createApp(App);

if(process.env.NODE_ENV === 'development'){
    const VueAxe = require('vue-axe')
    app = createApp({
        render: () => h(Fragment, [h(App), h(VueAxe.VueAxePopup)])
    })
    app.use(VueAxe.default)
}

const routes = [
    /* Startseite */
    { path: '/', component: HomeComponent },
    /* Route zur jeweiligen Seite */
    { path: '/all-countries', component: AllCountriesComponent },
    { path: '/contact', component: ContactComponent },
    /* Route zur Filterung der Länderliste */
    { path: '/all-countries/:searchTerm', component: AllCountriesComponent, props: true },
    /* Route zur Detailsansicht eines bestimmten Landes */
    { path: '/country-detail/:name', component: CountryDetailComponent, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

/* createApp(App).use(router).mount('#app') */
app.use(router).mount('#app')