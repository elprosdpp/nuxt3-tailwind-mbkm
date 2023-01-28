import { defineNuxtPlugin } from '#app'
import VueSplide from '@splidejs/vue-splide';

// Inisialisasi CSS Library
import "@splidejs/vue-splide/css/skyblue";
import "@splidejs/vue-splide/css/sea-green";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueSplide)
})