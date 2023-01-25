// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  app: {
    head: {
      title: 'Merdeka Belajar Kampus Merdeka | Universitas Ngudi Waluyo',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Orientasi Kece Mahasiswa Baru, OKMABA, UNW, OKMABA UNW, okmaba unw, ospek unw' }
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
    }
  }
})
