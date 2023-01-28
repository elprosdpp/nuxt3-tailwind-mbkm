<template>
  <div>
    <!-- Jumbotron Section -->
    <section class="bg-[#121180] rounded-bl-[8rem]">
      <!-- Ornament -->
      <div class="w-full flex justify-between top-0 z-0">
        <div class="">
          <img
            src="@/assets/img/hero-top-left-image.svg"
            alt="Ornament"
            class="absolute left-0 w-[31rem]"
          />
        </div>
        <div class="float-right">
          <img
            src="@/assets/img/hero-top-right-image.svg"
            alt="Ornament"
            class="absolute right-0 w-[31rem]"
          />
        </div>
      </div>

      <!-- Content Jumbotron -->
      <div class="container mx-auto max-w-xl relative z-20">
        <div class="flex justify-center items-center pt-[10rem]">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-xs px-1 py-1 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            OKMABA
          </button>
          <p class="text-white text-sm">
            Strapi Cloud is coming soon ☁️
            <span class="text-violet-500">Join the waitlist</span>
          </p>
        </div>
        <div class="flex justify-center pt-7">
          <h1 class="text-white font-bold text-[3.35rem] text-center">
            Manage Any Content.
            <span
              class="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400"
              >Anywhere.</span
            >
          </h1>
        </div>

        <div class="py-8">
          <p class="text-gray-400 text-center">
            Strapi is the leading open-source headless CMS. It’s 100% JavaScript and fully
            customizable.
          </p>

          <div class="flex justify-center items-center py-8">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Purple to Blue
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Cyan to Blue
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <Splide :options="customOptions" aria-label="My Favorite Images">
    <SplideSlide>
      <img
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Sample 1"
      />
    </SplideSlide>
    <SplideSlide>
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Sample 2"
      />
    </SplideSlide>
    <SplideSlide>
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Sample 2"
      />
    </SplideSlide>
    <SplideSlide>
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Sample 2"
      />
    </SplideSlide>
  </Splide>
</template>

<script setup>
// or other themes
// import "@splidejs/vue-splide/css/skyblue";
// import "@splidejs/vue-splide/css/sea-green";

definePageMeta({
  layout: "default",
});
// const carousel: CarouselInterface = new Carousel(items, options);

const customOptions = {
  rewind: true,
  gap: "1rem",
  perPage: 3,
  autoplay: true,
};
// onMounted(() => {
//   initModals();
//   initCarousels();
// });
</script>

<style scoped></style>
