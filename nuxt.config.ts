// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  typescript: {
    shim: false
  },

  runtimeConfig: {
    API_URL: "http://panel-bkapp.unw.ac.id:2324/api",
    public: {
      API_URL: "http://panel-bkapp.unw.ac.id:2324/api",
    }
  },

  app: {
    head: {
      title: 'Merdeka Belajar Kampus Merdeka | Universitas Ngudi Waluyo',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Merdeka Belajar Kampus Merdeka Universitas Ngudi Waluyo, MBKM UNW, Merdeka Belajar UNW, Universitas Ngudi Waluyo MBKM, MBKM Ngudi Waluyo' }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600;700;800&display=swap",
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
    },
  }
})
