<template>
  <div>
    <!-- Heading Title and SEO Optimalisasi -->
    <Head>
      <Title>{{ detailNews.data.title }} | MBKM Universitas Ngudi Waluyo</Title>
      <Meta name="description" :content="detailNews.data.excerpt" />
    </Head>

    <!-- Jumbotron Section -->
    <section class="z-0">
      <div
        class="w-full h-[70vh] bg-cover bg-center"
        :style="imageDetail(detailNews.data.image)"
      >
        <div
          class="w-full h-full flex justify-center items-center backdrop-brightness-50 bg-[#121180]/40"
        >
          <div class="container mx-auto p-6 lg:p-0">
            <nav class="flex mb-4" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                  <a
                    href="#"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                      ></path>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <a
                      href="#"
                      class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                      >Detail Berita</a
                    >
                  </div>
                </li>
              </ol>
            </nav>
            <div class="text-white text-4xl max-w-[50rem] font-semibold">
              {{ detailNews.data.title }}
            </div>
            <div class="text-gray-200 text-sm my-4 max-w-[50rem] font-semibold">
              {{ detailNews.data.newsCategory.name }}
            </div>
            <NuxtLink
              to="/berita"
              id="boderNoneButton"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Kembali
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section
      class="container mx-auto bg-white shadow-md z-10 relative rounded-lg -mt-[5rem] lg:py-14"
    >
      <div class="flex flex-col gap-10 p-10 lg:grid grid-cols-6 lg:px-14">
        <div class="col-span-4">
          <h1 class="text-lg mb-5">
            By <span class="font-bold"> {{ detailNews.data.author.name }}</span> ●
            {{ formatDate(detailNews.data.createdAt) }}
          </h1>
          <img :src="detailNews.data.image" :alt="detailNews.data.title" class="mb-4" />
          <p class="text-lg text-gray-500 leading-10" v-html="detailNews.data.body"></p>
        </div>
        <div class="col-span-2">
          <div class="lg:sticky lg:top-[7rem]">
            <h1 class="text-lg font-bold mb-4 border-l-4 border-blue-600 px-2">
              LATEST NEWS
            </h1>
            <div
              class="flex items-center mb-6"
              v-for="(late, index) in lateNews.data"
              :key="index"
            >
              <NuxtLink
                :to="`/berita/` + late.slug"
                id="boderNoneFontSemi"
                class="flex-shrink-0"
              >
                <img
                  :src="late.image"
                  alt=""
                  class="max-w-full w-24 h-24 block mr-3 object-cover rounded-lg"
                />
              </NuxtLink>
              <NuxtLink :to="`/berita/` + late.slug" id="boderNoneFontReg">
                <h5 class="font-bold">
                  {{ late.title.substring(0, 40) + ".." }}
                </h5>
                <p class="mb-2">{{ late.excerpt.substring(0, 50) + ".." }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Inialisasi
const runtimeConfigs = useRuntimeConfig();
const route = useRoute();

// fetch Data Detail
// const { data: detailNews, pending, refresh } = await useFetch(
//   () => `${runtimeConfigs.public.API_URL}/news/${route.params.id}`
// );
const { data: detailNews } = await useFetch(
  `${runtimeConfigs.public.API_URL}/news/${route.params.slug}`
);

// fetch Data Late
const { data: lateNews } = await useFetch(
  () => `${runtimeConfigs.public.API_URL}/news?paginate=4`
);

// Date Format
const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-GB", options);
};

// Image Style Background
const imageDetail = (image) => {
  return `background-image: url('${image}')`;
};
</script>

<style scoped></style>
